import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const FloatingWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "492037090726"; // +49 203 70907262
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in your services!");

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-6 z-50 animate-scale-in"
      aria-label="Contact us on WhatsApp"
    >
      <Button
        size="lg"
        className="h-16 w-16 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] hover:scale-110 transition-all duration-300 animate-pulse-slow"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    </a>
  );
};

export default FloatingWhatsAppButton;
