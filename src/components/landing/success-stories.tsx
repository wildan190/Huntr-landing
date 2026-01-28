'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { createSuccessStory } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

const initialState = {
  data: null,
  error: null,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Generating...' : 'Generate Story'}
    </Button>
  );
}

export function SuccessStories() {
  const [state, formAction] = useFormState(createSuccessStory, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error?._server) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: state.error._server[0],
      });
    }
  }, [state, toast]);

  return (
    <section id="success-stories" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold">Generate Client Success Stories</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Use our AI tool to craft compelling client success stories. Enter the client's details, and watch the magic happen.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Story Generator</CardTitle>
              <CardDescription>Fill in the details to create a new success story.</CardDescription>
            </CardHeader>
            <form action={formAction}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="clientName">Client Name</Label>
                  <Input id="clientName" name="clientName" placeholder="e.g., Acme Corporation" />
                  {state.error?.clientName && <p className="text-sm font-medium text-destructive">{state.error.clientName[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input id="industry" name="industry" placeholder="e.g., Manufacturing" />
                  {state.error?.industry && <p className="text-sm font-medium text-destructive">{state.error.industry[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="successMetrics">Success Metrics</Label>
                  <Input id="successMetrics" name="successMetrics" placeholder="e.g., 30% cost reduction" />
                  {state.error?.successMetrics && <p className="text-sm font-medium text-destructive">{state.error.successMetrics[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="testimonial">Testimonial</Label>
                  <Textarea id="testimonial" name="testimonial" placeholder="A quote from the client." />
                   {state.error?.testimonial && <p className="text-sm font-medium text-destructive">{state.error.testimonial[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="context">Usage Context</Label>
                  <Select name="context">
                    <SelectTrigger id="context">
                      <SelectValue placeholder="Select a context" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="email-campaign">Email Campaign</SelectItem>
                    </SelectContent>
                  </Select>
                  {state.error?.context && <p className="text-sm font-medium text-destructive">{state.error.context[0]}</p>}
                </div>
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>

          <div className="mt-8 lg:mt-0">
            <h3 className="text-2xl font-headline font-bold mb-4">Generated Story</h3>
            <Card className="min-h-[400px]">
              <CardContent className="p-6">
                {state.data?.successStory ? (
                  <p className="text-muted-foreground whitespace-pre-wrap">{state.data.successStory}</p>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                    <p>Your generated success story will appear here.</p>
                  </div>
                )}
                 {state.error?._server && (
                    <Alert variant="destructive" className="mt-4">
                      <Terminal className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        {state.error._server[0]}
                      </AlertDescription>
                    </Alert>
                  )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
