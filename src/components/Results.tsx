import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Star, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import FloatingIcons from "./FloatingIcons";
import { resultsIcons } from "@/data/floatingIcons";

const Results = () => {
  const { t } = useLanguage();

  const results = [
    {
      industryKey: "results.cases.0.industry",
      badgeKey: "results.cases.0.badge",
      problemKey: "results.cases.0.problem",
      solutionKey: "results.cases.0.solution",
      results: [
        { labelKey: "results.cases.0.results.0.label", valueKey: "results.cases.0.results.0.value", icon: Clock },
        { labelKey: "results.cases.0.results.1.label", valueKey: "results.cases.0.results.1.value", icon: TrendingUp },
        { labelKey: "results.cases.0.results.2.label", valueKey: "results.cases.0.results.2.value", icon: Star }
      ]
    },
    {
      industryKey: "results.cases.1.industry",
      badgeKey: "results.cases.1.badge",
      problemKey: "results.cases.1.problem",
      solutionKey: "results.cases.1.solution",
      results: [
        { labelKey: "results.cases.1.results.0.label", valueKey: "results.cases.1.results.0.value", icon: TrendingUp },
        { labelKey: "results.cases.1.results.1.label", valueKey: "results.cases.1.results.1.value", icon: Star },
        { labelKey: "results.cases.1.results.2.label", valueKey: "results.cases.1.results.2.value", icon: TrendingUp }
      ]
    },
    {
      industryKey: "results.cases.2.industry",
      badgeKey: "results.cases.2.badge",
      problemKey: "results.cases.2.problem",
      solutionKey: "results.cases.2.solution",
      results: [
        { labelKey: "results.cases.2.results.0.label", valueKey: "results.cases.2.results.0.value", icon: TrendingUp },
        { labelKey: "results.cases.2.results.1.label", valueKey: "results.cases.2.results.1.value", icon: Star },
        { labelKey: "results.cases.2.results.2.label", valueKey: "results.cases.2.results.2.value", icon: Users }
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
      {/* Floating Brand Icons */}
      <FloatingIcons icons={resultsIcons} />
      
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success font-semibold mb-6">
            <TrendingUp className="h-5 w-5" />
            <span>{t('results.badge')}</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t('results.heading')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('results.subheading')}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {results.map((item, index) => (
            <Card 
              key={index}
              className="glass-card hover-lift group animate-scale-in border-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{t(item.industryKey)}</h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {t(item.badgeKey)}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-destructive mb-1">{t('results.cases.0.problem').split(':')[0]}:</p>
                    <p className="text-muted-foreground">{t(item.problemKey)}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-success mb-1">{t('results.cases.0.solution').split(':')[0]}:</p>
                    <p className="text-muted-foreground">{t(item.solutionKey)}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 pt-4 border-t">
                  {item.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <result.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                      <p className="text-lg font-bold text-foreground mb-1">{t(result.valueKey)}</p>
                      <p className="text-xs text-muted-foreground">{t(result.labelKey)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            {t('results.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
