import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MegaMenu from "../MegaMenu/MegaMenu.jsx";
import "./Navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop", mega: true },
  { label: "Collections", to: "/collections" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [openMega, setOpenMega] = useState(false);

  return (
    <nav className="navbar" onMouseLeave={() => setOpenMega(false)}>
      <ul className="navbar-list">
        {links.map((link) => (
          <li
            key={link.to}
            className="navbar-item"
            onMouseEnter={() => setOpenMega(!!link.mega)}
          >
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                "navbar-link" + (isActive ? " is-active" : "")
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <MegaMenu open={openMega} />
    </nav>
  );
}
