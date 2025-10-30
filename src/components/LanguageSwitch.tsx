import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('de')}
        className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
          language === 'de'
            ? 'bg-white text-primary hover:bg-white hover:text-primary'
            : 'text-white hover:bg-white/20 hover:text-white'
        }`}
      >
        DE
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
          language === 'en'
            ? 'bg-white text-primary hover:bg-white hover:text-primary'
            : 'text-white hover:bg-white/20 hover:text-white'
        }`}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitch;
