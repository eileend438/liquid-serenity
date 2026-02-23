import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
           <strong className="font-black text-gold-gradient">Я женщина</strong>, и в этом моя сила как проводника в мир души гармоничных состояний. Эти состояния во многом недоступны мужчинам, потому что по своей природе они чаще действуют из логики и ума. А уникальность продуктов и пассионарность личности рождаются не из логики. Они воссоздаются через другие потенциалы, в которые я являюсь сильным проводником.
        </>
      ),
  },
  {
      number: '04',
      text: (
          <>
            <strong className="font-black text-gold-gradient block text-center">
              Я единственная, кто занимается комплексной конкурентоспособностью:
            </strong>

            <div className="mt-8 flex justify-center">
              <img
                src="/types.jpg"
                alt="Комплексная конкурентоспособность"
                className="w-[110%] sm:w-full max-w-none sm:max-w-3xl rounded-xl border border-white/10"
              />
            </div>
          </>
        ),
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
    <section id="advantages" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2
          className={`font-serif text-display text-center text-foreground mb-16 text-[28px] leading-tight
                                                                                  md:text-[36px]
                                                                                  lg:text-display transition-all duration-slow ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Экспертное преимущество
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
              <div className="flex flex-col sm:flex-row gap-6">
                <span className="font-serif text-3xl md:text-4xl text-primary flex-shrink-0 sm:self-auto self-center">
                  {advantage.number}
                </span>
                <div className="flex-1">
                  <p className="text-foreground-muted text-lg leading-relaxed">
                      {advantage.text}
                    </p>

                    {advantage.items && (
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                        {advantage.items.map((it) => (
                          <div key={it.title} className="glass-card rounded-xl p-5 w-full max-w-xs">
                            <div className="font-black text-gold-gradient">{it.title}</div>

                            <div className="gold-divider my-3" />

                            <div className="text-foreground-muted text-sm leading-relaxed">
                              {it.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}



                </div>
              </div>
              
              {index < advantages.length - 1 && (
                <div className="gold-divider mt-8" />
              )}
            </div>
          ))}

{/* CTA */}
{/* Articles CTA */}
<div
  className={`mt-20 glass-card rounded-2xl p-8 md:p-10 text-center transition-all duration-slow ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
  style={{ transitionDelay: '600ms' }}
>
  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
    Здесь заканчивается описание.<br />
    Дальше — мышление.
  </h3>

  <p className="text-foreground-muted text-lg max-w-2xl mx-auto mb-8">
    В статьях я разбираю то, что обычно остаётся за кадром:
    логику сильных решений, причины провалов и механизмы,
    которые делают бизнес устойчивым в реальности, а не в презентациях.
  </p>

  <Link
    to="/articles"
    className="btn-gold px-10 py-4 rounded-xl font-sans text-sm uppercase tracking-wider inline-flex"
  >
    Читать статьи
  </Link>
</div>



        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
