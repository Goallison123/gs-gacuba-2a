import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function updatePosition() {
      const pos = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(pos);
      setIsScrolled(pos > 40);
    }

    window.addEventListener('scroll', updatePosition, { passive: true });
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return { scrollPosition, isScrolled };
}
