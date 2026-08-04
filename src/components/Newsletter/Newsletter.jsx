import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div>
          <span className="eyebrow">Stay in the Light</span>
          <h2 className="section-title">Join the Lumière circle</h2>
          <p className="section-sub">
            Early access to new collections, private sale invitations, and
            styling notes from our lead jeweler.
          </p>
        </div>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-gold cursor-hover">
            Subscribe <FiArrowRight size={14} />
          </button>
        </form>
        {sent && <p className="newsletter-confirm">You're on the list — welcome.</p>}
      </div>
    </section>
  );
}
