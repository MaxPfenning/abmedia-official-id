import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll respond within 24 hours.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact-form" className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Get Your Free Consultation
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Tell us about your needs and we'll create a customized strategy for your business
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success font-semibold">
              <Clock className="h-4 w-4" />
              <span>We respond within 24 hours</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in-left">
              <Card className="glass-card border-2">
                <CardContent className="pt-6">
                  <Phone className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Call Us</h3>
                  <a href="tel:+492037090726" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                    +49 203 70907262
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Mon-Fri: 9:00 - 18:00</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-2">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Email Us</h3>
                  <a href="mailto:kontakt.abmedia@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all font-medium">
                    kontakt.abmedia@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">24/7 Email Support</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-2">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                  <address className="not-italic text-muted-foreground">
                    Weselerstraße 73<br />
                    47169 Duisburg<br />
                    Germany
                  </address>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2 animate-slide-in-right">
              <Card className="glass-card border-2">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required placeholder="John Doe" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required placeholder="john@example.com" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+49 123 456789" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="seo">SEO Services</SelectItem>
                            <SelectItem value="gmb">Google My Business</SelectItem>
                            <SelectItem value="reviews">Review Management</SelectItem>
                            <SelectItem value="social">Social Media Marketing</SelectItem>
                            <SelectItem value="web">Web Design</SelectItem>
                            <SelectItem value="recovery">Account Recovery</SelectItem>
                            <SelectItem value="other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Needs *</Label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="Describe your current situation and what you're looking to achieve..."
                        rows={6}
                      />
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="privacy" required className="mt-1" />
                      <Label htmlFor="privacy" className="text-sm text-muted-foreground">
                        I agree to the processing of my data in accordance with the{" "}
                        <a href="/privacy-policy" className="text-primary hover:underline">privacy policy</a>
                        {" "}(GDPR compliant)
                      </Label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                    
                    <p className="text-center text-sm text-muted-foreground">
                      🔒 Your information is secure and will never be shared with third parties
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
