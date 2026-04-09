import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function FloatingHomeButton() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      aria-label="Наверх"
      className="
        fixed bottom-6 right-6 z-50
        btn-gold btn-gold-fixed
        rounded-full w-14 h-14
        inline-flex items-center justify-center
        motion-safe:animate-pulse hover:animate-none
      "
    >
      <ArrowUp aria-hidden size={20} />
    </button>
  );
}
