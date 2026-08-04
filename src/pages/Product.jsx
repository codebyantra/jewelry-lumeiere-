import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiStar, FiHeart, FiShoppingBag, FiMinus, FiPlus } from "react-icons/fi";
import { products } from "../data/products.js";
import { useShop } from "../context/CartContext.jsx";
import ProductCard from "../components/ProductCard/ProductCard.jsx";
import "../styles/Product.css";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(product.image);
  const wished = isWishlisted(product.id);

  return (
    <div className="product-page">
      <div className="container product-breadcrumb">
        <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>{product.name}</span>
      </div>

      <div className="container product-layout">
        <motion.div
          className="product-gallery"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="product-gallery-main facet-frame">
            <img src={activeImg} alt={product.name} />
          </div>
          <div className="product-gallery-thumbs">
            {[product.image, product.hoverImage].map((src, i) => (
              <button
                key={i}
                className={"product-thumb" + (activeImg === src ? " is-active" : "")}
                onClick={() => setActiveImg(src)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="product-details"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="product-cat">{product.category}</span>
          <h1>{product.name}</h1>

          <div className="product-rating-row">
            {Array.from({ length: 5 }).map((_, i) => (
              <FiStar
                key={i}
                size={14}
                className={i < Math.round(product.rating) ? "is-filled" : ""}
              />
            ))}
            <span>{product.rating} ({product.reviews} reviews)</span>
          </div>

          <div className="product-price-row">
            <span className="product-price-lg">${product.price.toLocaleString()}</span>
            {product.oldPrice && (
              <s className="product-old-price">${product.oldPrice.toLocaleString()}</s>
            )}
          </div>

          <p className="section-sub">
            Hand-set in 18k gold with certified, conflict-free stones. Every
            piece ships in a signature Lumière case with a lifetime care
            certificate.
          </p>

          <div className="product-qty-row">
            <div className="qty-stepper">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                <FiMinus size={14} />
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
                <FiPlus size={14} />
              </button>
            </div>

            <button
              className="btn btn-gold cursor-hover"
              onClick={() => {
                for (let i = 0; i < qty; i++) addToCart(product);
              }}
            >
              <FiShoppingBag size={15} /> Add to Cart
            </button>

            <button
              className={"icon-btn cursor-hover" + (wished ? " is-active" : "")}
              onClick={() => toggleWishlist(product)}
              aria-label="Toggle wishlist"
            >
              <FiHeart size={16} />
            </button>
          </div>

          <div className="product-accordion">
            <details open>
              <summary>Details &amp; Materials</summary>
              <p>18k gold, hand-set stones, hallmarked and certified. Made to order in our Antwerp atelier.</p>
            </details>
            <details>
              <summary>Shipping &amp; Returns</summary>
              <p>Free insured shipping worldwide. 30-day returns on unworn pieces.</p>
            </details>
            <details>
              <summary>Care Guide</summary>
              <p>Store flat in the provided case. Avoid contact with perfume and chlorinated water.</p>
            </details>
          </div>
        </motion.div>
      </div>

      <div className="container product-related">
        <div className="section-head">
          <div>
            <span className="eyebrow">You May Also Like</span>
            <h2 className="section-title">Complete the look</h2>
          </div>
        </div>
        <div className="product-related-grid">
          {related.map((p, i) => (
            <ProductCard product={p} key={p.id} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
