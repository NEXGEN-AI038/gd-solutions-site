import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CircuitTrace from "@/components/CircuitTrace";
import About from "@/components/About";
import Services from "@/components/Services";
import Training from "@/components/Training";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import FinalCta from "@/components/FinalCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <CircuitTrace />
      <main>
        <Hero />
        <About />
        <Services />
        <Training />
        <Process />
        <WhyUs />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
