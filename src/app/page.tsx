import { Nav } from "@/components/client/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Certifications } from "@/components/sections/Certifications";
import { FaqSection, TestimonialsSection } from "@/components/sections/Voices";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Certifications />
        <TestimonialsSection />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
