import { Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 section-pattern opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            About AB Media Team
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            AB Media Team helps local and international businesses grow their digital presence through trusted SEO, Google My Business, and online reputation services.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="text-center group animate-slide-up">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border-2 border-primary/20">
              <Target className="h-10 w-10 text-primary group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empowering businesses with transparent, effective digital marketing solutions
            </p>
          </div>
          
          <div className="text-center group animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border-2 border-primary/20">
              <Users className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">500+ Clients</h3>
            <p className="text-muted-foreground leading-relaxed">
              Trusted by verified businesses across Europe
            </p>
          </div>
          
          <div className="text-center group animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border-2 border-primary/20">
              <Award className="h-10 w-10 text-primary group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">Proven Results</h3>
            <p className="text-muted-foreground leading-relaxed">
              4.9-star average rating across all platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
