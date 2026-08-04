import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import "./StorySection.css";

const stats = [
  { id: "years", value: 28, suffix: "+", label: "Years of craft" },
  { id: "pieces", value: 42000, suffix: "+", label: "Pieces hand-finished" },
  { id: "cities", value: 19, suffix: "", label: "Ateliers & boutiques" },
  { id: "rating", value: 4.9, suffix: "/5", label: "Average client rating", decimals: 1 },
];

const timeline = [
  { year: "1998", text: "Lumière opens its first atelier in Antwerp, focused on hand-cut solitaires." },
  { year: "2007", text: "Launch of the Solstice line — our first full ready-to-wear gold collection." },
  { year: "2015", text: "Certified conflict-free sourcing across every stone in the collection." },
  { year: "2026", text: "Lumière opens online, bringing the atelier experience to the world." },
];

function Counter({ value, suffix, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className="counter-value">
      {Number(display).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StorySection() {
  return (
    <section className="section story">
      <div className="container">
        <div className="story-top">
          <div className="story-copy">
            <span className="eyebrow">About Lumière</span>
            <h2 className="section-title">
              Crafted for the way <em>light moves</em>
            </h2>
            <p className="section-sub">
              We believe fine jewelry should be worn, not stored. Every
              Lumière piece is designed to catch light in motion — at a
              dinner table, on a dance floor, across a keyboard on an ordinary
              Tuesday.
            </p>
          </div>
          <div className="story-image facet-frame">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
              alt="Jeweler hand-finishing a ring"
              loading="lazy"
            />
          </div>
        </div>

        <div className="story-stats">
          {stats.map((s) => (
            <div key={s.id} className="story-stat">
              <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              <span className="story-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="story-timeline">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              className="timeline-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="timeline-year">{t.year}</span>
              <span className="timeline-dot" />
              <p className="timeline-text">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
