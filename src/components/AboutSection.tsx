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
              Я бизнес-коуч, стратег-визионер, серийный предприниматель более 15 лет (с успешным опытом построения <strong className="font-black text-gold-gradient">голубых океанов и уникальных проектов</strong>), мета-психолог, маркетолог, исследователь, антикризисный управленец.
              </p>
              
              <p>
              Помогаю создать
                  <strong className="font-black text-gold-gradient"> ВНЕKОНКУРЕНТНЫЙ, ПРИБЫЛЬНЫЙ И УНИКАЛЬНЫЙ ПРОДУКТ С FUCKING WOW!
                   </strong> {' '}
                   эффектом, на фундаменте МИССИИ, ВИДЕНИЯ и БОЛЬШОЙ БИЗНЕС-ИДЕИ (BIG IDEA), {' '}
                   6&#8209;ГО&nbsp;ТЕХНОЛОГИЧЕСКОГО УКЛАДА И КЛИЕНТОЦЕНТРИЧНОЙ бизнес-модели.
              </p>

              <p>
              Формирую <strong className="font-black text-gold-gradient">КОМПЛЕКСНУЮ КОНКУРЕНТОСПОСОБНОСТЬ</strong>: идеологическую, смысловую, маркетинговую, продуктовую, стратегическую, финансовую, антикризисную.
              </p>

              <p>
              Работаю на основании лучших методик, техник и инструментов, изученных мною за последние 10 лет (коучинг, MBA, Сколково, ВШЭ, учителя из Гарварда и многое другое).
              </p>


              <div className="gold-divider my-8" />

                {/*
              <p className="text-foreground font-serif text-xl md:text-2xl text-center italic">
                Я — проводник между вами и вашим уникальным, внеконкурентным, успешным продуктом или проектом.
              </p>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
