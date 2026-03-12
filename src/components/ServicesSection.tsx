import { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 relative">
      {/* Линия-разделитель сверху, как в About */}
      <div className="gold-divider mb-20" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`font-serif text-display text-center text-foreground mb-16 transition-all duration-slow ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Услуги
          </h2>

          <div className={`space-y-12 transition-all duration-slow delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>

            {/* 1. Диагностика */}
            <div className="group">
              <h3 className="text-xl md:text-2xl font-serif text-gold-gradient font-black uppercase tracking-wider mb-2">
                Диагностика
              </h3>
              <p className="text-foreground-muted text-lg">
                45 минут <span className="opacity-60 text-sm ml-2">(бесплатно)</span>
              </p>
            </div>

            {/* 2. Стратегическая сессия */}
            <div className="group">
              <h3 className="text-xl md:text-2xl font-serif text-gold-gradient font-black uppercase tracking-wider mb-2">
                Стратегическая сессия
              </h3>
              <p className="text-foreground-muted text-lg">
                3-4 часа, для собственников бизнеса
              </p>
            </div>

            {/* 3. Создание уникального продукта */}
            <div className="group">
              <h3 className="text-xl md:text-2xl font-serif text-gold-gradient font-black uppercase tracking-wider mb-2">
                Создание уникального продукта
              </h3>
              <p className="text-foreground-muted text-lg mb-3">2 месяца</p>
              <ul className="space-y-2 border-l border-primary/30 pl-6 ml-1">
                <li className="text-foreground-muted/80 text-base leading-relaxed">
                  <strong className="text-foreground/90 font-medium">1 месяц</strong> — создание продукта, со всеми глубинными исследованиями, аналитикой и стратегией
                </li>
                <li className="text-foreground-muted/80 text-base leading-relaxed">
                  <strong className="text-foreground/90 font-medium">1 месяц</strong> — запуск продукта, упаковка, брендирование, продажи
                </li>
              </ul>
              <p className="mt-4 text-sm text-primary/70 italic italic">
                * внедрение ИИ во всей системе под ключ, обговаривается отдельно
              </p>
            </div>

            {/* 4. Годовое сопровождение */}
            <div className="group">
              <h3 className="text-xl md:text-2xl font-serif text-gold-gradient font-black uppercase tracking-wider mb-2">
                Годовое сопровождение
              </h3>
              <p className="text-foreground-muted text-lg leading-relaxed">
                12 месяцев <span className="block text-base opacity-80 mt-1">При успешном уже 2-х месячном сотрудничестве, продолжить этот рост вместе.</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;