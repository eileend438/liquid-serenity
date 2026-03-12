import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Music, Pause, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Кто я', href: '/#about' },
  { label: 'Услуги', href: '/#services' },
  { label: 'Опыт', href: '/#experience' },
  { label: 'Экспертное преимущество', href: '/#advantages' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Статьи', href: '/articles' },
  { label: 'Контакты', href: '/#contacts' },
];

let atmosphereAudio: HTMLAudioElement | null = null;

function getAtmosphereAudio() {
  if (!atmosphereAudio) {
    atmosphereAudio = new Audio('/audio/gandalf-sacred-river.mp3');
    atmosphereAudio.loop = true;
    atmosphereAudio.preload = 'auto';
  }
  return atmosphereAudio;
}

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return;
    if (hasScrolledRef.current) return;

    hasScrolledRef.current = true;

    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    audioRef.current = getAtmosphereAudio();

      const onVis = () => {
        const cur = audioRef.current;
        if (document.hidden && cur && !cur.paused) {
          cur.pause();
          setIsPlaying(false);
        }
      };

      document.addEventListener('visibilitychange', onVis);

      // важное: НЕ останавливаем аудио в cleanup, только отписка
      return () => document.removeEventListener('visibilitychange', onVis);
    }, []);

useEffect(() => {
  const a = audioRef.current;
  if (!a) return;

  const sync = () => setIsPlaying(!a.paused);
  sync();

  a.addEventListener('play', sync);
  a.addEventListener('pause', sync);
  return () => {
    a.removeEventListener('play', sync);
    a.removeEventListener('pause', sync);
  };
}, []);


  const toggleAtmosphere = async () => {
    const a = audioRef.current;
    if (!a) return;

    try {
      if (a.paused) {
        await a.play(); // важно: только по клику, иначе браузер заблокирует
        setIsPlaying(true);
      } else {
        a.pause();
        setIsPlaying(false);
      }
    } catch {
      // если браузер душит autoplay / формат не поддержан
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

        // Если это якорная ссылка (на главной)
        if (href.startsWith('/#')) {
          const elementId = href.slice(2);

          if (location.pathname === '/') {
            // Мы уже на главной — просто плавно скроллим
            const el = document.getElementById(elementId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else {
            // Мы на другой странице — переходим на главную к якорю
            // В HashRouter это автоматически станет /#/
            hasScrolledRef.current = false;
            navigate(`/${href.slice(1)}`);
          }
        } else {
          // Обычная навигация (Проекты, Статьи)
          navigate(href);
        }
      };





  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-medium ease-smooth
          bg-[hsla(230,60%,12%,0.35)] lg:bg-transparent
          ${isScrolled ? 'glass-nav py-3' : 'py-5'}
        `}

    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/"
          onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault(); // чтобы роутер не делал "пустую навигацию"
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                hasScrolledRef.current = false; // чтобы якоря потом снова работали
              }
          }}
          className="font-serif text-xl md:text-2xl text-foreground tracking-wide hover:text-primary transition-colors duration-medium"
        >
          Сабрина Салихова
        </Link>

        {/* Desktop Navigation */}
        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 text-sm font-sans text-foreground-muted hover:text-foreground transition-colors duration-medium relative group"
                >
                  {item.label}
                  {/* Анимированная полоска при наведении */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-3/4 transition-all duration-medium" />
                </button>
              </li>
            ))}
          </ul>

          {/* Atmosphere button */}
          <button
            type="button"
            onClick={toggleAtmosphere}
            className="btn-gold rounded-xl inline-flex items-center gap-2 px-4 py-2 text-sm uppercase tracking-wider"
            aria-label={isPlaying ? 'Остановить музыку' : 'Включить музыку'}
            title={isPlaying ? 'Остановить музыку' : 'Включить музыку'}
          >
            {/* desktop text */}
            <span className="hidden lg:inline">Войти в атмосферу</span>
            {isPlaying ? (
                <Pause className="h-5 w-5 animate-pulse" />
              ) : (
                <Music className="h-5 w-5" />
              )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

</nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] z-40 transition-all duration-medium ease-smooth ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0"
            style={{ background: "hsla(230, 60%, 12%, 0.8)" }}
            onClick={() => setIsOpen(false)}
        />
        
        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 glass-card border-l border-border-glass transform transition-transform duration-medium ease-smooth ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col p-6 gap-2">
            {navItems.map((item, index) => (
              <li
                key={item.label}
                className={`animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-2xl font-serif text-foreground-muted hover:text-foreground hover:bg-accent/30 rounded-lg transition-all duration-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA in Mobile Menu */}
          <div className="p-6 pt-4">
            <a
              href="https://t.me/Sabrina_Salihova"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 text-center btn-gold rounded-xl font-sans text-sm uppercase tracking-wider"
            >
              Написать в Telegram
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navigation;
