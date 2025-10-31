import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Disclaimer = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl animate-fade-in-up">
          <div className="rounded-2xl border-l-4 border-yellow-500 bg-gradient-to-r from-yellow-50/50 to-card dark:from-yellow-900/10 dark:to-card p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20 animate-pulse-slow">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-500" />
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-card-foreground">
                  {t('disclaimer.title')}
                </h3>
                <p 
                  className="text-base text-muted-foreground leading-relaxed mb-3"
                  dangerouslySetInnerHTML={{ __html: t('disclaimer.content1') }}
                />
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t('disclaimer.content2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
