import React from "react";
import { motion } from "framer-motion";
import StorySection from "../components/StorySection/StorySection.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import Newsletter from "../components/Newsletter/Newsletter.jsx";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-banner">
        <img
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1600&auto=format&fit=crop"
          alt="Lumière atelier"
        />
        <div className="about-banner-scrim" />
        <motion.div
          className="about-banner-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Since 1998</span>
          <h1 className="section-title">
            Made by hand, <em>worn by you</em>
          </h1>
        </motion.div>
      </section>

      <StorySection />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
