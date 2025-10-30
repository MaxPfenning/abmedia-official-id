import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with office image and gradient overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 blur-sm"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] via-[hsl(var(--hero-gradient-overlay))] to-[hsl(var(--hero-gradient-end))]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Ready to Strengthen Your Online Reputation?
          </h2>
          <p className="mb-10 text-lg md:text-xl text-white/95 font-light">
            Join 500+ businesses that trust AB Media Team with their digital presence
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="group hover-lift shadow-xl hover:shadow-2xl text-base md:text-lg px-8 py-6"
              asChild
            >
              <a href="https://abmedia-team.com" target="_blank" rel="noopener noreferrer">
                Visit Main Site
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/50 shadow-xl transition-all duration-300 text-base md:text-lg px-8 py-6"
              asChild
            >
              <a href="https://abmedia-team.com/contact" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Request Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/10 blur-3xl animate-float" />
      <div className="absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default FinalCTA;
