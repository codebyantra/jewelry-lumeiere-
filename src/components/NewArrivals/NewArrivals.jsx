import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { products } from "../../data/products.js";
import "./NewArrivals.css";

export default function NewArrivals() {
  const newItems = products.filter((p) => p.tag === "New").concat(products.slice(0, 2));
  const items = Array.from(new Map(newItems.map((p) => [p.id, p])).values()).slice(0, 4);

  return (
    <section className="section new-arrivals">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Just Landed</span>
            <h2 className="section-title">
              New <em>arrivals</em>
            </h2>
          </div>
          <a href="/shop" className="btn btn-outline cursor-hover">
            View All
          </a>
        </div>

        <motion.div
          className="new-arrivals-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {items.map((p, i) => (
            <ProductCard product={p} key={p.id} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
