import { ArrowDown } from 'lucide-react';
import sabrinaPhoto from '@/assets/sabrina-photo.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen pb-28 flex items-center justify-center overflow-hidden water-texture">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-deep to-background-abyss" />
      
      {/* Subtle animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean-light/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo */}
          <div className="relative opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-primary/10 animate-glow-pulse" />
              
              {/* Photo container */}
              <div className="absolute inset-2 rounded-full overflow-hidden glass-card p-1">
                <img
                  src={sabrinaPhoto}
                  alt="Сабрина Салихова"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm animate-float" style={{ animationDelay: '-2s' }} />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-silver/20 rounded-full blur-sm animate-float" style={{ animationDelay: '-4s' }} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 
              className="font-serif text-2xl md:text-4xl text-foreground mb-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              САБРИНА САЛИХОВА
            </h1>
            
            <p 
              className="text-2xl md:text-3xl text-[#F2C94C] font-serif tracking-wide mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              СТРАТЕГ-ВИЗИОНЕР • БИЗНЕС-КОУЧ • МАРКЕТОЛОГ • ИССЛЕДОВАТЕЛЬ • СЕРИЙНЫЙ ПРЕДПРИНИМАТЕЛЬ
            </p>
            
            <p 
              className="text-foreground-muted text-lg leading-relaxed mb-10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              Помогаю создать внеконкурентный уникальный продукт и проекты
              <br />
              на фундаменте большой бизнес-идеи со стратегией на годы.
            </p>

            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <a
                href="https://t.me/Sabrina_Salihova"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-8 py-4 rounded-xl font-sans text-sm uppercase tracking-wider text-center"
              >
                Написать в Telegram
              </a>
              <a
                href="/articles"
                className="btn-glass px-8 py-4 rounded-xl font-sans text-sm uppercase tracking-wider text-center"
              >
                Посмотреть статьи
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="
          absolute left-1/2 -translate-x-1/2
          bottom-6 md:bottom-8 lg:bottom-10
          z-20
          opacity-0 animate-fade-in
        "
        style={{ animationDelay: "1s" }}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center text-foreground-muted hover:text-primary transition-colors duration-medium"
        >
          <span className="text-xs uppercase tracking-widest mb-2 font-sans">
            Узнать больше
          </span>
          <ArrowDown size={20} className="animate-float" />
        </a>
      </div>

    </section>
  );
};

export default Hero;
