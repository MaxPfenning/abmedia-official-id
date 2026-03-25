import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling down 300px
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
    <div className={`fixed bottom-6 left-6 z-50 animate-scale-in ${isShaking ? 'animate-shake' : ''}`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="lg"
            className="h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-primary to-accent hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56 glass-card">
          <DropdownMenuItem asChild>
            <a href="tel:+492037090726" className="flex items-center gap-3 cursor-pointer p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Call Now</p>
                <p className="text-xs text-muted-foreground">+49 203 70907262</p>
              </div>
            </a>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <a href="mailto:alice@myreviewmedia.com" className="flex items-center gap-3 cursor-pointer p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-xs text-muted-foreground">Quick response</p>
              </div>
            </a>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <a href="#contact-form" className="flex items-center gap-3 cursor-pointer p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Contact Form</p>
                <p className="text-xs text-muted-foreground">Get free consultation</p>
              </div>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FloatingActionButton;
