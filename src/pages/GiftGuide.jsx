import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function GiftGuide(){
  return (
    <section className="section container">
      <Helmet>
        <title>Gift Guide – MUVANI</title>
        <meta name="description" content="Find gift ideas for every budget and occasion with MUVANI’s curated guide." />
        <link rel="canonical" href="https://muvani.store/#/gift-guide" />
        <meta property="og:title" content="Gift Guide – MUVANI" />
        <meta property="og:description" content="Find gift ideas for every budget and occasion with MUVANI’s curated guide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muvani.store/#/gift-guide" />
        <meta property="og:image" content="https://muvani.store/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gift Guide – MUVANI" />
        <meta name="twitter:description" content="Find gift ideas for every budget and occasion with MUVANI’s curated guide." />
        <meta name="twitter:image" content="https://muvani.store/logo.png" />
      </Helmet>
      <h2>Gift Guide</h2>
      <p>Not sure where to start? Pick from our curated ideas:</p>
      <ul>
        <li>Under $20 — small gestures, big smiles</li>
        <li>Anniversary Classics — timeless & romantic</li>
        <li>Personalized Picks — make it uniquely theirs</li>
      </ul>
      <p>Ready to explore? <a href="#/shop">Browse the shop</a>.</p>
    </section>
  )
}

