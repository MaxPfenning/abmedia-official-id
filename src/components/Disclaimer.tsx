import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl animate-fade-in-up">
          <div className="rounded-2xl border-l-4 border-yellow-500 bg-gradient-to-r from-yellow-50/50 to-card dark:from-yellow-900/10 dark:to-card p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20 animate-pulse-slow">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-500" />
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-card-foreground">Important Notice</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-3">
                  <strong className="text-foreground">AB Media Team</strong> (registered at Weselerstraße 73, 47169 Duisburg, Germany) is <strong className="text-foreground">not affiliated</strong> with other companies using similar names.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  ReviewMeister.net exists solely to clarify our official identity and provide accurate company information for our clients and partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
