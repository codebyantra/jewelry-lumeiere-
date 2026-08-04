import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./FeaturedCollection.css";

const tiles = [
  {
    id: "f1",
    title: "The Bridal Vault",
    desc: "Engagement rings and eternity bands, cut for a lifetime.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    span: "large",
  },
  {
    id: "f2",
    title: "Gold Everyday",
    desc: "Layerable pieces built for daily wear.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop",
    span: "small",
  },
  {
    id: "f3",
    title: "Statement Diamond",
    desc: "For the moments that call for more.",
    image: "https://images.unsplash.com/photo-1602751584547-6d68a1b1c2f4?q=80&w=800&auto=format&fit=crop",
    span: "small",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="section featured">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Curated</span>
            <h2 className="section-title">
              Featured <em>collections</em>
            </h2>
          </div>
        </div>

        <div className="featured-grid">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.id}
              className={`featured-tile featured-tile--${tile.span} facet-frame`}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={tile.image} alt={tile.title} loading="lazy" />
              <div className="featured-tile-overlay" />
              <div className="featured-tile-content">
                <h3>{tile.title}</h3>
                <p>{tile.desc}</p>
                <Link to="/collections" className="btn btn-outline cursor-hover">
                  Discover
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
