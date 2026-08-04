import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiTwitter, FiCreditCard } from "react-icons/fi";
import "./Footer.css";

const columns = [
  {
    title: "Shop",
    links: ["Necklaces", "Rings", "Bracelets", "Earrings", "Wedding"],
  },
  {
    title: "Client Care",
    links: ["Contact Us", "Shipping & Returns", "Ring Sizing", "Care Guide", "FAQ"],
  },
  {
    title: "Lumière",
    links: ["Our Story", "Sustainability", "Ateliers", "Careers", "Press"],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Lumière
          </Link>
          <p className="section-sub">
            Fine jewelry, hand-finished in small batches. Certified stones,
            18k gold, and a lifetime of care.
          </p>
          <div className="footer-social">
            <a href="https://instagram.com" aria-label="Instagram" className="icon-btn cursor-hover">
              <FiInstagram size={16} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="icon-btn cursor-hover">
              <FiFacebook size={16} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="icon-btn cursor-hover">
              <FiTwitter size={16} />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <Link to="/shop">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="hairline container" />

      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} Lumière Jewelry. All rights reserved.</span>
        <div className="footer-payments">
          <FiCreditCard size={20} />
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Amex</span>
          <span>PayPal</span>
        </div>
      </div>
    </footer>
  );
}
