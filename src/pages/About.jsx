import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function About(){
  return (
    <section className="section container">
      <Helmet>
        <title>About – MUVANI</title>
        <meta name="description" content="Learn about MUVANI, a boutique gifting label under Reallexi LLC." />
        <link rel="canonical" href="https://muvani.store/#/about" />
        <meta property="og:title" content="About – MUVANI" />
        <meta property="og:description" content="Learn about MUVANI, a boutique gifting label under Reallexi LLC." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muvani.store/#/about" />
        <meta property="og:image" content="https://muvani.store/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About – MUVANI" />
        <meta name="twitter:description" content="Learn about MUVANI, a boutique gifting label under Reallexi LLC." />
        <meta name="twitter:image" content="https://muvani.store/logo.png" />
      </Helmet>
      <h2>Our Story</h2>
      <p>MUVANI is a modern gifting label under Reallexi LLC. We blend heartfelt curation with boutique packaging — soft-touch finishes, warm palettes, and a timeless serif headline style.</p>
    </section>
  )
}

