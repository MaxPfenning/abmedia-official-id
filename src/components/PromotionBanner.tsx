import { useState, useEffect } from 'react';
import { X, Sparkles, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface Banner {
  type: 'seasonal' | 'capacity' | 'limited' | 'social';
  message: string;
  icon: React.ReactNode;
  variant: 'default' | 'success' | 'warning' | 'destructive';
  cta: string;
}

const PromotionBanner = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Get current month in the correct language
  const currentMonth = new Date().toLocaleString(
    language === 'de' ? 'de-DE' : 'en-US', 
    { month: 'long' }
  );

  const banners: Banner[] = [
    {
      type: 'seasonal',
      message: t('promotionBanner.seasonal.message').replace('{month}', currentMonth),
      icon: <Sparkles className="w-5 h-5" />,
      variant: 'success',
      cta: t('promotionBanner.seasonal.cta')
    },
    {
      type: 'capacity',
      message: t('promotionBanner.capacity.message'),
      icon: <AlertCircle className="w-5 h-5" />,
      variant: 'warning',
      cta: t('promotionBanner.capacity.cta')
    },
    {
      type: 'limited',
      message: t('promotionBanner.limited.message'),
      icon: <Clock className="w-5 h-5" />,
      variant: 'destructive',
      cta: t('promotionBanner.limited.cta')
    },
    {
      type: 'social',
      message: t('promotionBanner.social.message'),
      icon: <TrendingUp className="w-5 h-5" />,
      variant: 'default',
      cta: t('promotionBanner.social.cta')
    }
  ];

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [banners.length, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => setIsDismissed(true), 300);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isDismissed) return null;

  const currentBanner = banners[currentIndex];

  const variantStyles = {
    default: 'bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-primary/30',
    success: 'bg-gradient-to-r from-success/20 via-success/30 to-success/20 border-success/30',
    warning: 'bg-gradient-to-r from-warning/20 via-warning/30 to-warning/20 border-warning/30',
    destructive: 'bg-gradient-to-r from-destructive/20 via-destructive/30 to-destructive/20 border-destructive/30'
  };

  return (
    <div
      className={`w-full border-b transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      } ${variantStyles[currentBanner.variant]}`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Icon & Message */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="text-foreground flex-shrink-0">
              {currentBanner.icon}
            </div>
            <p className="text-sm md:text-base font-medium text-foreground animate-fade-in">
              {currentBanner.message}
            </p>
          </div>

          {/* CTA & Close */}
          <div className="flex items-center gap-3">
            <Button 
              size="sm"
              variant="default"
              onClick={scrollToContact}
              className="font-semibold animate-pulse"
            >
              {currentBanner.cta}
            </Button>
            
            <button
              onClick={handleDismiss}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
