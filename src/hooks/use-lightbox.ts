"use client";

import { useState, useCallback, useEffect } from "react";

export function useLightbox(totalImages: number) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = useCallback((index: number) => setActiveIndex(index), []);
  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + totalImages) % totalImages
      ),
    [totalImages]
  );

  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % totalImages)),
    [totalImages]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, prev, next, close]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return { activeIndex, open, close, prev, next, isOpen: activeIndex !== null };
}
