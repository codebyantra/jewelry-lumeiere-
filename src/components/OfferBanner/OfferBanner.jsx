import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./OfferBanner.css";

export default function OfferBanner() {
  return (
    <section className="offer-banner">
      <div className="container offer-banner-inner">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Limited Time</span>
          <h3>Complimentary engraving on every wedding band, through June.</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/shop" className="btn btn-gold cursor-hover">
            Claim Offer
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
