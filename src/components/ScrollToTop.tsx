import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const firstRunRef = useRef(true);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const runMany = (fn: () => void) => {
      fn();
      requestAnimationFrame(fn);
      setTimeout(fn, 50);
      setTimeout(fn, 150);
    };

    const scrollToTop = () => window.scrollTo(0, 0);

    const scrollToHash = () => {
      if (!hash) return;
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (hash) {
      runMany(scrollToHash);
      firstRunRef.current = false;
      return;
    }

    runMany(scrollToTop);
    firstRunRef.current = false;
  }, [pathname, hash]);

  // ДОБИВКА ИМЕННО ДЛЯ ЛЕНДИНГА НА МОБИЛЕ ПОСЛЕ load
  useEffect(() => {
    if (pathname !== "/" || hash) return;

    const onLoad = () => window.scrollTo(0, 0);

    // если load уже был (бывает), всё равно добьём
    onLoad();
    window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  }, [pathname, hash]);

  return null;
}
