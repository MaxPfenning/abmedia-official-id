import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Working with AB Media Team transformed our online presence. Our Google rankings improved dramatically within 3 months.",
    author: "Michael Schmidt",
    company: "Schmidt Consulting GmbH",
    rating: 5
  },
  {
    text: "Professional, reliable, and results-driven. They recovered our suspended GMB account and prevented future issues.",
    author: "Sarah Weber",
    company: "Weber Legal Services",
    rating: 5
  },
  {
    text: "Excellent communication and transparent reporting. We finally found a digital marketing partner we can trust.",
    author: "Thomas Müller",
    company: "Müller & Partners",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-secondary/20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 section-pattern opacity-30" />
      
      {/* Decorative quote marks */}
      <div className="absolute top-20 left-10 text-9xl text-primary/5 font-serif leading-none select-none">"</div>
      <div className="absolute bottom-20 right-10 text-9xl text-accent/5 font-serif rotate-180 leading-none select-none">"</div>
      
      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Real feedback from businesses we've helped grow
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative hover-lift border-2 animate-scale-in shadow-lg hover:shadow-2xl overflow-hidden hover:border-primary/30 bg-card/80 backdrop-blur-sm transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
              
              {/* Decorative quote */}
              <div className="absolute top-4 right-4 text-6xl text-primary/10 font-serif leading-none select-none">"</div>
              
              <CardContent className="pt-8 pb-6 px-8 relative z-10">
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-all group-hover:scale-110 duration-300" 
                      style={{ transitionDelay: `${i * 30}ms` }}
                    />
                  ))}
                </div>
                <p className="mb-6 text-base text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-5 border-border/50">
                  <p className="font-bold text-lg text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.company}</p>
                </div>
              </CardContent>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
