import { FileSearch, Lightbulb, Rocket, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Free Consultation & Analysis",
    description: "We analyze your current online presence and identify opportunities for growth.",
    timeline: "1-2 Days"
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy Development",
    description: "Custom strategy tailored to your business goals and target audience.",
    timeline: "3-5 Days"
  },
  {
    icon: Rocket,
    step: "03",
    title: "Implementation & Monitoring",
    description: "Execute the plan with continuous monitoring and optimization.",
    timeline: "Ongoing"
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Results & Reporting",
    description: "Regular reports showing measurable improvements and ROI.",
    timeline: "Monthly"
  }
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 section-pattern" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Our proven process delivers results in four simple steps
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />
          
          {steps.map((item, index) => (
            <Card 
              key={index}
              className="relative glass-card hover-lift animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {item.step}
              </div>
              
              <CardHeader>
                <div className="mb-4 relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute inset-0 blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {item.timeline}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
