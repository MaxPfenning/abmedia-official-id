import { Mail, Phone, MapPin, PrinterIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-animated-gradient-subtle py-16 border-t">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="animate-slide-in-left">
            <h3 className="mb-4 text-xl font-bold text-foreground">AB Media Team</h3>
            <p className="mb-2 text-sm text-muted-foreground">Digital Marketing Services</p>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for digital growth and online visibility.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="mb-4 text-xl font-bold text-foreground">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 group">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                <a href="tel:+492037090726" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  +49 203 70907262
                </a>
              </div>
              <div className="flex items-start gap-2">
                <PrinterIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground font-medium">+49 203 70907353</span>
              </div>
              <div className="flex items-start gap-2 group">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                <a href="mailto:kontakt.abmedia@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all font-medium">
                  kontakt.abmedia@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Address */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="mb-4 text-xl font-bold text-foreground">Address</h3>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
              <address className="not-italic text-muted-foreground">
                Weselerstraße 73<br />
                47169 Duisburg<br />
                Germany
              </address>
            </div>
          </div>
          
          {/* Legal Info */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <h3 className="mb-4 text-xl font-bold text-foreground">Legal</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Representative: Andreas Berger</p>
              <p>Betriebsnummer: 10750003655</p>
              <p>USt-IdNr: DE 7909418491</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p className="font-medium">© {new Date().getFullYear()} AB Media Team. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-primary transition-colors group relative">
              <span className="relative">
                Impressum
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </span>
            </Link>
            <Link to="/privacy-policy" className="hover:text-primary transition-colors group relative">
              <span className="relative">
                Datenschutz
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </span>
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors group relative">
              <span className="relative">
                AGB
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
