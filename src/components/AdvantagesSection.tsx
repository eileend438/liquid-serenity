import { useEffect, useRef, useState } from 'react';

const advantages = [
  {
    number: '01',
    text: (
                  <>
                  <strong className="font-black text-gold-gradient">Мой многолетний опыт:</strong> более 15 лет построения уникальных проектов и голубых океанов.
                </>
        ),
    },
  {
    number: '02',
    text: (
        <>
        <strong className="font-black text-gold-gradient">Я исследовала тему уникальности и пассионарности личности более 10 лет</strong>, а также их прямую связь с экономическими процессами и развитием России, параллельно углубляя и расширяя своё образование в этой области.
    </>
    ),
},
  {
    number: '03',
    text:
    (
       <>
           <strong className="font-black text-gold-gradient">Я женщина</strong>, и в этом моя сила как проводника в мир души гармоничных состояний. Эти состояния во многом недоступны мужчинам, потому что по своей природе они чаще действуют из логики и ума. А уникальность и пассионарность рождаются не из логики. Они воссоздаются через другие потенциалы, в которых я являюсь сильным проводником.
        </>
      ),
  },
  {
      number: '04',
      text: (
              <>
                 <strong className="font-black text-gold-gradient">Я единственная, кто занимается комплексной конкурентоспособностью:</strong>
              </>
             ),
                  list: [
                    'идеологической (смыслы и мировоззрение)',
                    'смысловой (зачем и ради чего существует продукт)',
                    'маркетинговой (позиционирование и привлечение клиентов)',
                    'финансовой (деньги, модель прибыли, устойчивость)',
                    'продуктовой (что именно вы создаёте и почему это выбирают)',
                    'стратегической (долгосрочное развитие и преимущество на рынке - сильное наследие)',
                  ],

             },
];

const AdvantagesSection = () => {
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
    <section ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 
          className={`font-serif text-display text-center text-foreground mb-16 transition-all duration-slow ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Мои преимущества
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.number}
              className={`glass-card rounded-2xl p-8 md:p-10 transition-all duration-slow ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + index * 150}ms` }}
            >
              <div className="flex gap-6">
                <span className="font-serif text-3xl md:text-4xl text-primary flex-shrink-0">
                  {advantage.number}
                </span>
                <div className="flex-1">
                  <p className="text-foreground-muted text-lg leading-relaxed">
                      {advantage.text}
                    </p>

                    {advantage.list && (
                      <ul className="mt-4 space-y-2 pl-4 list-disc text-foreground-muted">
                        {advantage.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                </div>
              </div>
              
              {index < advantages.length - 1 && (
                <div className="gold-divider mt-8" />
              )}
            </div>
          ))}

          {/* Final statement */}
          <div 
            className={`text-center pt-8 transition-all duration-slow delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-foreground-muted italic text-lg">
              Мы структурируем и оцифровываем эти потенциалы — в продукт, стратегию и позицию.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
