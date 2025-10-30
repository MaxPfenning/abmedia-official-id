import { Target, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 section-pattern opacity-50" />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t('about.heading')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t('about.description')}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="text-center group animate-slide-up">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border-2 border-primary/20">
              <Target className="h-10 w-10 text-primary group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">{t('about.mission.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>
          
          <div className="text-center group animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border-2 border-primary/20">
              <Users className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">{t('about.clients.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.clients.description')}
            </p>
          </div>
          
          <div className="text-center group animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border-2 border-primary/20">
              <Award className="h-10 w-10 text-primary group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">{t('about.results.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.results.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
