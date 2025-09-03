"use client";

import { personalize } from "@/app/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { BrainCircuit, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const industries = [
  "Finance",
  "Healthcare",
  "E-commerce",
  "Education",
  "Entertainment",
  "Technology",
];

const initialProjects = [
  {
    id: 1,
    title: "AI-Powered E-commerce Platform",
    description: "Developed a personalized shopping experience using generative AI to recommend products and tailor marketing content to individual user profiles.",
    tags: ["Next.js", "AI", "Genkit", "E-commerce"],
    image: "https://picsum.photos/600/400?random=1",
    imageHint: "online shopping",
  },
  {
    id: 2,
    title: "Real-Time Collaborative Whiteboard",
    description: "Built a collaborative web application using WebSockets, allowing multiple users to draw and share ideas simultaneously.",
    tags: ["React", "Node.js", "WebSockets"],
    image: "https://picsum.photos/600/400?random=2",
    imageHint: "team collaboration",
  },
  {
    id: 3,
    title: "Cloud-Native Data Processing Pipeline",
    description: "Designed and implemented a scalable data pipeline on Google Cloud Platform for processing and analyzing large datasets efficiently.",
    tags: ["Google Cloud", "Python", "Big Data"],
    image: "https://picsum.photos/600/400?random=3",
    imageHint: "data server",
  },
];

type Project = typeof initialProjects[0];

const FormSchema = z.object({
  industry: z.string({
    required_error: "Please select an industry to personalize the content.",
  }),
});

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("industry", data.industry);
      formData.append("projects", JSON.stringify(initialProjects));

      const result = await personalize(null, formData);

      if (result.message === "Success" && result.data) {
        setProjects(result.data);
        toast({
          title: "Descriptions Personalized!",
          description: `Project descriptions have been tailored for the ${data.industry} industry.`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Personalization Failed",
          description: result.message || "An error occurred.",
        });
      }
    });
  };

  return (
    <section id="projects">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="font-headline mb-2 sm:mb-0">Projects</CardTitle>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2">
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Personalize for an industry..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                       <FormMessage className="mt-1" />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending}>
                  {isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <BrainCircuit className="mr-2 h-4 w-4" />
                  )}
                  Personalize
                </Button>
              </form>
            </Form>
          </div>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-1">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-shadow hover:shadow-lg">
               <div className="grid md:grid-cols-3">
                <div className="md:col-span-1">
                  <Image
                    alt={project.title}
                    className="aspect-video w-full object-cover"
                    height="400"
                    src={project.image}
                    width="600"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <div className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
