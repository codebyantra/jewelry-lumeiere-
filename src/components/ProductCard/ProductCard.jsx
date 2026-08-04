import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiEye, FiRepeat, FiShoppingBag, FiStar } from "react-icons/fi";
import { useShop } from "../../context/CartContext.jsx";
import "./ProductCard.css";

export default function ProductCard({ product, index = 0 }) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const [quickView, setQuickView] = useState(false);
  const wished = isWishlisted(product.id);

  return (
    <div
      className="product-card facet-frame"
      style={{ transitionDelay: `${Math.min(index, 6) * 60}ms` }}
    >
      <div className="product-media">
        <Link to={`/product/${product.id}`} className="cursor-hover">
          <img src={product.image} alt={product.name} className="product-img-base" />
          <img src={product.hoverImage} alt="" className="product-img-hover" aria-hidden="true" />
        </Link>

        {product.tag && <span className="product-tag">{product.tag}</span>}

        <div className="product-quick-actions">
          <button
            className={"icon-btn cursor-hover" + (wished ? " is-active" : "")}
            onClick={() => toggleWishlist(product)}
            aria-label="Add to wishlist"
          >
            <FiHeart size={15} />
          </button>
          <button
            className="icon-btn cursor-hover"
            onClick={() => setQuickView(true)}
            aria-label="Quick view"
          >
            <FiEye size={15} />
          </button>
          <button className="icon-btn cursor-hover" aria-label="Compare">
            <FiRepeat size={15} />
          </button>
        </div>

        <button
          className="btn btn-gold product-add cursor-hover"
          onClick={() => addToCart(product)}
        >
          <FiShoppingBag size={14} /> Add to Cart
        </button>
      </div>

      <div className="product-info">
        <span className="product-cat">{product.category}</span>
        <Link to={`/product/${product.id}`} className="product-name cursor-hover">
          {product.name}
        </Link>
        <div className="product-meta">
          <span className="product-price">
            ${product.price.toLocaleString()}
            {product.oldPrice && (
              <s className="product-old-price">${product.oldPrice.toLocaleString()}</s>
            )}
          </span>
          <span className="product-rating">
            <FiStar size={12} /> {product.rating}
          </span>
        </div>
      </div>

      {quickView && (
        <div className="quick-view-overlay" onClick={() => setQuickView(false)}>
          <div className="quick-view-panel facet-frame" onClick={(e) => e.stopPropagation()}>
            <img src={product.image} alt={product.name} />
            <div className="quick-view-info">
              <span className="product-cat">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="quick-view-price">${product.price.toLocaleString()}</p>
              <p className="section-sub">
                Set in 18k gold with hand-selected stones. Comes with a certificate
                of authenticity and a signature Lumière case.
              </p>
              <div className="hero-actions">
                <button
                  className="btn btn-gold"
                  onClick={() => {
                    addToCart(product);
                    setQuickView(false);
                  }}
                >
                  Add to Cart
                </button>
                <Link to={`/product/${product.id}`} className="btn btn-outline">
                  Full Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
