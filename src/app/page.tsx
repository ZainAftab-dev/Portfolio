import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Certifications } from "@/components/sections/Certifications";
import { GithubStats } from "@/components/sections/GithubStats";
import { Footer } from "@/components/sections/Footer";
import { MotionProvider } from "@/components/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <GithubStats />
        <Testimonials />
        <Certifications />
      </main>
      <Footer />
    </MotionProvider>
  );
}
