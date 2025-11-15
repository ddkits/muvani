import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageWrapper from '../components/PageWrapper'

export default function FAQ(){
  return (
    <PageWrapper>
      <Helmet>
        <title>FAQ – MUVANI</title>
        <meta name="description" content="Answers about orders, shipping, returns, and more." />
        <link rel="canonical" href="https://muvani.store/#/faq" />
        <meta property="og:title" content="FAQ – MUVANI" />
        <meta property="og:description" content="Answers about orders, shipping, returns, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muvani.store/#/faq" />
        <meta property="og:image" content="https://muvani.store/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ – MUVANI" />
        <meta name="twitter:description" content="Answers about orders, shipping, returns, and more." />
        <meta name="twitter:image" content="https://muvani.store/logo.png" />
      </Helmet>
      <section className="section container">
      <h2>FAQ</h2>
      <p><strong>When will my order ship?</strong> Most orders ship within 2–3 business days.</p>
      <p><strong>Do you offer gift notes?</strong> Yes — add your note at checkout and we’ll include a printed card.</p>
      <p><strong>Can I return an item?</strong> See our <a href="#/shipping">Shipping & Returns</a> page.</p>
   </section>
    </PageWrapper>
  )
}

