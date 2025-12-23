import { useEffect, useRef, useState } from 'react';
import { Sparkles, Lightbulb, Package, Brain } from 'lucide-react';

const expertiseItems = [
  {
    icon: Sparkles,
    title: 'Миссия и уникальность',
    description: 'Миссия, таланты, сильные стороны, ценности, видение, истинные цели.',
    result: 'Понимание потенциала и связь с собой.',
  },
  {
    icon: Lightbulb,
    title: 'Большая бизнес-цель (BIG IDEA)',
    description: 'Большая идея + стратегия на годы + продукт 6-го технологического уклада.',
    result: 'Стратегия и смысловое опережение.',
  },
  {
    icon: Package,
    title: 'Упаковка • маркетинг • продажи',
    description: 'Упаковка и вывод на рынок на основе новых правил маркетинга 2026 и новых покупательских привычек.',
    result: 'Сильная упаковка, продажи, прибыль.',
  },
  {
    icon: Brain,
    title: 'Бизнес-мышление 2-го порядка',
    description: 'Управление мышлением, программами и эмоциями, лидерская опора, энергия и стабильность.',
    result: 'Устойчивость в кризисах и рост дохода.',
  },
];

const ExpertiseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="expertise" ref={sectionRef} className="py-32 relative">
      {/* Gold divider top */}
      <div className="gold-divider mb-20" />

      <div className="container mx-auto px-6">
        <h2 
          className={`font-serif text-display text-center text-foreground mb-16 transition-all duration-slow ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Экспертиза
        </h2>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {expertiseItems.map((item, index) => (
            <div
              key={item.title}
              className={`glass-card rounded-2xl p-8 transition-all duration-slow ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground leading-tight pt-1">
                  {item.title}
                </h3>
              </div>

              <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="pt-4 border-t border-border/30">
                <p className="text-sm">
                  <span className="text-primary font-medium">Результат:</span>{' '}
                  <span className="text-foreground-muted">{item.result}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Manifesto */}
        <div 
          className={`text-center transition-all duration-slow delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="gold-divider mb-8 max-w-xl mx-auto" />
          <p className="font-serif text-xl md:text-2xl text-foreground italic">
            "Снаружи — скорость и время опережения. Внутри — спокойная сила и опора."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
