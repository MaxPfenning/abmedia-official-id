import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-40">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] via-[hsl(var(--hero-gradient-overlay))] to-[hsl(var(--hero-gradient-end))]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-effect px-5 py-2.5 animate-pulse-slow">
            <Shield className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white">Secure • Trusted • Professional</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl animate-slide-up">
            Your Trusted Partner for Digital Growth & Online Visibility
          </h1>
          
          <p className="mb-10 text-lg text-white/95 md:text-xl lg:text-2xl font-light animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            ReviewMeister.net is the official information hub for AB Media Team – Digital Marketing Services.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg"
              variant="secondary"
              className="group hover-lift shadow-lg hover:shadow-2xl text-base md:text-lg px-8 py-6"
              asChild
            >
              <a href="https://abmedia-team.com" target="_blank" rel="noopener noreferrer">
                Visit AB Media Team
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/50 shadow-lg text-base md:text-lg px-8 py-6 transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;
