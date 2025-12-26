import { useEffect } from "react";

type Options = {
  selector?: string;
  threshold?: number;
  cooldownMs?: number;
};

export function useScrollFlash({
  selector = "[data-gold-flash]",
  threshold = 0.35,
  cooldownMs = 900,
}: Options = {}) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!els.length) return;

    const last = new WeakMap<HTMLElement, number>();

    const io = new IntersectionObserver(
      (entries) => {
        const now = Date.now();

        for (const e of entries) {
          if (!e.isIntersecting) continue;

          const el = e.target as HTMLElement;

          // анти-спам: чтобы не мигало при каждом пикселе скролла
          const prev = last.get(el) ?? 0;
          if (now - prev < cooldownMs) continue;
          last.set(el, now);

          el.classList.add("is-flashing");
          window.setTimeout(() => el.classList.remove("is-flashing"), 700);
        }
      },
      { threshold }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector, threshold, cooldownMs]);
}
