'use server';

/**
 * @fileOverview A flow that personalizes project descriptions based on visitor's industry.
 *
 * - personalizeProjectDescriptions - A function that personalizes project descriptions.
 * - PersonalizeProjectDescriptionsInput - The input type for the personalizeProjectDescriptions function.
 * - PersonalizeProjectDescriptionsOutput - The return type for the personalizeProjectDescriptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeProjectDescriptionsInputSchema = z.object({
  visitorIndustry: z
    .string()
    .describe('The industry of the visitor viewing the project descriptions.'),
  projectDescriptions: z
    .string()
    .describe('The original project descriptions to be personalized.'),
});
export type PersonalizeProjectDescriptionsInput = z.infer<
  typeof PersonalizeProjectDescriptionsInputSchema
>;

const PersonalizeProjectDescriptionsOutputSchema = z.object({
  personalizedDescriptions: z
    .string()
    .describe('The project descriptions personalized for the visitor.'),
});
export type PersonalizeProjectDescriptionsOutput = z.infer<
  typeof PersonalizeProjectDescriptionsOutputSchema
>;

export async function personalizeProjectDescriptions(
  input: PersonalizeProjectDescriptionsInput
): Promise<PersonalizeProjectDescriptionsOutput> {
  return personalizeProjectDescriptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeProjectDescriptionsPrompt',
  input: {schema: PersonalizeProjectDescriptionsInputSchema},
  output: {schema: PersonalizeProjectDescriptionsOutputSchema},
  prompt: `You are an expert at tailoring project descriptions to be relevant to specific industries.

  A visitor from the {{{visitorIndustry}}} industry is viewing the following project descriptions.  Rewrite the project descriptions to highlight the aspects that would be most relevant and interesting to someone in that industry.

  Original project descriptions: {{{projectDescriptions}}}

  Personalized project descriptions:`, /* Safety settings omitted */
});

const personalizeProjectDescriptionsFlow = ai.defineFlow(
  {
    name: 'personalizeProjectDescriptionsFlow',
    inputSchema: PersonalizeProjectDescriptionsInputSchema,
    outputSchema: PersonalizeProjectDescriptionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
