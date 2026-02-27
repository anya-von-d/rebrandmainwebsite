import { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CurvedDivider from '@/components/CurvedDivider';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Coursework from '@/components/Coursework';
import TechnicalSkills from '@/components/TechnicalSkills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  // Smooth scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <CurvedDivider />
        <About />
        <Experience />
        <Education />
        <Coursework />
        <TechnicalSkills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
