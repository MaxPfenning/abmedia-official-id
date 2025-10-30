import { Mail, Phone, MapPin, PrinterIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="mb-4 text-lg font-semibold text-foreground">AB Media Team</h3>
            <p className="mb-2 text-sm text-muted-foreground">Digital Marketing Services</p>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for digital growth and online visibility.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="tel:+492037090726" className="text-muted-foreground hover:text-primary transition-colors">
                  +49 203 70907262
                </a>
              </div>
              <div className="flex items-start gap-2">
                <PrinterIcon className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">+49 203 70907353</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:kontakt.abmedia@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  kontakt.abmedia@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Address */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Address</h3>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
              <address className="not-italic text-muted-foreground">
                Weselerstraße 73<br />
                47169 Duisburg<br />
                Germany
              </address>
            </div>
          </div>
          
          {/* Legal Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Legal</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Representative: Andreas Berger</p>
              <p>Betriebsnummer: 10750003655</p>
              <p>USt-IdNr: DE 7909418491</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} AB Media Team. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/impressum" className="hover:text-primary transition-colors">Impressum</a>
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
