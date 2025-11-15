import React from "react";
import { Link } from "react-router-dom";
import heroImg from "/images/muvani-store.png"; // use your nice hero image

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-inner">

        <div className="home-hero-left">
          <h1 className="home-hero-title">
            For the Life You Live, <br /> and the Love You Give.
          </h1>

          <p className="home-hero-sub">
            Boutique gifts crafted with warmth, creativity, and modern elegance — 
            ready to delight the people you love most.
          </p>

          <div className="home-hero-cta">
            <Link to="/shop" className="btn btn-solid">Shop Gifts</Link>
            <Link to="/gift-guide" className="btn">Gift Guide</Link>
          </div>
        </div>

        <div className="home-hero-pattern">
          <img src={heroImg} alt="MUVANI Pattern" />
        </div>

      </div>
    </section>
  );
}
