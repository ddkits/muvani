import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Contact(){
  return (
    <section className="section container">
      <Helmet>
        <title>Contact – MUVANI</title>
        <meta name="description" content="Get in touch with MUVANI customer support." />
        <link rel="canonical" href="https://muvani.store/#/contact" />
        <meta property="og:title" content="Contact – MUVANI" />
        <meta property="og:description" content="Get in touch with MUVANI customer support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muvani.store/#/contact" />
        <meta property="og:image" content="https://muvani.store/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact – MUVANI" />
        <meta name="twitter:description" content="Get in touch with MUVANI customer support." />
        <meta name="twitter:image" content="https://muvani.store/logo.png" />
      </Helmet>
      <h2>Contact</h2>
      <p>Email: <a href="mailto:support@muvani.store">support@muvani.store</a></p>
      <p>Phone: <a href="tel:+16198928426">+1 619 892 8426</a></p>
    </section>
  )
}

