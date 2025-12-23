import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center water-texture">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-deep to-background-abyss" />
      
      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-display-xl text-foreground mb-4">404</h1>
        <p className="text-xl text-foreground-muted mb-10">Страница не найдена</p>
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 btn-glass px-8 py-4 rounded-xl font-sans text-sm uppercase tracking-wider"
        >
          <ArrowLeft size={18} />
          На главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
