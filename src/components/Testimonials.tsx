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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-in-up">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from businesses we've helped grow
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="mb-4 h-8 w-8 text-primary/20" />
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
