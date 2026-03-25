import { Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";

const ContactBar = () => {
  const { t } = useLanguage();
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
                  {t('contactBar.available')}
                </>
              ) : (
                t('contactBar.hours')
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
              href="mailto:alice@myreviewmedia.com" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
            >
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">alice@myreviewmedia.com</span>
            </a>

            <div className="hidden sm:block h-4 w-px bg-white/30" />

            <LanguageSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
