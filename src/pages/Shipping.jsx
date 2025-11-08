import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Shipping(){
  return (
    <section className="section container">
      <Helmet>
        <title>Shipping & Returns – MUVANI</title>
        <meta name="description" content="Shipping timelines, destinations, and return policy for MUVANI orders." />
        <link rel="canonical" href="https://muvani.store/#/shipping" />
        <meta property="og:title" content="Shipping & Returns – MUVANI" />
        <meta property="og:description" content="Shipping timelines, destinations, and return policy for MUVANI orders." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muvani.store/#/shipping"/>
        <meta property="og:image" content="https://muvani.store/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shipping & Returns – MUVANI" />
        <meta name="twitter:description" content="Shipping timelines, destinations, and return policy for MUVANI orders." />
        <meta name="twitter:image" content="https://muvani.store/logo.png" />
      </Helmet>
      <h2>Shipping & Returns</h2>
      <p>We currently ship to the U.S. Standard shipping typically arrives in 3–7 business days.</p>
      <p>Returns are accepted within 14 days of delivery for unused items in original packaging.</p>
    </section>
  )
}

