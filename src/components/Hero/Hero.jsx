import React, { useLayoutEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiStar } from "react-icons/fi";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

// Six gem "charms" that will fly together into a necklace curve.
const GEM_PIECES = [
  { id: "g1", x: -420, y: -260, rot: -35, size: 30 },
  { id: "g2", x: 360, y: -300, rot: 40, size: 26 },
  { id: "g3", x: -520, y: 120, rot: -10, size: 22 },
  { id: "g4", x: 480, y: 160, rot: 15, size: 22 },
  { id: "g5", x: -260, y: 300, rot: 20, size: 18 },
  { id: "g6", x: 240, y: 320, rot: -20, size: 18 },
];

// Target positions along a necklace "V" curve (relative to center, px).
const NECKLACE_CURVE = [
  { x: -150, y: -40 },
  { x: -90, y: 30 },
  { x: -34, y: 70 },
  { x: 34, y: 70 },
  { x: 90, y: 30 },
  { x: 150, y: -40 },
];

const SHOWCASE_ITEMS = [
  {
    id: "ring",
    label: "Éclat Solitaire Ring",
    price: "$3,190",
    rating: "5.0",
    markerTop: "58%",
    markerLeft: "37%",
  },
  {
    id: "bracelet",
    label: "Noir Chain Bracelet",
    price: "$1,290",
    rating: "4.7",
    markerTop: "66%",
    markerLeft: "62%",
  },
  {
    id: "earrings",
    label: "Lumière Drop Earrings",
    price: "$1,680",
    rating: "4.8",
    markerTop: "24%",
    markerLeft: "58%",
  },
];

function Particles({ count = 34 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2.4,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 10,
      })),
    [count]
  );

  return (
    <div className="hero-particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="hero-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const rootRef = useRef(null);
  const gemRefs = useRef({});
  const necklaceAssembledRef = useRef(null);
  const modelRef = useRef(null);
  const showcaseRefs = useRef({});
  const markerRefs = useRef({});

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial scattered placement for gem pieces
      GEM_PIECES.forEach((g) => {
        gsap.set(gemRefs.current[g.id], {
          x: g.x,
          y: g.y,
          rotate: g.rot,
          opacity: 0.9,
        });
      });
      gsap.set(necklaceAssembledRef.current, { opacity: 0, scale: 0.9 });
      gsap.set(modelRef.current, { opacity: 0, y: 40 });
      Object.values(showcaseRefs.current).forEach((el) =>
        gsap.set(el, { opacity: 0, scale: 0.7, y: 20 })
      );
      Object.values(markerRefs.current).forEach((el) =>
        gsap.set(el, { opacity: 0, scale: 0 })
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=2%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // STAGE 1 — necklace pieces fly together into an assembled curve
      GEM_PIECES.forEach((g, i) => {
        tl.to(
          gemRefs.current[g.id],
          {
            x: NECKLACE_CURVE[i].x,
            y: NECKLACE_CURVE[i].y,
            rotate: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          0
        );
      });
      tl.to(
        Object.values(gemRefs.current),
        { opacity: 0, duration: 0.25 },
        0.85
      );
      tl.to(necklaceAssembledRef.current, { opacity: 1, scale: 1, duration: 0.35 }, 0.85);

      // STAGE 2 — completed necklace floats, model fades in, necklace settles onto her
      tl.to(necklaceAssembledRef.current, { y: -18, duration: 0.3, ease: "sine.inOut" }, 1.1);
      tl.to(modelRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 1.25);
      tl.to(
        necklaceAssembledRef.current,
        {
          top: "40%",
          scale: 0.55,
          duration: 0.6,
          ease: "power3.inOut",
        },
        1.4
      );

      // STAGE 3 — ring / bracelet / earrings leave the model and open into product cards
      SHOWCASE_ITEMS.forEach((item, i) => {
        const start = 2.1 + i * 0.35;
        tl.to(markerRefs.current[item.id], { opacity: 1, scale: 1, duration: 0.15 }, start - 0.15);
        tl.to(
          markerRefs.current[item.id],
          { opacity: 0, duration: 0.2 },
          start + 0.25
        );
        tl.to(
          showcaseRefs.current[item.id],
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.6)" },
          start
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={rootRef}>
      <div className="hero-stage">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-glow hero-glow-a" />
          <div className="hero-glow hero-glow-b" />
          <div className="hero-rays" />
          <Particles />
        </div>

        <div className="hero-copy">
          <span className="eyebrow">The Solstice Edit — 2026</span>
          <h1 className="hero-title">
            Light,
            <br />
            <em>cut</em> to wear.
          </h1>
          <p className="section-sub">
            Hand-set stones and 18k gold, assembled piece by piece the way
            they're worn — one facet at a time.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn btn-gold cursor-hover">
              Shop the Edit
            </Link>
            <Link to="/collections" className="btn btn-outline cursor-hover">
              View Collections
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          {/* Necklace assembly pieces */}
          <div className="necklace-rig">
            {GEM_PIECES.map((g) => (
              <span
                key={g.id}
                ref={(el) => (gemRefs.current[g.id] = el)}
                className="gem-piece"
                style={{ width: g.size, height: g.size }}
              />
            ))}
            <div className="necklace-assembled" ref={necklaceAssembledRef}>
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=500&auto=format&fit=crop"
                alt="Assembled diamond necklace"
              />
            </div>
          </div>

          {/* Model + worn jewelry markers */}
          <div className="model-frame facet-frame" ref={modelRef}>
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=900&auto=format&fit=crop"
              alt="Model wearing fine jewelry"
              className="model-image"
            />
            {SHOWCASE_ITEMS.map((item) => (
              <span
                key={item.id}
                ref={(el) => (markerRefs.current[item.id] = el)}
                className="jewel-marker"
                style={{ top: item.markerTop, left: item.markerLeft }}
              />
            ))}
          </div>

          {/* Flying product showcase cards */}
          <div className="showcase-stack">
            {SHOWCASE_ITEMS.map((item) => (
              <div
                key={item.id}
                ref={(el) => (showcaseRefs.current[item.id] = el)}
                className="showcase-card facet-frame"
              >
                <span className="showcase-name">{item.label}</span>
                <span className="showcase-price">{item.price}</span>
                <span className="showcase-rating">
                  <FiStar size={12} /> {item.rating}
                </span>
                <button className="btn btn-gold showcase-btn">Add to Bag</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue">
        <span />
        Scroll to unveil
      </div>
    </section>
  );
}
