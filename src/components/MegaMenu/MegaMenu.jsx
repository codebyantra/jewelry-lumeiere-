import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { categories } from "../../data/products.js";
import "./MegaMenu.css";

export default function MegaMenu({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mega-menu facet-frame"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mega-menu-cols">
            {categories.map((cat) => (
              <Link key={cat.id} to="/shop" className="mega-menu-item cursor-hover">
                <div className="mega-menu-thumb">
                  <img src={cat.image} alt={cat.name} loading="lazy" />
                </div>
                <span>{cat.name}</span>
              </Link>
            ))}
          </div>
          <div className="mega-menu-feature">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=700&auto=format&fit=crop"
              alt="Featured collection"
            />
            <div className="mega-menu-feature-text">
              <span className="eyebrow">New In</span>
              <h4>The Solstice Edit</h4>
              <Link to="/collections" className="btn btn-outline">
                Explore
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
