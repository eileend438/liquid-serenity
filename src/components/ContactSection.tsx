import { useEffect, useRef, useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form is visual only - directs to Telegram
    window.open('https://t.me/Sabrina_Salihova', '_blank');
  };

  return (
    <section id="contacts" ref={sectionRef} className="py-32 relative">
      {/* Gold divider top */}
      <div className="gold-divider mb-20" />

      <div className="container mx-auto px-6">
        <h2 
          className={`font-serif text-display text-center text-foreground mb-16 transition-all duration-slow ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >


          Контакты
        </h2>

        <div className="max-w-2xl mx-auto">
          {/* Main contact card */}
          <div 
            className={`glass-card rounded-2xl p-8 md:p-12 text-center mb-8 transition-all duration-slow delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-primary" />
            </div>

            <p className="text-foreground-muted text-lg mb-2">Telegram</p>
            <p className="font-serif text-2xl text-foreground mb-8">@Sabrina_Salihova</p>


            <a
              href="https://t.me/Sabrina_Salihova"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-gold px-10 py-4 rounded-xl font-sans text-sm uppercase tracking-wider"
            >
              <Send size={18} />
              Написать в Telegram
            </a>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ContactSection;
