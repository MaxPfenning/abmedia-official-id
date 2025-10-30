import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl animate-fade-in-up">
          <div className="rounded-lg border-l-4 border-yellow-500 bg-card p-6 shadow-sm">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-card-foreground">Important Notice</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>AB Media Team</strong> (registered at Weselerstraße 73, 47169 Duisburg, Germany) is <strong>not affiliated</strong> with other companies using similar names.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
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
