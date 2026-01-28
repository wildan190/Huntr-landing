'use server';

import {
  generateClientSuccessStory,
  type GenerateClientSuccessStoryInput,
  type GenerateClientSuccessStoryOutput,
} from '@/ai/flows/generate-client-success-story';
import { z } from 'zod';

const storySchema = z.object({
  clientName: z.string().min(1, 'Client name is required.'),
  industry: z.string().min(1, 'Industry is required.'),
  successMetrics: z.string().min(1, 'Success metrics are required.'),
  testimonial: z.string().min(1, 'Testimonial is required.'),
  context: z.string().min(1, 'Context is required.'),
});

type State = {
  data?: GenerateClientSuccessStoryOutput | null;
  error?: {
    [key: string]: string[] | undefined;
    _server?: string[];
  } | null;
  message?: string;
};

export async function createSuccessStory(
  prevState: State,
  formData: FormData
): Promise<State> {
  const rawData = Object.fromEntries(formData.entries());

  const validation = storySchema.safeParse(rawData);

  if (!validation.success) {
    return {
      error: validation.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateClientSuccessStory(
      validation.data as GenerateClientSuccessStoryInput
    );
    return { data: result, message: 'Success!' };
  } catch (e) {
    console.error(e);
    return {
      error: { _server: ['An unexpected error occurred. Please try again.'] },
    };
  }
}
