import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "../../data/products.js";
import "./Categories.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Categories() {
  return (
    <section className="section categories">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Shop by Category</span>
            <h2 className="section-title">
              Find your <em>signature</em> piece
            </h2>
          </div>
          <p className="section-sub">
            Seven ways to wear light — from everyday gold to once-in-a-lifetime
            diamond.
          </p>
        </div>

        <motion.div
          className="categories-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={item}>
              <Link to="/shop" className="category-card facet-frame cursor-hover">
                <img src={cat.image} alt={cat.name} loading="lazy" />
                <div className="category-overlay" />
                <span className="category-name">{cat.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
