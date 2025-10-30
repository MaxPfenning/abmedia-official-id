import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  MapPin, 
  Star, 
  Share2, 
  FileText, 
  Globe, 
  Building2, 
  ShieldCheck 
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Services",
    description: "Improve your search rankings and organic visibility with data-driven SEO strategies.",
    link: "https://abmedia-team.com/services/seo"
  },
  {
    icon: MapPin,
    title: "Google My Business Management",
    description: "Optimize your GMB profile to attract more local customers and boost visibility.",
    link: "https://abmedia-team.com/services/gmb"
  },
  {
    icon: Star,
    title: "Review Management",
    description: "Build trust and credibility with authentic reviews and reputation management.",
    link: "https://abmedia-team.com/services/reviews"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engage your audience and grow your brand across all social platforms.",
    link: "https://abmedia-team.com/services/social-media"
  },
  {
    icon: FileText,
    title: "Content Creation & Marketing",
    description: "Compelling content that resonates with your audience and drives conversions.",
    link: "https://abmedia-team.com/services/content"
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Modern, responsive websites built to convert visitors into customers.",
    link: "https://abmedia-team.com/services/web-design"
  },
  {
    icon: Building2,
    title: "Business Citations & Listings",
    description: "Accurate business information across directories for better local SEO.",
    link: "https://abmedia-team.com/services/citations"
  },
  {
    icon: ShieldCheck,
    title: "Account Recovery Services",
    description: "Expert assistance recovering suspended or locked business accounts.",
    link: "https://abmedia-team.com/services/recovery"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-in-up">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Core Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{service.description}</CardDescription>
                <Button variant="link" className="h-auto p-0 text-primary" asChild>
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    Learn More →
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
