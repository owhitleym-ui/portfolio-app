"use client";

import { useEffect, useRef } from "react";

const STAGGER_MS = 90;

// Slides and fades in every [data-reveal] element inside as it scrolls into view.
// Content already on screen when the page loads is left as-is, so nothing flickers.
export default function ScrollReveal({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    for (const el of targets) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-revealed");
    }
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        // Stagger items that enter together so they cascade in
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = `${i * STAGGER_MS}ms`;
            el.classList.add("is-revealed");
            observer.unobserve(el);
          });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    for (const el of targets) {
      if (!el.classList.contains("is-revealed")) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
