import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Search, 
  MapPin, 
  Star, 
  Share2, 
  FileText, 
  Globe, 
  Building2, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import FloatingIcons from "./FloatingIcons";
import { servicesIcons } from "@/data/floatingIcons";

const Services = () => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: MapPin,
      titleKey: "services.items.0.title",
      descriptionKey: "services.items.0.description",
      link: "https://abmedia-team.com/services/gmb"
    },
    {
      icon: Star,
      titleKey: "services.items.1.title",
      descriptionKey: "services.items.1.description",
      link: "https://abmedia-team.com/services/reviews"
    },
    {
      icon: Search,
      titleKey: "services.items.2.title",
      descriptionKey: "services.items.2.description",
      link: "https://abmedia-team.com/services/seo"
    },
    {
      icon: Share2,
      titleKey: "services.items.3.title",
      descriptionKey: "services.items.3.description",
      link: "https://abmedia-team.com/services/social-media"
    },
    {
      icon: FileText,
      titleKey: "services.items.4.title",
      descriptionKey: "services.items.4.description",
      link: "https://abmedia-team.com/services/content"
    },
    {
      icon: ShieldCheck,
      titleKey: "services.items.5.title",
      descriptionKey: "services.items.5.description",
      link: "https://abmedia-team.com/services/reputation"
    }
  ];

  const benefits = [
    "Increase visibility",
    "Boost credibility",
    "Drive more leads",
    "Track results"
  ];

  return (
    <section ref={ref} id="services" className="relative py-24 overflow-hidden bg-animated-gradient-subtle">
      {/* Floating Brand Icons */}
      <FloatingIcons icons={servicesIcons} />
      
      {/* Background with subtle tech image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80)',
          }}
        />
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t('services.heading')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('services.subheading')}
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={cn(
                "group glass-card border-2 relative overflow-hidden transition-all duration-300",
                isVisible && "animate-scale-in",
                hoveredCard === index ? "scale-105 shadow-2xl border-primary/50 -translate-y-2" : "hover-lift hover:border-primary/30"
              )}
              style={{ animationDelay: isVisible ? `${index * 0.05}s` : '0s' }}
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-accent/5" />
              
              <CardHeader className="relative z-10">
                <div className="mb-4 relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg border border-primary/20">
                    <service.icon className="h-7 w-7" />
                  </div>
                  {/* Icon glow effect */}
                  <div className="absolute inset-0 blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardTitle className="text-lg font-bold">{t(service.titleKey)}</CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="mb-4 leading-relaxed">{t(service.descriptionKey)}</CardDescription>
                
                {/* Expandable benefits section */}
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    hoveredCard === index ? "max-h-48 opacity-100 mb-4" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm font-semibold text-foreground mb-2">Key Benefits:</p>
                    <ul className="space-y-1">
                      {benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Button 
                  variant={hoveredCard === index ? "default" : "link"} 
                  className={cn(
                    "transition-all duration-300",
                    hoveredCard === index ? "w-full" : "h-auto p-0 text-primary font-semibold group-hover:translate-x-1"
                  )} 
                  asChild
                >
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    {hoveredCard === index ? "Get Started" : `${t('services.learnMore')} →`}
                  </a>
                </Button>
              </CardContent>
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
