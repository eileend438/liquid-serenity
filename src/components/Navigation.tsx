import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Кто я', href: '/#about' },
  { label: 'Опыт', href: '/#experience' },
  { label: 'Экспертиза', href: '/#expertise' },
  { label: 'Проекты', href: '/#projects' },
  { label: 'Статьи', href: '/articles' },
  { label: 'Контакты', href: '/#contacts' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    if (href.startsWith('/#')) {
      const elementId = href.substring(2);
      if (location.pathname === '/') {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-medium ease-smooth ${
        isScrolled ? 'glass-nav py-3' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-serif text-xl md:text-2xl text-foreground tracking-wide hover:text-primary transition-colors duration-medium"
        >
          Сабрина Салихова
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith('/articles') ? (
                <Link
                  to={item.href}
                  className="px-4 py-2 text-sm font-sans text-foreground-muted hover:text-foreground transition-colors duration-medium relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-3/4 transition-all duration-medium" />
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-4 py-2 text-sm font-sans text-foreground-muted hover:text-foreground transition-colors duration-medium relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-3/4 transition-all duration-medium" />
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] z-40 transition-all duration-medium ease-smooth ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background-abyss/80 backdrop-blur-sm"
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
                {item.href.startsWith('/articles') ? (
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-lg font-serif text-foreground-muted hover:text-foreground hover:bg-accent/30 rounded-lg transition-all duration-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="block px-4 py-3 text-lg font-serif text-foreground-muted hover:text-foreground hover:bg-accent/30 rounded-lg transition-all duration-medium"
                  >
                    {item.label}
                  </a>
                )}
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
