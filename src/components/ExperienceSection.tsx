import { Link } from "react-router-dom";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-display text-center text-foreground mb-6">
          Опыт
        </h2>

      <div className="grid gap-10 md:grid-cols-2 items-stretch">
                {/* Left: text */}
                <div
                data-gold-flash
                className="glass-card gold-scroll-flash rounded-2xl p-8 md:p-10">
                  <div className="text-foreground-muted text-lg leading-relaxed space-y-6">
                    <p>
                      Мой опыт — это не консультирование и не работа «по шаблонам».
                      Это реальное создание, развитие и продажа уникальных бизнесов в
                      высококонкурентных нишах.
                    </p>

                    <p>
                      Я заходила в рынки первой, формировала новые категории,
                      выстраивала продукт, сервис и стратегию — и выходила из проектов
                      на пике, когда они становились массовыми.
                    </p>

                    <p>
                      За 15+ лет я создала и масштабировала проекты в food-индустрии,
                      сервисе, гостеприимстве, fashion и креативной экономике.
                      Во всех случаях ключом были не бюджеты, а вкус, чувствительность
                      к рынку и умение видеть пустоты.
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

              {/* Right: photo placeholder */}
                <div className="glass-card rounded-2xl p-8 md:p-10">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-foreground-muted text-sm">
                            тут будет фото
                  </div>
                </div>
              </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
