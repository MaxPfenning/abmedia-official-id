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
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Get current month for seasonal promotions
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  const banners: Banner[] = [
    {
      type: 'seasonal',
      message: `Get 20% off SEO audits this ${currentMonth}! 🎉`,
      icon: <Sparkles className="w-5 h-5" />,
      variant: 'success',
      cta: 'Claim Offer'
    },
    {
      type: 'capacity',
      message: "⚠️ We're 85% booked this month - Only 4 consultation spots remaining!",
      icon: <AlertCircle className="w-5 h-5" />,
      variant: 'warning',
      cta: 'Book Now'
    },
    {
      type: 'limited',
      message: '🎁 Free Google My Business audit - Limited time offer ends soon!',
      icon: <Clock className="w-5 h-5" />,
      variant: 'destructive',
      cta: 'Get Free Audit'
    },
    {
      type: 'social',
      message: '🚀 Join 500+ businesses who improved their rankings this year',
      icon: <TrendingUp className="w-5 h-5" />,
      variant: 'default',
      cta: 'Learn More'
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
