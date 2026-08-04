import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import "./LuxuryCollections.css";

export default function LuxuryCollections() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yFront = useTransform(scrollYProgress, [0, 1], [40, -80]);

  return (
    <section className="luxury-editorial" ref={ref}>
      <motion.img
        className="luxury-editorial-bg"
        style={{ y: yBack }}
        src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1600&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
      />
      <div className="luxury-editorial-scrim" />

      <div className="container luxury-editorial-content">
        <span className="eyebrow">Editorial</span>
        <h2 className="luxury-editorial-title">
          Jewelry is the only <em>architecture</em>
          <br /> built for the body.
        </h2>
        <p className="section-sub">
          Each Lumière piece begins as a sketch, then a wax model, then months
          of hand-finishing before it ever reaches a velvet box.
        </p>
        <Link to="/about" className="btn btn-gold cursor-hover">
          Read Our Story
        </Link>
      </div>

      <motion.img
        className="luxury-editorial-float"
        style={{ y: yFront }}
        src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=700&auto=format&fit=crop"
        alt="Detail of a gold ring"
      />
    </section>
  );
}
