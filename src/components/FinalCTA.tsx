import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to Strengthen Your Online Reputation?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Join 500+ businesses that trust AB Media Team with their digital presence
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="group"
              asChild
            >
              <a href="https://abmedia-team.com" target="_blank" rel="noopener noreferrer">
                Visit Main Site
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              asChild
            >
              <a href="https://abmedia-team.com/contact" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Request Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
