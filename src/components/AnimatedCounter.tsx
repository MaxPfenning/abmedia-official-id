import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  icon?: React.ReactNode;
  delay?: number;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  decimals = 0,
  label,
  icon,
  delay = 0
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    const animateValue = () => {
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime - delay;
        
        if (elapsed < 0) {
          requestAnimationFrame(animate);
          return;
        }
        
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth deceleration
        const easeOutQuad = (t: number) => t * (2 - t);
        const easedProgress = easeOutQuad(progress);
        
        const current = easedProgress * end;
        setCount(current);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };
      
      requestAnimationFrame(animate);
    };

    animateValue();
  }, [isVisible, end, duration, delay]);

  const formatNumber = (num: number) => {
    return num.toFixed(decimals);
  };

  return (
    <div 
      ref={elementRef}
      className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border border-border/50 hover:scale-105 transition-transform duration-300"
    >
      {icon && (
        <div className="text-primary">
          {icon}
        </div>
      )}
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
        {prefix}{formatNumber(count)}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground text-center font-medium">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
