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
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background with subtle tech image */}
      <div className="absolute inset-0 bg-secondary/30">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80)',
          }}
        />
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Core Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group glass-card hover-lift border-2 animate-scale-in relative overflow-hidden hover:border-primary/30 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-accent/5" />
              
              <CardHeader className="relative z-10">
                <div className="mb-4 relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg border border-primary/20">
                    <service.icon className="h-7 w-7" />
                  </div>
                  {/* Icon glow effect */}
                  <div className="absolute inset-0 blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="mb-4 leading-relaxed">{service.description}</CardDescription>
                <Button variant="link" className="h-auto p-0 text-primary font-semibold group-hover:translate-x-1 transition-transform" asChild>
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    Learn More →
                  </a>
                </Button>
              </CardContent>
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
