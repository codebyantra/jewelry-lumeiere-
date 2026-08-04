import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";
import Navbar from "../Navbar/Navbar.jsx";
import { useShop } from "../../context/CartContext.jsx";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, wishlist } = useShop();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"header" + (scrolled ? " is-scrolled" : "")}>
      <div className="container header-inner">
        <button
          className="header-burger cursor-hover"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>

        <Link to="/" className="header-logo cursor-hover">
          Lumière
        </Link>

        <Navbar />

        <div className="header-actions">
          <button
            className="icon-btn cursor-hover"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
          >
            <FiSearch size={17} />
          </button>
          <Link to="/wishlist" className="icon-btn cursor-hover" aria-label="Wishlist">
            <FiHeart size={17} />
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </Link>
          <Link to="/cart" className="icon-btn cursor-hover" aria-label="Cart">
            <FiShoppingBag size={17} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
          <button className="icon-btn cursor-hover profile-btn" aria-label="Profile">
            <FiUser size={17} />
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="header-search">
          <div className="container">
            <input
              type="text"
              autoFocus
              placeholder="Search for necklaces, rings, gifts…"
            />
            <button onClick={() => setSearchOpen(false)} aria-label="Close search">
              <FiX />
            </button>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="header-mobile">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setMobileOpen(false)}>Shop</Link>
          <Link to="/collections" onClick={() => setMobileOpen(false)}>Collections</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
}
