import { useEffect, useRef, useState } from 'react';
import { Target, Compass, Rocket } from 'lucide-react';

const workFormats = [
  {
    icon: Target,
    title: 'Диагностика уникальности и опоры',
  },
  {
    icon: Compass,
    title: 'Сборка Big Idea и стратегии на несколько лет',
  },
  {
    icon: Rocket,
    title: 'Упаковка и вывод на рынок по правилам 2026',
  },
];

const ExperienceSection = () => {
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
    <section id="experience" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 
          className={`font-serif text-display text-center text-foreground mb-16 transition-all duration-slow ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Опыт и исследование
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main text blocks */}
          <div 
            className={`glass-card rounded-2xl p-8 md:p-10 transition-all duration-slow delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-foreground-muted text-lg leading-relaxed">
              Я исследовала тему уникальности и пассионарности личности более 10 лет, а также их прямую связь 
              с экономическими процессами и развитием России, параллельно получая дополнительное образование
              в этой сфере.
            </p>
          </div>

          <div 
            className={`glass-card rounded-2xl p-8 md:p-10 transition-all duration-slow delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-foreground-muted text-lg leading-relaxed">
              Более 15 лет строю уникальные проекты и голубые океаны: от идеи — до результата и устойчивой позиции.
            </p>
          </div>

          {/* Work format */}
          <div 
            className={`mt-16 transition-all duration-slow delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="font-serif text-heading text-center text-foreground mb-10">
              Формат работы
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {workFormats.map((format, index) => (
                <div
                  key={format.title}
                  className={`glass-card rounded-xl p-6 text-center transition-all duration-slow ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <format.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {format.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
