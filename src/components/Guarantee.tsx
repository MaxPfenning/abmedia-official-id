import { Shield, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Guarantee = () => {
  const { t } = useLanguage();

  const guarantees = [
    {
      icon: Shield,
      titleKey: "guarantee.items.0.title",
      descriptionKey: "guarantee.items.0.description"
    },
    {
      icon: TrendingUp,
      titleKey: "guarantee.items.1.title",
      descriptionKey: "guarantee.items.1.description"
    },
    {
      icon: Users,
      titleKey: "guarantee.items.2.title",
      descriptionKey: "guarantee.items.2.description"
    },
    {
      icon: CheckCircle,
      titleKey: "guarantee.items.3.title",
      descriptionKey: "guarantee.items.3.description"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success font-semibold mb-6">
            <Shield className="h-5 w-5" />
            <span>{t('guarantee.heading')}</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t('guarantee.heading')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('guarantee.subheading')}
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item, index) => (
            <Card 
              key={index}
              className="glass-card hover-lift text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className="mx-auto mb-4 relative w-fit">
                  <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute inset-0 blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t(item.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(item.descriptionKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block glass-card px-8 py-6 rounded-2xl">
            <p className="text-lg font-semibold text-foreground mb-2">
              {t('guarantee.clientsCount')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
