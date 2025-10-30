import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Star, Users } from "lucide-react";

const results = [
  {
    industry: "Restaurant",
    problem: "GMB listing suspended without warning",
    solution: "Recovered account and optimized profile",
    results: [
      { label: "Recovery Time", value: "48 hours", icon: Clock },
      { label: "Review Score", value: "4.8★", icon: Star },
      { label: "Monthly Views", value: "+320%", icon: TrendingUp }
    ],
    badge: "Emergency Recovery"
  },
  {
    industry: "Law Firm",
    problem: "No online visibility, struggling to attract clients",
    solution: "Complete SEO overhaul and content strategy",
    results: [
      { label: "Organic Traffic", value: "+450%", icon: TrendingUp },
      { label: "Keyword Rankings", value: "Top 3", icon: Star },
      { label: "New Leads", value: "+200%", icon: Users }
    ],
    badge: "SEO Success"
  },
  {
    industry: "E-Commerce",
    problem: "Poor conversion rates and negative reviews",
    solution: "Review management and reputation repair",
    results: [
      { label: "Positive Reviews", value: "+85%", icon: Star },
      { label: "Conversion Rate", value: "+65%", icon: TrendingUp },
      { label: "Customer Trust", value: "95%", icon: Users }
    ],
    badge: "Reputation Management"
  },
  {
    industry: "Local Service",
    problem: "Invisible in local search results",
    solution: "GMB optimization and local citations",
    results: [
      { label: "Local Ranking", value: "#1", icon: Star },
      { label: "Map Pack", value: "Featured", icon: TrendingUp },
      { label: "New Customers", value: "+180%", icon: Users }
    ],
    badge: "Local SEO"
  }
];

const Results = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success font-semibold mb-6">
            <TrendingUp className="h-5 w-5" />
            <span>Proven Results</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Real Success Stories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            See how we've helped businesses like yours achieve measurable results
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {results.map((item, index) => (
            <Card 
              key={index}
              className="glass-card hover-lift group animate-scale-in border-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{item.industry}</h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {item.badge}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-destructive mb-1">The Problem:</p>
                    <p className="text-muted-foreground">{item.problem}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-success mb-1">Our Solution:</p>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 pt-4 border-t">
                  {item.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <result.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                      <p className="text-lg font-bold text-foreground mb-1">{result.value}</p>
                      <p className="text-xs text-muted-foreground">{result.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            * Results are from actual client projects. Individual results may vary based on industry, competition, and specific circumstances.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
