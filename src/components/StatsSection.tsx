import AnimatedCounter from "./AnimatedCounter";
import { Users, TrendingUp, Star, Award, Target, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      end: 500,
      suffix: "+",
      label: "Satisfied Clients",
      icon: <Users className="w-8 h-8" />,
      delay: 0
    },
    {
      end: 95,
      suffix: "%",
      label: "Success Rate",
      icon: <Target className="w-8 h-8" />,
      delay: 200
    },
    {
      end: 2500,
      suffix: "+",
      label: "Reviews Managed",
      icon: <Star className="w-8 h-8" />,
      delay: 400
    },
    {
      end: 150,
      suffix: "+",
      label: "GMB Profiles Optimized",
      icon: <CheckCircle className="w-8 h-8" />,
      delay: 600
    },
    {
      end: 4.9,
      decimals: 1,
      suffix: "★",
      label: "Average Client Rating",
      icon: <Award className="w-8 h-8" />,
      delay: 800
    },
    {
      end: 300,
      suffix: "%",
      label: "Average ROI Increase",
      icon: <TrendingUp className="w-8 h-8" />,
      delay: 1000
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-animated-gradient">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6">
            <TrendingUp className="h-5 w-5" />
            <span>Proven Results</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Real metrics from real businesses we've helped grow online
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              delay={stat.delay}
              decimals={stat.decimals}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
