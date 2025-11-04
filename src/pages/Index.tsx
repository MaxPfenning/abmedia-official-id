import ContactBar from "@/components/ContactBar";
import UrgencyBanner from "@/components/UrgencyBanner";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import Results from "@/components/Results";
import Guarantee from "@/components/Guarantee";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SocialProofNotification from "@/components/SocialProofNotification";
import PromotionBanner from "@/components/PromotionBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <PromotionBanner />
      <ContactBar />
      <UrgencyBanner />
      <Hero />
      <TrustSignals />
      <About />
      <HowItWorks />
      <Services />
      <StatsSection />
      <Results />
      <Guarantee />
      <Testimonials />
      <FAQ />
      <Disclaimer />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <FloatingWhatsAppButton />
      <FloatingActionButton />
      <SocialProofNotification />
    </div>
  );
};

export default Index;
