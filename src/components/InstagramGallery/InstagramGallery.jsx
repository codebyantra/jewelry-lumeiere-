import React from "react";
import { FiInstagram } from "react-icons/fi";
import { instagramShots } from "../../data/products.js";
import "./InstagramGallery.css";

export default function InstagramGallery() {
  return (
    <section className="section instagram-gallery">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">@lumiere.jewelry</span>
            <h2 className="section-title">
              Follow the <em>studio</em>
            </h2>
          </div>
        </div>
      </div>

      <div className="instagram-grid">
        {instagramShots.map((src, i) => (
          <a
            key={i}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="instagram-tile cursor-hover"
          >
            <img src={src} alt="Studio shot" loading="lazy" />
            <div className="instagram-tile-overlay">
              <FiInstagram size={22} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
