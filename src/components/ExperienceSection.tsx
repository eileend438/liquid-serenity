import { Link } from "react-router-dom";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
       <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-display text-center text-foreground mb-6">
          Опыт
        </h2>

      <div className="grid gap-6 lg:gap-12 md:grid-cols-[minmax(0,1fr)_460px] items-stretch">
                {/* Left: text */}
                <div
                data-gold-flash
                className="glass-card gold-scroll-flash rounded-2xl p-8 md:p-10 h-full">
                  <div className="text-foreground-muted text-lg leading-relaxed space-y-6">

                    <p>
                      За 15+ лет я создала проекты в food-индустрии,
                      сервисе, гостеприимстве, fashion и креативной экономике.
                      Во всех случаях ключом были не бюджеты, а вкус, чувствительность
                      к рынку и умение видеть пустоты.
                    </p>

                    <p>
                    Но этот путь состоял не только из успехов. Около 80% проектов стали удачными
                    и были реализованы на пике. Остальные 20% — проекты, созданные из логики «ради заработка», —
                    прошли через кризисы и не дали ожидаемого результата. Именно они стали моей школой антикризисного управления.
                    </p>

                    <p>
                    Я заходила в рынки, формировала новые категории,
                    выстраивала продукт, сервис и стратегию — и выходила из проектов
                    на пике, когда они становились массовыми.
                    </p>

                    <p>
                      Эти проекты — не про удачу и не про «оказаться в нужное время».
                      Это про навык создавать уникальные форматы, которые рынок
                      сначала не видит — а потом начинает копировать.
                    </p>
                  </div>

                  <div className="mt-10 text-center">
                                <Link
                                  to="/projects"
                                  className="btn-gold px-8 py-4 rounded-xl font-sans text-sm uppercase tracking-wider text-center inline-flex"
                                >
                                  Подробнее о проектах
                                </Link>
                  </div>
                </div>

              {/* Right: photo */}
              <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col h-full">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl">
                  <img
                    src="/edinorog.jpg"
                    alt="Сабрина Салихова и Оскар Хартман"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="mt-3 text-xs text-foreground-muted/80 leading-snug">
                  На фото: я, Оскар Хартман (основатель и инвестор 150+ компаний) и единорог 🦄 от него
                </p>
              </div>
            </div>
            </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
