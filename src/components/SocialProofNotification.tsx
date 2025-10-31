import { useEffect, useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { generateNotification, getTimeAgo, NotificationData } from '@/utils/notificationGenerator';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/i18n/translations';

const SocialProofNotification = () => {
  const { t, language } = useLanguage();
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Check if mobile
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    // Don't show on mobile or if user prefers reduced motion
    if (isMobile || prefersReducedMotion) return;

  const showNotification = () => {
    if (isPaused) return;

    // Get translated actions array directly from translations
    const actions = translations[language].socialProof.actions;
    const notification = generateNotification(actions);
      
      setNotifications(prev => [...prev, notification]);
      setIsVisible(true);

      // Remove notification after 8 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== notification.id));
      }, 8000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 3000);

    // Then show every 15-20 seconds
    const interval = setInterval(() => {
      const randomDelay = 15000 + Math.random() * 5000; // 15-20 seconds
      setTimeout(showNotification, randomDelay);
    }, 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isPaused, isMobile, prefersReducedMotion, language]);

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Don't render on mobile or if user prefers reduced motion
  if (isMobile || prefersReducedMotion) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 max-w-sm pointer-events-none">
      {notifications.slice(-3).map((notification, index) => (
        <div
          key={notification.id}
          className="pointer-events-auto animate-slide-in-right bg-background/95 backdrop-blur-md border border-border shadow-2xl rounded-lg p-4 flex items-start gap-3 hover:scale-105 transition-transform duration-200"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            opacity: 1 - (index * 0.15),
            transform: `translateY(-${index * 8}px) scale(${1 - (index * 0.05)})`
          }}
        >
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
            {getInitials(notification.name)}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="font-semibold text-foreground text-sm truncate">
                    {notification.name}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  {notification.city}
                </p>
                <p className="text-sm text-foreground">
                  {notification.action}
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={() => dismissNotification(notification.id)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 -mt-1 -mr-1 flex-shrink-0"
                aria-label="Dismiss notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Timestamp */}
            <p className="text-xs text-muted-foreground mt-2">
              {getTimeAgo(notification.timestamp, {
                justNow: t('socialProof.timeAgo.justNow'),
                minuteAgo: t('socialProof.timeAgo.minuteAgo'),
                minutesAgo: t('socialProof.timeAgo.minutesAgo')
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialProofNotification;
