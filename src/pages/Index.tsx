import { useEffect } from "react";

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {

    useEffect(() => {
        if (window.location.hash) return;

            // запретить автоворстанавление
            if ("scrollRestoration" in window.history) {
              window.history.scrollRestoration = "manual";
            }

            const forceTop = () => window.scrollTo(0, 0);

            // сразу
            forceTop();
            // после показа страницы (Chrome reload/back-forward)
            const onPageShow = () => {
              forceTop();
              requestAnimationFrame(forceTop);
              setTimeout(forceTop, 50);
            };

            window.addEventListener("pageshow", onPageShow);

            return () => {
              window.removeEventListener("pageshow", onPageShow);
            };
          }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <AdvantagesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
