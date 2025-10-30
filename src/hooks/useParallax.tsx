import { useEffect, useState } from 'react';

interface UseParallaxOptions {
  speed?: number;
  disabled?: boolean;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, disabled = false } = options;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset(window.scrollY * speed);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, disabled]);

  return offset;
};
