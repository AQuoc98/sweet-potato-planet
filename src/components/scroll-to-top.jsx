"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";

const SCROLL_THRESHOLD = 200;
const SCROLL_SPEED = 30;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const rafId = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const scrollToTop = () => {
    cancelAnimationFrame(rafId.current);

    const step = () => {
      const y = document.documentElement.scrollTop;
      if (y > 1) {
        window.scrollTo(0, y - Math.max(y / SCROLL_SPEED, 1));
        rafId.current = requestAnimationFrame(step);
      }
    };

    step();
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 h-10 w-10 rounded-md bg-pink-600 text-white shadow-lg transition-all duration-300 hover:bg-pink-400 cursor-pointer ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={16} />
    </Button>
  );
};

export default ScrollToTop;
