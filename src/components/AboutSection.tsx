import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative">
      {/* Gold divider top */}
      <div className="gold-divider mb-20" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 
            className={`font-serif text-display text-center text-foreground mb-16 transition-all duration-slow ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Кто я
          </h2>

          <div 
            className={`glass-card rounded-2xl p-8 md:p-12 transition-all duration-slow delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-6 text-foreground-muted leading-relaxed text-lg">
              <p>
                Я бизнес-коуч, стратег-визионер, мета-психолог, серийный предприниматель более 15 лет 
                (с успешным опытом построения голубых океанов и уникальных проектов), маркетолог, 
                исследователь, антикризисный управленец.
              </p>
              
              <p>
                Я действую на основании огромного количества знаний, лучших методик, техник и инструментов, 
                изученных мною за последние 10 лет (коучинг, MBA Сколково, ВШЭ, учителя из Гарварда и др.).
              </p>

              <div className="gold-divider my-8" />

              <p className="text-foreground font-serif text-xl md:text-2xl text-center italic">
                Я — проводник между вами и вашим уникальным, внеконкурентным, успешным продуктом или проектом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
