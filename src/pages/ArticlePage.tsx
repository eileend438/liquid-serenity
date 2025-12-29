import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { articlesBySlug } from '@/content/articles';
import { loadArticleContent } from '@/content/articles/loader';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const meta = slug ? articlesBySlug[slug] : null;

  const [content, setContent] = useState<ReactNode[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!slug) {
        setLoading(false);
        setContent(null);
        return;
      }
      setLoading(true);
      const loaded = await loadArticleContent(slug);
      if (!cancelled) {
        setContent(loaded);
        setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (!meta) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-serif text-display text-foreground mb-6">Статья не найдена</h1>
            <Link to="/articles" className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors">
              <ArrowLeft size={16} />
              Вернуться к статьям
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <article className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft size={16} />
              Все статьи
            </Link>

            <h1 className="font-serif text-display text-foreground mt-8 leading-tight">
              {meta.title}
            </h1>

            <div className="gold-divider mb-10 mt-6" />

            {loading && (
              <div className="glass-card rounded-2xl p-6 text-foreground-muted">
                Загружаю статью…
              </div>
            )}

            {!loading && !content && (
              <div className="glass-card rounded-2xl p-6 text-foreground-muted">
                Контент не найден.
              </div>
            )}

            {!loading && content && (
              <div className="space-y-6">
                {content.map((block, index) => (
                  <div key={index}>{block}</div>
                ))}
              </div>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
