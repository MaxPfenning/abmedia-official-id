import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import FloatingIcons from "./FloatingIcons";
import { heroIcons } from "@/data/floatingIcons";

const Hero = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-40">
      {/* Floating Brand Icons */}
      <FloatingIcons icons={heroIcons} />
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 blur-md"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))]/80 via-[hsl(var(--hero-gradient-overlay))]/70 to-[hsl(var(--hero-gradient-end))]/80" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[hsl(var(--hero-gradient-end))]/40" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-effect px-5 py-2.5 animate-pulse-slow">
            <Shield className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white">{t('hero.badge')}</span>
          </div>
          
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl animate-slide-up">
            {t('hero.title')}
          </h1>
          
          <p className="mb-4 text-xl text-white/95 md:text-2xl lg:text-3xl font-semibold animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.subtitle')}
          </p>
          
          <p className="mb-10 text-base text-white/90 md:text-lg max-w-3xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg"
              variant="secondary"
              className="group hover-lift shadow-2xl hover:shadow-3xl text-base md:text-lg px-10 py-7 font-bold"
              onClick={scrollToContact}
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/50 shadow-xl text-base md:text-lg px-10 py-7 transition-all duration-300 font-bold"
              asChild
            >
              <a href="tel:+492037090726">
                <Phone className="mr-2 h-5 w-5" />
                {t('hero.ctaSecondary')}
              </a>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-white/80 text-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Phone className="h-4 w-4" />
            <span className="font-medium">{t('hero.emergency')}</span>
          </div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Hero;
