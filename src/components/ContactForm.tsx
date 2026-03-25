import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(50).optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Call edge function
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validatedData),
        }
      );
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to send message");
      }
      
      // Success!
      toast({
        title: "Message sent successfully!",
        description: "We'll respond within 24 hours. Check your email for confirmation.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      
      // Reset the HTML form
      (e.target as HTMLFormElement).reset();
      
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error sending message",
        description: error instanceof z.ZodError 
          ? error.errors[0].message 
          : "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative py-24 overflow-hidden bg-animated-gradient-warm">
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
                  <a href="mailto:alice@myreviewmedia.com" className="text-muted-foreground hover:text-primary transition-colors break-all font-medium">
                    alice@myreviewmedia.com
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
                        <Input 
                          id="name" 
                          required 
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+49 123 456789"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed *</Label>
                        <Select 
                          required 
                          value={formData.service}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="SEO Services">SEO Services</SelectItem>
                            <SelectItem value="Google My Business">Google My Business</SelectItem>
                            <SelectItem value="Review Management">Review Management</SelectItem>
                            <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
                            <SelectItem value="Web Design">Web Design</SelectItem>
                            <SelectItem value="Account Recovery">Account Recovery</SelectItem>
                            <SelectItem value="Other / Not Sure">Other / Not Sure</SelectItem>
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
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
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
