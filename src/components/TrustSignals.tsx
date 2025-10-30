import { Star, ShieldCheck } from "lucide-react";

const trustBadges = [
  { name: "Google Reviews", rating: "4.9" },
  { name: "Trustpilot", rating: "4.8" },
  { name: "YellowPages", rating: "5.0" },
  { name: "ProvenExpert", rating: "4.9" }
];

const TrustSignals = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 section-pattern" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-success/20 to-success/10 shadow-lg animate-pulse-slow border-2 border-success/20">
            <ShieldCheck className="h-10 w-10 text-success" />
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Trusted by Businesses Across Europe
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Trusted by 500+ verified businesses across Europe
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16 max-w-5xl mx-auto">
          {trustBadges.map((badge, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center justify-center rounded-2xl border-2 bg-card p-8 text-center hover-lift animate-scale-in shadow-md overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 text-5xl font-bold text-gradient">{badge.rating}</div>
              <div className="mb-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-transform group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>
              <div className="text-sm font-semibold text-muted-foreground">{badge.name}</div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mx-auto max-w-3xl rounded-2xl border-l-4 border-success bg-card p-8 shadow-xl animate-fade-in hover-lift">
          <div className="flex gap-5">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/20">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <div>
              <p className="mb-3 text-lg font-bold text-card-foreground">Sample Verified Review</p>
              <p className="text-base text-muted-foreground italic leading-relaxed mb-4">
                "AB Media Team helped us recover our suspended Google My Business listing within 48 hours. Their professionalism and expertise are outstanding. Highly recommended!"
              </p>
              <p className="text-sm font-semibold text-muted-foreground">
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
