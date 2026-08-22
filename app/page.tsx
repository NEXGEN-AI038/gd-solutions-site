import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CircuitTrace from "@/components/CircuitTrace";
import ServicesTicker from "@/components/ServicesTicker";
import About from "@/components/About";
import Services from "@/components/Services";
import AiNetworkMap from "@/components/AiNetworkMap";
import Training from "@/components/Training";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import FinalCta from "@/components/FinalCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Nav />
      <CircuitTrace />
      <main>
        <Hero />
        <ServicesTicker />
        <About />
        <Services />
        <AiNetworkMap />
        <Training />
        <Process />
        <WhyUs />
        <Reviews />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
