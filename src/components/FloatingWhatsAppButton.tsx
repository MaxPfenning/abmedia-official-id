import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const FloatingWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const whatsappNumber = "4920370907262"; // +49 203 70907262
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in your services!");

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }, 5000);

    return () => clearInterval(shakeInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-28 left-6 z-50 animate-scale-in ${isShaking ? 'animate-shake' : ''}`}
      aria-label="Contact us on WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full px-6 py-4 shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="text-white font-semibold text-base">WhatsApp</span>
      </Button>
    </a>
  );
};

export default FloatingWhatsAppButton;
