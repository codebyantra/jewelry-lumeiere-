import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Loader.css";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + Math.random() * 14));
    }, 160);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
    >
      <div className="loader-sparkle" aria-hidden="true">
        <svg viewBox="0 0 60 60" width="46" height="46">
          <path
            d="M30 4 L34 26 L56 30 L34 34 L30 56 L26 34 L4 30 L26 26 Z"
            fill="url(#sparkleGrad)"
          />
          <defs>
            <linearGradient id="sparkleGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f6e7c1" />
              <stop offset="100%" stopColor="#c9a14a" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 className="loader-logo">Lumière</h1>
      <div className="loader-bar">
        <motion.div
          className="loader-bar-fill"
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ ease: "linear", duration: 0.15 }}
        />
      </div>
      <span className="loader-percent">{Math.min(Math.round(progress), 100)}%</span>
    </motion.div>
  );
}
