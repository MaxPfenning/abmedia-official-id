import { AlertCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const UrgencyBanner = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show banner after 3 seconds of page load
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    // Show banner again when scrolling past 50% of page
    const handleScroll = () => {
      if (!isDismissed && window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up max-w-2xl w-full mx-4">
      <div className="relative glass-effect border-2 border-warning/50 bg-warning/90 backdrop-blur-lg rounded-2xl shadow-2xl p-4 md:p-6">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4 text-white" />
        </button>
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <div className="text-white">
              <p className="font-bold text-lg mb-1">{t('urgencyBanner.title')}</p>
              <p className="text-sm text-white/90">
                {t('urgencyBanner.description')}
              </p>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-white text-warning hover:bg-white/90 font-bold shadow-lg flex-shrink-0"
            asChild
          >
            <a href="tel:+492037090726">
              <Phone className="mr-2 h-5 w-5" />
              {t('urgencyBanner.cta')}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
