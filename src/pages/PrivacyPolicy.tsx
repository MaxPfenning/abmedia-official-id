import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Datenschutzerklärung - My Review Media";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy policy for My Review Media. Learn how we protect your data and comply with GDPR regulations.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 section-pattern opacity-30" />
        <div className="container relative z-10 mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Datenschutzerklärung</h1>
          <p className="text-lg text-muted-foreground">Informationen zum Datenschutz</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card p-8 md:p-12">
            <p className="text-muted-foreground text-center">
              Datenschutzerklärung folgt in Kürze.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
