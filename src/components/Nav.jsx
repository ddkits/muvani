import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import "./nav.css"
export default function Nav() {
  useEffect(() => {
  const nav = document.getElementById("glassNav");
  const height = nav.offsetHeight;
  document.body.style.paddingTop = height + "px";
}, []);
  return (
    <nav id="glassNav" className="navbar navbar-expand-lg glass-navbar fixed-top">
      <div className="container">

        {/* BRAND */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="MUVANI logo"
            height="42"
            className="me-2 logo-shadow"
          />
          <div>
            <div className="fw-bold brand-title">MUVANI</div>
            <div className="brand-sub">Division of Reallexi LLC</div>
          </div>
        </NavLink>

        {/* TOGGLE */}
        <button
          className="navbar-toggler border-0 custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#muvaniNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="muvaniNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link">Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gift-guide" className="nav-link">Gift Guide</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faq" className="nav-link">FAQ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
