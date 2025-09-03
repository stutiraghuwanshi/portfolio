"use server";

import { personalizeProjectDescriptions } from "@/ai/flows/personalize-project-descriptions";
import { z } from "zod";

const personalizeSchema = z.object({
  industry: z.string(),
  projects: z.array(z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
  }))
});

export async function personalize(prevState: any, formData: FormData) {
  try {
    const rawData = {
      industry: formData.get("industry"),
      projects: JSON.parse(formData.get("projects") as string),
    };
  
    const parsed = personalizeSchema.safeParse(rawData);

    if (!parsed.success) {
      return { message: "Invalid input", error: parsed.error.flatten() };
    }
    
    const { industry, projects } = parsed.data;

    const originalDescriptions = projects
      .map((p, i) => `${i + 1}. ${p.description}`)
      .join('\n\n');

    const result = await personalizeProjectDescriptions({
      visitorIndustry: industry,
      projectDescriptions: originalDescriptions,
    });

    if (!result.personalizedDescriptions) {
      return { message: "Could not personalize descriptions.", error: null };
    }
    
    const newDescriptions = result.personalizedDescriptions
      .split('\n')
      .map(line => line.replace(/^\d+\.\s*/, '').trim())
      .filter(Boolean);

    if (newDescriptions.length !== projects.length) {
      // Fallback if parsing fails
      return { message: "Successfully personalized, but failed to parse. Displaying raw.", data: projects.map(p => ({ ...p, description: result.personalizedDescriptions })) };
    }

    const updatedProjects = projects.map((project, index) => ({
      ...project,
      description: newDescriptions[index] || project.description,
    }));

    return { message: "Success", data: updatedProjects };
  } catch (e: any) {
    console.error(e);
    return { message: "An unexpected error occurred.", error: e.message };
  }
}
