'use client';

import { useLayoutEffect, useRef } from 'react';

/** Entrance only: motion never shifts the portrait or footer while scrolling. */
export function useCampaignMotion() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const hero = root.current;
    if (!hero) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations: Animation[] = [];
    let disposed = false;
    const stop = () => animations.splice(0).forEach(animation => animation.cancel());
    const start = () => {
      stop();
      if (disposed || preference.matches) return;
      const reveal = (selector: string, distance: number, delay: number) => {
        hero.querySelectorAll(selector).forEach((element, index) => {
          animations.push(element.animate([
            { opacity: 0, transform: `translateY(${distance}px)` },
            { opacity: 1, transform: 'translateY(0)' },
          ], { duration: 1000, delay: delay + index * 100, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' }));
        });
      };
      reveal('.campaign-silhouette', 0, 0);
      reveal('.campaign-kicker', 12, 100);
      reveal('.campaign-title-line > span', 20, 180);
      reveal('.campaign-subtitle, .campaign-action', 12, 300);
      reveal('.campaign-seal, .campaign-editorial', 0, 350);
    };
    document.fonts.ready.then(start);
    preference.addEventListener('change', start);
    return () => { disposed = true; stop(); preference.removeEventListener('change', start); };
  }, []);
  return root;
}
