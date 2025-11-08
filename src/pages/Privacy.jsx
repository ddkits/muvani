import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Privacy(){
  return (
    <section className="section container">
      <Helmet>
        <title>Privacy Policy – MUVANI</title>
        <meta name="description" content="How MUVANI collects, uses, and protects your data." />
        <link rel="canonical" href="https://muvani.store/#/privacy" />
        <meta property="og:title" content="Privacy Policy – MUVANI" />
        <meta property="og:description" content="How MUVANI collects, uses, and protects your data." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muvani.store/#/privacy" />
        <meta property="og:image" content="https://muvani.store/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy – MUVANI" />
        <meta name="twitter:description" content="How MUVANI collects, uses, and protects your data." />
        <meta name="twitter:image" content="https://muvani.store/logo.png" />
      </Helmet>
      <h2>Privacy Policy</h2>
      <p>We respect your privacy. We only collect information necessary to process your order and improve your experience.</p>
    </section>
  )
}

