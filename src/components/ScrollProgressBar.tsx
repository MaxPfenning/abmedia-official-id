import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setProgress(Math.min(Math.max(scrollPercent, 0), 100));
    };

    // Throttle function to limit updates to ~60fps
    let ticking = false;
    const throttledUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial calculation
    calculateProgress();

    // Add scroll listener
    window.addEventListener('scroll', throttledUpdate, { passive: true });
    window.addEventListener('resize', calculateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledUpdate);
      window.removeEventListener('resize', calculateProgress);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div 
        className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-150 ease-out shadow-lg"
        style={{ 
          width: `${progress}%`,
          boxShadow: progress > 0 ? '0 0 10px hsl(var(--primary) / 0.5)' : 'none'
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
