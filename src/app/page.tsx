import { Github, Linkedin, CodeXml, BrainCircuit, Database, ServerCog, GraduationCap, Award, Users, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectsSection from "@/components/projects-section";

const socialLinks = [
  { icon: <Linkedin className="h-5 w-5" />, href: "#" },
  { icon: <Github className="h-5 w-5" />, href: "#" },
];

const skills = {
  "Languages": [
    { icon: <CodeXml className="h-4 w-4 mr-2" />, name: "JavaScript" },
    { icon: <CodeXml className="h-4 w-4 mr-2" />, name: "TypeScript" },
    { icon: <CodeXml className="h-4 w-4 mr-2" />, name: "Python" },
    { icon: <CodeXml className="h-4 w-4 mr-2" />, name: "Java" },
  ],
  "Frameworks & Libraries": [
    { icon: <ServerCog className="h-4 w-4 mr-2" />, name: "React" },
    { icon: <ServerCog className="h-4 w-4 mr-2" />, name: "Next.js" },
    { icon: <ServerCog className="h-4 w-4 mr-2" />, name: "Node.js" },
    { icon: <ServerCog className="h-4 w-4 mr-2" />, name: "Express" },
  ],
  "Databases": [
    { icon: <Database className="h-4 w-4 mr-2" />, name: "MongoDB" },
    { icon: <Database className="h-4 w-4 mr-2" />, name: "PostgreSQL" },
    { icon: <Database className="h-4 w-4 mr-2" />, name: "Firebase" },
  ],
  "Tools & Platforms": [
    { icon: <Briefcase className="h-4 w-4 mr-2" />, name: "Docker" },
    { icon: <Briefcase className="h-4 w-4 mr-2" />, name: "Git" },
    { icon: <Briefcase className="h-4 w-4 mr-2" />, name: "Vercel" },
    { icon: <Briefcase className="h-4 w-4 mr-2" />, name: "Google Cloud" },
  ],
  "AI/ML": [
    { icon: <BrainCircuit className="h-4 w-4 mr-2" />, name: "Genkit" },
    { icon: <BrainCircuit className="h-4 w-4 mr-2" />, name: "TensorFlow" },
    { icon: <BrainCircuit className="h-4 w-4 mr-2" />, name: "Scikit-learn" },
  ],
};


export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-12">
            <header className="space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Stuti Raghuwanshi
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Software Engineer & AI Enthusiast
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link, index) => (
                  <Button key={index} variant="outline" size="icon" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </header>

            <section id="about">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A passionate and driven software engineer with a knack for building innovative and user-centric applications. With a strong foundation in full-stack development and a keen interest in artificial intelligence, I thrive on turning complex problems into elegant solutions. I'm constantly learning and seeking new challenges to push the boundaries of what's possible in tech.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="skills">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(skills).map(([category, skillsList]) => (
                    <div key={category}>
                      <h3 className="mb-2 font-semibold">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsList.map((skill) => (
                          <Badge key={skill.name} variant="secondary" className="text-sm py-1 px-3">
                            {skill.icon}
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            <ProjectsSection />
            
            <section id="education-certifications">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Education & Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-8 w-8 mt-1 text-primary"/>
                    <div>
                      <h3 className="font-semibold">B.Tech in Computer Science & Engineering</h3>
                      <p className="text-muted-foreground">XYZ University, 2020-2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 mt-1 text-primary"/>
                    <div>
                      <h3 className="font-semibold">Google Cloud Certified - Professional Cloud Developer</h3>
                      <p className="text-muted-foreground">Google</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="leadership-activities">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Leadership & Activities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 mt-1 text-primary"/>
                    <div>
                      <h3 className="font-semibold">Lead, Developer Student Club</h3>
                      <p className="text-muted-foreground">Organized workshops and hackathons, fostering a community of student developers.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 mt-1 text-primary"/>
                    <div>
                      <h3 className="font-semibold">Mentor, Girls Who Code</h3>
                      <p className="text-muted-foreground">Mentored high school students, teaching them programming fundamentals and inspiring them to pursue careers in tech.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Stuti Raghuwanshi. All rights reserved.
      </footer>
    </div>
  );
}
