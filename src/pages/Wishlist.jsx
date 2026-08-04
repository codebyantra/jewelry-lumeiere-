import React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingBag, FiX } from "react-icons/fi";
import { useShop } from "../context/CartContext.jsx";
import "../styles/Wishlist.css";

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  return (
    <div className="wishlist-page">
      <div className="container">
        <div className="wishlist-header">
          <span className="eyebrow">Saved</span>
          <h1 className="section-title">Your Wishlist</h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="empty-state">
            <FiHeart size={40} />
            <p>Nothing saved yet — tap the heart on any piece to keep it here.</p>
            <Link to="/shop" className="btn btn-gold cursor-hover">
              Browse the Shop
            </Link>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlist.map((item) => (
              <div key={item.id} className="wishlist-card facet-frame">
                <button
                  className="wishlist-remove"
                  onClick={() => toggleWishlist(item)}
                  aria-label="Remove from wishlist"
                >
                  <FiX size={14} />
                </button>
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt={item.name} />
                </Link>
                <div className="wishlist-card-info">
                  <span className="product-cat">{item.category}</span>
                  <Link to={`/product/${item.id}`} className="product-name">
                    {item.name}
                  </Link>
                  <div className="wishlist-card-bottom">
                    <span className="product-price">${item.price.toLocaleString()}</span>
                    <button className="btn btn-outline cursor-hover" onClick={() => addToCart(item)}>
                      <FiShoppingBag size={13} /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
