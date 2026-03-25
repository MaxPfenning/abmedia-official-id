import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  
  // Get FAQ structure from translations
  const faqCategories = [
    { key: 'general', data: t('faq.categories.general') as any },
    { key: 'services', data: t('faq.categories.services') as any },
    { key: 'legal', data: t('faq.categories.legal') as any },
    { key: 'pricing', data: t('faq.categories.pricing') as any }
  ];
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 section-pattern" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t('faq.heading')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('faq.subheading')}
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={category.key} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{category.data.title}</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {category.data.questions.map((faq: any, faqIndex: number) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`${categoryIndex}-${faqIndex}`}
                    className="glass-card px-6 rounded-lg border-2"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold text-foreground">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            {t('faq.stillHaveQuestions')}
          </p>
          <a 
            href="mailto:alice@myreviewmedia.com" 
            className="text-primary font-semibold hover:underline text-lg"
          >
            {t('faq.contact')} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
