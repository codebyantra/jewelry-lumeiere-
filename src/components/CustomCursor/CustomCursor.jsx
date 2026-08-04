import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch

    const dot = dotRef.current;
    const ring = ringRef.current;
    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const onDown = () => ring.classList.add("is-active");
    const onUp = () => ring.classList.remove("is-active");

    const onOverInteractive = (e) => {
      if (e.target.closest("a, button, .cursor-hover")) {
        ring.classList.add("is-hover");
      }
    };
    const onOutInteractive = (e) => {
      if (e.target.closest("a, button, .cursor-hover")) {
        ring.classList.remove("is-hover");
      }
    };

    function animate() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOverInteractive);
    document.addEventListener("mouseout", onOutInteractive);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOverInteractive);
      document.removeEventListener("mouseout", onOutInteractive);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </div>
  );
}
