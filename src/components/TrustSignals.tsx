import { Star, ShieldCheck } from "lucide-react";

const trustBadges = [
  { name: "Google Reviews", rating: "4.9" },
  { name: "Trustpilot", rating: "4.8" },
  { name: "YellowPages", rating: "5.0" },
  { name: "ProvenExpert", rating: "4.9" }
];

const TrustSignals = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-in-up">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
            <ShieldCheck className="h-8 w-8 text-success" />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Trusted by Businesses Across Europe
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Trusted by 500+ verified businesses across Europe
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {trustBadges.map((badge, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center rounded-lg border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-3 text-4xl font-bold text-primary">{badge.rating}</div>
              <div className="mb-2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm font-medium text-muted-foreground">{badge.name}</div>
            </div>
          ))}
        </div>
        
        <div className="mx-auto max-w-2xl rounded-lg border-l-4 border-success bg-card p-6 shadow-sm animate-fade-in">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            </div>
            <div>
              <p className="mb-2 font-medium text-card-foreground">Sample Verified Review</p>
              <p className="text-sm text-muted-foreground italic">
                "AB Media Team helped us recover our suspended Google My Business listing within 48 hours. Their professionalism and expertise are outstanding. Highly recommended!"
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                — Tech Solutions GmbH, Berlin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
