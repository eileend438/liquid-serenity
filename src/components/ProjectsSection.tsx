import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Голубой океан: стратегия и продукт',
    description: 'Создание уникального рыночного пространства с нуля — от концепции до устойчивой позиции.',
    slug: 'blue-ocean',
  },
  {
    title: 'Перепозиционирование и упаковка',
    description: 'Трансформация существующего бизнеса через новое позиционирование и премиальную упаковку.',
    slug: 'repositioning',
  },
  {
    title: 'Антикризисное управление и рост',
    description: 'Стратегические решения для выхода из кризиса с последующим масштабированием.',
    slug: 'crisis-management',
  },
];

const ProjectsSection = () => {
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
    <section id="projects" ref={sectionRef} className="py-32 relative">
      {/* Gold divider top */}
      <div className="gold-divider mb-20" />

      <div className="container mx-auto px-6">
        <h2 
          className={`font-serif text-display text-center text-foreground mb-16 transition-all duration-slow ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Проекты
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={`glass-card rounded-2xl p-8 flex flex-col transition-all duration-slow ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <h3 className="font-serif text-xl text-foreground mb-4 leading-tight">
                {project.title}
              </h3>
              
              <p className="text-foreground-muted text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <Link
                to="/articles"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-medium group"
              >
                <span className="text-sm font-medium">Подробнее</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-medium" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
