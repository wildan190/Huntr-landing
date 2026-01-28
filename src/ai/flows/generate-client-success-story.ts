'use server';

/**
 * @fileOverview Generates client success stories using available testimonials and metrics.
 *
 * - generateClientSuccessStory - A function that generates a client success story.
 * - GenerateClientSuccessStoryInput - The input type for the generateClientSuccessStory function.
 * - GenerateClientSuccessStoryOutput - The return type for the generateClientSuccessStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateClientSuccessStoryInputSchema = z.object({
  clientName: z.string().describe('The name of the client.'),
  industry: z.string().describe('The industry of the client.'),
  successMetrics: z.string().describe('Key success metrics achieved by the client.'),
  testimonial: z.string().describe('A quote from the client.'),
  context: z
    .string()
    .optional()
    .describe('The context in which the story will be used (e.g., website, social media, email).'),
});
export type GenerateClientSuccessStoryInput = z.infer<typeof GenerateClientSuccessStoryInputSchema>;

const GenerateClientSuccessStoryOutputSchema = z.object({
  successStory: z.string().describe('The generated client success story.'),
});
export type GenerateClientSuccessStoryOutput = z.infer<typeof GenerateClientSuccessStoryOutputSchema>;

export async function generateClientSuccessStory(
  input: GenerateClientSuccessStoryInput
): Promise<GenerateClientSuccessStoryOutput> {
  return generateClientSuccessStoryFlow(input);
}

const generateClientSuccessStoryPrompt = ai.definePrompt({
  name: 'generateClientSuccessStoryPrompt',
  input: {schema: GenerateClientSuccessStoryInputSchema},
  output: {schema: GenerateClientSuccessStoryOutputSchema},
  prompt: `You are a marketing expert tasked with creating compelling client success stories.

  Based on the client's information, their success metrics, and their testimonial, craft a short and engaging success story.

  Client Name: {{{clientName}}}
  Industry: {{{industry}}}
  Success Metrics: {{{successMetrics}}}
  Testimonial: {{{testimonial}}}
  Context: {{{context}}}

  Success Story:`,
});

const generateClientSuccessStoryFlow = ai.defineFlow(
  {
    name: 'generateClientSuccessStoryFlow',
    inputSchema: GenerateClientSuccessStoryInputSchema,
    outputSchema: GenerateClientSuccessStoryOutputSchema,
  },
  async input => {
    const {output} = await generateClientSuccessStoryPrompt(input);
    return output!;
  }
);
