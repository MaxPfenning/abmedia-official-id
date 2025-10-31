import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCTA = () => {
  const { t } = useLanguage();
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
            {t('finalCta.heading')}
          </h2>
          <p className="mb-10 text-lg md:text-xl text-white/95 font-light">
            {t('finalCta.subheading')}
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="group hover-lift shadow-xl hover:shadow-2xl text-base md:text-lg px-8 py-6"
              asChild
            >
              <a href="https://abmedia-team.com" target="_blank" rel="noopener noreferrer">
                {t('finalCta.visitSite')}
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
                {t('finalCta.consultation')}
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/10 blur-3xl animate-float" />
      <div className="absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      {/* Additional floating shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-lg rotate-12 animate-float" />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-white/5 rounded-full blur-xl animate-pulse-slow" />
    </section>
  );
};

export default FinalCTA;
