import { useEffect } from "react";
import Lenis from "lenis";

// Initializes Lenis smooth scrolling and syncs it with GSAP's ticker
// so ScrollTrigger-based animations stay in step with the smoothed scroll.
export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Let GSAP ScrollTrigger recalc on lenis scroll
    lenis.on("scroll", () => {
      if (window.ScrollTrigger) window.ScrollTrigger.update();
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
