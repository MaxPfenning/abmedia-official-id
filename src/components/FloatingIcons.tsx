interface FloatingIcon {
  src: string;
  alt: string;
  size: 'sm' | 'md' | 'lg';
  animation: 'float-slow' | 'drift-horizontal' | 'diagonal-float' | 'rotate-gentle' | 'pulse-glow';
  position: { top?: string; left?: string; right?: string; bottom?: string };
  delay: number;
  opacity: number;
}

interface FloatingIconsProps {
  icons: FloatingIcon[];
}

const iconSizes = {
  sm: '40px',
  md: '60px',
  lg: '80px',
};

const FloatingIcons = ({ icons }: FloatingIconsProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`absolute animate-${icon.animation}`}
          style={{
            ...icon.position,
            width: iconSizes[icon.size],
            height: iconSizes[icon.size],
            opacity: icon.opacity,
            animationDelay: `${icon.delay}s`,
          }}
        >
          <img 
            src={icon.src} 
            alt={icon.alt}
            aria-hidden="true"
            className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
