import { AccordionDemo } from "@/components/Accordion";
import HeroSection from "@/components/hero-section";
import MostProducts from "@/components/Service";

export default function Home() {
  return (
   <div className="scroll-smooth">
      <section id="home">
        <HeroSection />
      </section>

      <section id="service">
        <MostProducts />
      </section>
      <section id="">
        <AccordionDemo />
      </section>
    </div>
  );
}
