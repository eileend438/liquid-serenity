import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/content/articles';


const Articles = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 
              className={`font-serif text-display-lg text-foreground mb-6 transition-all duration-slow ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Статьи
            </h1>
            <p 
              className={`text-xl text-foreground-muted max-w-2xl mx-auto transition-all duration-slow delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="block">Стратегия</span>
                <span className="block">Уникальность</span>
                <span className="block">Продукт</span>
                <span className="block">Мышление</span>
            </p>
            <div className="gold-divider w-32 mx-auto mt-8" />
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <article
                key={article.slug}
                className={`glass-card rounded-2xl p-8 flex flex-col transition-all duration-slow ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${150 + index * 80}ms` }}
              >

              {article.readingTime && (
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-foreground-muted">
                    {article.readingTime}
                  </span>
                </div>
              )}


                <h2 className="font-serif text-xl text-foreground mb-4 leading-tight">
                  {article.title}
                </h2>
                
                <p className="text-foreground-muted text-sm leading-relaxed mb-6 flex-1">
                  {article.description}
                </p>

                <Link
                  to={`/articles/${article.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-medium group"
                >
                  <span className="text-sm font-medium">Читать</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-medium" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
