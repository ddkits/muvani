import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Home(){
  return (
    <div>
      <Helmet>
        <title>MUVANI – Thoughtful Gifts & More</title>
        <meta name="description" content="Boutique gifts, curated with love. Shop romantic, personalized, and memorable presents from MUVANI." />
        <link rel="canonical" href="https://muvani.store/#/" />
        <meta property="og:title" content="MUVANI – Thoughtful Gifts & More" />
        <meta property="og:description" content="Boutique gifts, curated with love. Shop romantic, personalized, and memorable presents from MUVANI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muvani.store/#/" />
        <meta property="og:image" content="https://muvani.store/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MUVANI – Thoughtful Gifts & More" />
        <meta name="twitter:description" content="Boutique gifts, curated with love. Shop romantic, personalized, and memorable presents from MUVANI." />
        <meta name="twitter:image" content="https://muvani.store/logo.png" />
      </Helmet>
      <section className="hero">
        <div className="hero-inner">
          <h1>Gifts that speak from the heart</h1>
          <p>Thoughtful pieces, curated with love. Perfect for birthdays, anniversaries, and every little moment.</p>
          <div style={{display:'flex', gap:12, justifyContent:'center'}}>
            <a href="#/shop" className="btn btn-solid">Shop Featured</a>
            <a href="#/gift-guide" className="btn btn-outline">Gift Guide</a>
          </div>
        </div>
      </section>
      <section className="section container">
        <h2>Why MUVANI?</h2>
        <p>Premium materials, elegant packaging, and a warm, modern palette. Designed to be gifted right out of the box.</p>
      </section>
    </div>
  )
}

