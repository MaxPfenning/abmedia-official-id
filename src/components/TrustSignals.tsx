import { Star, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import FloatingIcons from "./FloatingIcons";
import { trustSignalsIcons } from "@/data/floatingIcons";

const trustBadges = [
  { name: "Google Reviews", rating: "4.9" },
  { name: "Trustpilot", rating: "4.8" },
  { name: "YellowPages", rating: "5.0" },
  { name: "ProvenExpert", rating: "4.9" }
];

const TrustSignals = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-animated-gradient-subtle">
      {/* Floating Brand Icons */}
      <FloatingIcons icons={trustSignalsIcons} />
      
      {/* Background pattern */}
      <div className="absolute inset-0 section-pattern" />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-success/20 to-success/10 shadow-lg animate-pulse-slow border-2 border-success/20">
            <ShieldCheck className="h-10 w-10 text-success" />
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t('trustSignals.heading')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('trustSignals.subheading')}
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16 max-w-5xl mx-auto">
          {trustBadges.map((badge, index) => (
            <div 
              key={index}
              className={cn(
                "group relative flex flex-col items-center justify-center rounded-2xl border-2 bg-card p-10 text-center hover-lift shadow-lg hover:shadow-2xl overflow-hidden hover:border-primary/30 transition-all duration-300",
                isVisible && "animate-scale-in"
              )}
              style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
              
              <div className="mb-5 text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 relative z-10">{badge.rating}</div>
              <div className="mb-4 flex gap-1 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400 transition-transform group-hover:scale-110 duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>
              <div className="text-base font-bold text-foreground relative z-10">{badge.name}</div>
            </div>
          ))}
        </div>
        
        <div className="mx-auto max-w-3xl rounded-2xl border-l-4 border-success bg-card p-8 shadow-xl animate-fade-in hover-lift">
          <div className="flex gap-5">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/20">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <div>
              <p className="mb-3 text-lg font-bold text-card-foreground">{t('trustSignals.verified')}</p>
              <p className="text-base text-muted-foreground italic leading-relaxed mb-4">
                "{t('trustSignals.review')}"
              </p>
              <p className="text-sm font-semibold text-muted-foreground">
                — {t('trustSignals.author')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
