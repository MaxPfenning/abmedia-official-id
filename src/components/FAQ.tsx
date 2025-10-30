import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What services does AB Media Team offer?",
        a: "We provide comprehensive digital marketing services including SEO, Google My Business management, review management, social media marketing, content creation, web design, business citations, and account recovery services."
      },
      {
        q: "How quickly can I expect results?",
        a: "Results vary by service. Some improvements like GMB optimization can show results within days, while SEO typically shows significant results in 3-6 months. We provide realistic timelines during consultation."
      },
      {
        q: "Do you work with businesses outside of Germany?",
        a: "Yes! While we're based in Duisburg, Germany, we work with businesses internationally, offering services in both German and English."
      }
    ]
  },
  {
    category: "Services",
    questions: [
      {
        q: "Can you help recover a suspended Google My Business account?",
        a: "Yes, account recovery is one of our specialized services. We have extensive experience with suspended GMB accounts, locked listings, and verification issues. Contact us for immediate assistance."
      },
      {
        q: "What's included in your review management service?",
        a: "Our review management includes monitoring all major platforms, responding to reviews professionally, implementing strategies to increase positive reviews, and managing your online reputation across multiple channels."
      },
      {
        q: "Do you offer custom packages?",
        a: "Absolutely! We understand every business is unique. We create customized packages based on your specific needs, goals, and budget during the free consultation."
      }
    ]
  },
  {
    category: "Legal & Compliance",
    questions: [
      {
        q: "Are your services GDPR compliant?",
        a: "Yes, all our services are fully compliant with GDPR and German data protection laws. We take privacy and compliance very seriously."
      },
      {
        q: "Do you have business insurance?",
        a: "Yes, AB Media Team is fully insured and registered in Germany (Betriebsnummer: 10750003655)."
      }
    ]
  },
  {
    category: "Pricing & Process",
    questions: [
      {
        q: "How much do your services cost?",
        a: "Pricing varies based on the scope of work and your specific needs. We offer competitive rates and transparent pricing. Schedule a free consultation to receive a customized quote."
      },
      {
        q: "What is your refund policy?",
        a: "We work on a satisfaction-based model. If you're not happy with our initial strategy proposal, there's no obligation to proceed. For ongoing services, terms are outlined in our service agreement."
      },
      {
        q: "How long are your contracts?",
        a: "We offer flexible contract terms. Most services are month-to-month after an initial setup period. We believe in earning your business every month through results."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 section-pattern" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{category.category}</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((faq, faqIndex) => (
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
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="mailto:kontakt.abmedia@gmail.com" 
            className="text-primary font-semibold hover:underline text-lg"
          >
            Contact us directly →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
