import { useState, useEffect, useCallback } from "react";

export function useCarousel(total: number, interval = 5000) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const goTo = useCallback((i: number) => setCurrent(i), []);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [isPaused, next, interval, total]);

  return { current, next, prev, goTo, setIsPaused };
}
