import React from "react";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../components/PageWrapper";
import Hero from "../components/Hero";
import PatternStrip from "../components/PatternStrip";
import "./home.css"

export default function Home() {
  return (
    <PageWrapper>
      <Helmet>
        {/* unchanged */}
      </Helmet>
      
      <Hero />
      {/* <PatternStrip /> */}

      <section className="section container why-grid">
        <h2 className="section-title">Why MUVANI?</h2>

        <div className="why-items">
          <div className="why-item">
            <span className="why-icon">🎁</span>
            <h3>Gift-Ready Packaging</h3>
            <p>Soft-touch boxes with a vibrant, modern palette.</p>
          </div>

          <div className="why-item">
            <span className="why-icon">💛</span>
            <h3>Warm & Creative</h3>
            <p>Design that radiates emotion and presence.</p>
          </div>

          <div className="why-item">
            <span className="why-icon">🌿</span>
            <h3>Quality Materials</h3>
            <p>Elegant textures and thoughtful craftsmanship.</p>
          </div>

          <div className="why-item">
            <span className="why-icon">⚡</span>
            <h3>Fast Shipping</h3>
            <p>Packaged with care and shipped swiftly.</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
