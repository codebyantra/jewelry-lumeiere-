import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard/ProductCard.jsx";
import { products, categories } from "../data/products.js";
import "../styles/Shop.css";

export default function Shop() {
  const [activeCat, setActiveCat] = useState("all");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = products;
    if (activeCat !== "all") {
      list = list.filter((p) => p.category.toLowerCase() === activeCat);
    }
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCat, sort]);

  return (
    <div className="shop-page">
      <div className="shop-header">
        <div className="container">
          <span className="eyebrow">Full Collection</span>
          <h1 className="section-title">Shop All Jewelry</h1>
        </div>
      </div>

      <div className="container">
        <div className="shop-toolbar">
          <div className="shop-filters">
            <button
              className={"shop-filter-chip" + (activeCat === "all" ? " is-active" : "")}
              onClick={() => setActiveCat("all")}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                className={"shop-filter-chip" + (activeCat === c.id ? " is-active" : "")}
                onClick={() => setActiveCat(c.id)}
              >
                {c.name}
              </button>
            ))}
          </div>

          <select
            className="shop-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <motion.div
          className="shop-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filtered.map((p, i) => (
            <ProductCard product={p} key={p.id} index={i} />
          ))}
          {filtered.length === 0 && (
            <p className="shop-empty">No pieces match this filter yet.</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
