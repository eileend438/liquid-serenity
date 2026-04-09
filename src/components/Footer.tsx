import { Link, useLocation, useNavigate } from "react-router-dom";


const navItems = [
  { label: 'Кто я', href: '/#about' },
  { label: 'Опыт', href: '/#experience' },
  { label: 'Экспертное преимущество', href: '/#advantages' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Статьи', href: '/articles' },
  { label: 'Контакты', href: '/#contacts' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    if (!href.startsWith('/#')) return;

    if (location.pathname !== "/") {
      navigate(href); // например "/#about"
      return;
    }


      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

  };

  return (
    <footer className="py-16 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
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
            className="font-serif text-2xl text-foreground hover:text-primary transition-colors duration-medium"
          >
            Сабрина Салихова
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                  className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Divider */}
          <div className="gold-divider w-32" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Сабрина Салихова
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
