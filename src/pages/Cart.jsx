import React from "react";
import { Link } from "react-router-dom";
import { FiMinus, FiPlus, FiX, FiShoppingBag } from "react-icons/fi";
import { useShop } from "../context/CartContext.jsx";
import "../styles/Cart.css";

export default function Cart() {
  const { cart, updateQty, removeFromCart, cartTotal } = useShop();
  const shipping = cart.length > 0 ? 0 : 0;
  const total = cartTotal + shipping;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="wishlist-header">
          <span className="eyebrow">Your Bag</span>
          <h1 className="section-title">Shopping Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="empty-state">
            <FiShoppingBag size={40} />
            <p>Your cart is empty. Let's find something worth keeping.</p>
            <Link to="/shop" className="btn btn-gold cursor-hover">
              Browse the Shop
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item facet-frame" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <span className="product-cat">{item.category}</span>
                    <Link to={`/product/${item.id}`} className="product-name">
                      {item.name}
                    </Link>
                    <span className="cart-item-price">${item.price.toLocaleString()}</span>
                  </div>
                  <div className="qty-stepper">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease">
                      <FiMinus size={13} />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase">
                      <FiPlus size={13} />
                    </button>
                  </div>
                  <span className="cart-item-subtotal">
                    ${(item.price * item.qty).toLocaleString()}
                  </span>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    <FiX size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary facet-frame">
              <h3>Order Summary</h3>
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
              <div className="cart-summary-row">
                <span>Shipping</span>
                <span>Complimentary</span>
              </div>
              <div className="hairline" />
              <div className="cart-summary-row cart-summary-total">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <button className="btn btn-gold cursor-hover cart-checkout">
                Proceed to Checkout
              </button>
              <p className="cart-summary-note">
                Taxes calculated at checkout. Free insured shipping worldwide.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
