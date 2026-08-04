import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Collections.css";

const collections = [
  {
    id: "solstice",
    title: "The Solstice Edit",
    desc: "Warm gold, worn every day — layerable chains and soft-cut stones.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "bridal-vault",
    title: "The Bridal Vault",
    desc: "Engagement rings and eternity bands, cut for a lifetime.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "noir",
    title: "Noir Collection",
    desc: "Blackened gold and dark stones for evening wear.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "verona",
    title: "Verona Diamond",
    desc: "Statement diamond pieces for once-in-a-lifetime moments.",
    image: "https://images.unsplash.com/photo-1602751584547-6d68a1b1c2f4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "petit",
    title: "Petit Everyday",
    desc: "Delicate studs, thin bands and pendants for daily layering.",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "heritage",
    title: "Heritage Line",
    desc: "Reissued archive designs from our 1998 founding collection.",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Collections() {
  return (
    <div className="collections-page">
      <div className="collections-header">
        <div className="container">
          <span className="eyebrow">Curated Lines</span>
          <h1 className="section-title">
            Every collection tells <em>a different story</em>
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="collections-grid">
          {collections.map((c, i) => (
            <motion.div
              key={c.id}
              className="collection-tile facet-frame"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={c.image} alt={c.title} loading="lazy" />
              <div className="collection-tile-overlay" />
              <div className="collection-tile-content">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <Link to="/shop" className="btn btn-outline cursor-hover">
                  Shop the Line
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
