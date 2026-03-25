import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Impressum = () => {
  useEffect(() => {
    document.title = "Impressum - My Review Media";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Legal information and company details for My Review Media - Digital marketing services in Hamburg, Germany.');
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Impressum</h1>
          <p className="text-lg text-muted-foreground">Rechtliche Informationen und Kontaktdaten</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card p-8 md:p-12 space-y-8">
            {/* Angaben gemäß § 5 TMG */}
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg font-semibold text-foreground">My Review Media</p>
                <p>Digital Marketing Services</p>
                <p>Vertreten durch: <span className="text-foreground font-medium">Alice Berger</span></p>
              </div>
            </div>

            {/* Anschrift */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold text-foreground mb-3">Anschrift:</h3>
              <div className="space-y-1 text-muted-foreground">
                <p>Weselerstraße 73</p>
                <p>47169 Duisburg</p>
                <p>Deutschland</p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold text-foreground mb-3">Kontakt:</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Telefon: <a href="tel:+492037090726" className="text-primary hover:underline">+49 203 70907262</a></p>
                <p>Fax: +49 203 70907353</p>
                <p>E-Mail: <a href="mailto:kontakt.abmedia@gmail.com" className="text-primary hover:underline">kontakt.abmedia@gmail.com</a></p>
              </div>
            </div>

            {/* Registrierungsnummern */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold text-foreground mb-3">Registrierungsnummern:</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Betriebsnummer: 10750003655</p>
                <p>Umsatzsteuer-Identifikationsnummer (USt-IdNr.): DE 7909418491</p>
                <p className="mt-3">Zuständig für: Deutschland</p>
              </div>
            </div>

            {/* Verantwortlich für den Inhalt */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold text-foreground mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <div className="space-y-1 text-muted-foreground">
                <p className="font-medium text-foreground">Andreas Berger</p>
                <p>AB Media Team</p>
                <p>Weselerstraße 73</p>
                <p>47169 Duisburg</p>
                <p>Deutschland</p>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Haftungsausschluss (Disclaimer)</h2>
              
              <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Haftung für Inhalte:</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Haftung für Links:</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
              </div>
            </div>

            {/* Urheberrecht */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Urheberrecht</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
              </div>
            </div>

            {/* VSBG */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information gemäß § 36 VSBG</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG) sind wir weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                <p>EU-Plattform zur Online-Streitbeilegung: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a></p>
              </div>
            </div>

            {/* Datenschutz */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Datenschutz (DSGVO-Hinweis)</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Personenbezogene Daten (z. B. Name, E-Mail, Telefonnummer) werden nur erhoben, wenn Sie uns diese freiwillig mitteilen (z. B. über ein Kontaktformular oder per E-Mail). Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht ohne Ihre ausdrückliche Einwilligung.</p>
                <p>Weitere Informationen zur Datenverarbeitung finden Sie in unserer <Link to="/privacy-policy" className="text-primary hover:underline">Datenschutzerklärung</Link>.</p>
              </div>
            </div>

            {/* Letzte Aktualisierung */}
            <div className="pt-8 border-t border-border animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <p className="text-sm text-muted-foreground italic">Letzte Aktualisierung: Oktober 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impressum;
