import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Shield className="h-5 w-5 text-white" />
            <span className="text-sm font-medium text-white">Secure • Trusted • Professional</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Your Trusted Partner for Digital Growth & Online Visibility
          </h1>
          
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            ReviewMeister.net is the official information hub for AB Media Team – Digital Marketing Services.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="group"
              asChild
            >
              <a href="https://abmedia-team.com" target="_blank" rel="noopener noreferrer">
                Visit AB Media Team
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
    </section>
  );
};

export default Hero;
