import { Github, Linkedin, CodeXml, BrainCircuit, Database, ServerCog, GraduationCap, Award, Users, Paintbrush, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectsSection from "@/components/projects-section";

const socialLinks = [
  { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/stuti-raghuwanshi-05b878257/" },
  { icon: <Github className="h-5 w-5" />, href: "https://github.com/stutiraghuwanshi" },
];

const skills = {
  "Programming Languages": [
    { icon: <CodeXml className="h-4 w-4 mr-2" />, name: "C++" },
    { icon: <CodeXml className="h-4 w-4 mr-2" />, name: "Python" },
    { icon: <CodeXml className="h-4 w-4 mr-2" />, name: "SQL" },
    { icon: <CodeXml className="h-4 w-4 mr-2" />, name: "HTML" },
    { icon: <CodeXml className="h-4 w-4 mr-2" />, name: "JavaScript" },
    { icon: <CodeXml className="h-4 w-4 mr-2" />, name: "Node.js" },
  ],
  "Frameworks & Tools": [
    { icon: <ServerCog className="h-4 w-4 mr-2" />, name: "React.js" },
    { icon: <ServerCog className="h-4 w-4 mr-2" />, name: "CSS" },
  ],
  "Databases": [
    { icon: <Database className="h-4 w-4 mr-2" />, name: "MongoDB (NoSQL)" },
    { icon: <Database className="h-4 w-4 mr-2" />, name: "SQL" },
  ],
};

const hobbies = [
  { icon: <Paintbrush className="h-6 w-6 text-primary" />, name: "Dance" },
  { icon: <Heart className="h-6 w-6 text-primary" />, name: "Coding Enthusiast" },
];


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
                    Computer Science undergraduate with hands-on experience in full-stack development and modern web technologies. Applied object-oriented programming principles and data structures to design efficient software solutions. Collaborated on team-based projects, optimized frontend performance.
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
                      <p className="text-muted-foreground">VIT Bhopal University, 2022-Present</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 mt-1 text-primary"/>
                    <div>
                      <h3 className="font-semibold">Software Engineer Intern</h3>
                      <p className="text-muted-foreground">HackerRank</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 mt-1 text-primary"/>
                    <div>
                      <h3 className="font-semibold">Bits and Bytes of Computer Networking</h3>
                      <p className="text-muted-foreground">Google/Coursera</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 mt-1 text-primary"/>
                    <div>
                      <h3 className="font-semibold">Marketing Analytics</h3>
                      <p className="text-muted-foreground">NPTEL</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 mt-1 text-primary"/>
                    <div>
                      <h3 className="font-semibold">AWS Academy Graduate - AWS Academy Cloud Architecting</h3>
                      <p className="text-muted-foreground">AWS</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 mt-1 text-primary"/>
                    <div>
                      <h3 className="font-semibold">Postman API Fundamentals Student Expert</h3>
                      <p className="text-muted-foreground">Postman</p>
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
                      <h3 className="font-semibold">Core Member, Cultural Club</h3>
                      <p className="text-muted-foreground">Enhanced audience engagement by integrating interactive elements like calligraphy workshops and traditional food stalls, resulting in 90%+ positive feedback and increased social media shares by 50%. Mentored 20+ junior club members, fostering a supportive team environment and improving internal communication by streamlining processes with WhatsApp and Workspace tools.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 mt-1 text-primary"/>
                    <div>
                      <h3 className="font-semibold">Hackathon participant</h3>
                      <p className="text-muted-foreground">Hands-On Workshop on IOT Data Analysis (DATALIZE Event), Volunteer for Advitya Fest, Industrial visits (Pune Hyderabad)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="hobbies">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Hobbies & Interests</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center gap-8">
                  {hobbies.map((hobby) => (
                    <div key={hobby.name} className="flex flex-col items-center gap-2">
                      {hobby.icon}
                      <span className="text-muted-foreground">{hobby.name}</span>
                    </div>
                  ))}
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
