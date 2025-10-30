import { Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-in-up">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            About AB Media Team
          </h2>
          <p className="text-lg text-muted-foreground">
            AB Media Team helps local and international businesses grow their digital presence through trusted SEO, Google My Business, and online reputation services.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center animate-fade-in">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground">
              Empowering businesses with transparent, effective digital marketing solutions
            </p>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">500+ Clients</h3>
            <p className="text-muted-foreground">
              Trusted by verified businesses across Europe
            </p>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Proven Results</h3>
            <p className="text-muted-foreground">
              4.9-star average rating across all platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
