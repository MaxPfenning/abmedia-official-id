import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TrustSignals from "@/components/TrustSignals";
import Disclaimer from "@/components/Disclaimer";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <TrustSignals />
      <Disclaimer />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
