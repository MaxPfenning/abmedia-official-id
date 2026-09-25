import { Globe, Search, CheckCircle2, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Packages = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const packages = [
    { icon: Globe, index: 0, service: "Web Design", featured: false },
    { icon: Globe, index: 1, service: "Web Design", featured: true },
    { icon: Search, index: 2, service: "SEO Services", featured: false },
    { icon: Search, index: 3, service: "SEO Services", featured: true },
  ];

  const handleSelect = (service: string) => {
    window.dispatchEvent(new CustomEvent("package-select", { detail: service }));
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} id="packages" className="relative py-24 overflow-hidden bg-animated-gradient-subtle">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t('packages.heading')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('packages.subheading')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => {
            const features = t(`packages.items.${pkg.index}.features`) as string[];
            return (
              <Card
                key={i}
                className={cn(
                  "group glass-card border-2 relative overflow-hidden flex flex-col transition-all duration-300 hover-lift hover:border-primary/40",
                  isVisible && "animate-scale-in",
                  pkg.featured && "border-primary/50"
                )}
                style={{ animationDelay: isVisible ? `${i * 0.05}s` : '0s' }}
              >
                {pkg.featured && (
                  <div className="absolute top-3 right-3 z-20 inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">
                    <Sparkles className="h-3 w-3" />
                    {t('packages.recommended')}
                  </div>
                )}

                <CardHeader className="relative z-10">
                  <div className="mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg border border-primary/20">
                      <pkg.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold">{t(`packages.items.${pkg.index}.title`)}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{t(`packages.items.${pkg.index}.description`)}</p>
                </CardHeader>

                <CardContent className="relative z-10 flex flex-col flex-1">
                  <ul className="space-y-2 mb-6">
                    {(Array.isArray(features) ? features : []).map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="mt-auto w-full font-semibold"
                    variant={pkg.featured ? "default" : "outline"}
                    onClick={() => handleSelect(pkg.service)}
                  >
                    {t('packages.requestOffer')}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
