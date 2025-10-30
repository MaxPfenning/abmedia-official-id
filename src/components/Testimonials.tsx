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
              className="group relative hover-lift border-2 animate-scale-in shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-6 flex items-center justify-between">
                  <Quote className="h-10 w-10 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 fill-yellow-400 text-yellow-400 transition-all group-hover:scale-125" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>
                <p className="mb-6 text-base text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-base text-foreground">{testimonial.author}</p>
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
