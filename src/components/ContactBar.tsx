import { Phone, Mail, Clock } from "lucide-react";

const ContactBar = () => {
  const currentHour = new Date().getHours();
  const isBusinessHours = currentHour >= 9 && currentHour < 18;

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-primary to-accent text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 gap-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">
              {isBusinessHours ? (
                <>
                  <span className="inline-block w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
                  We're Available Now
                </>
              ) : (
                "Mon-Fri: 9:00 - 18:00"
              )}
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="tel:+492037090726" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
            >
              <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold">+49 203 70907262</span>
            </a>
            
            <div className="hidden sm:block h-4 w-px bg-white/30" />
            
            <a 
              href="mailto:kontakt.abmedia@gmail.com" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
            >
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">kontakt.abmedia@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
