import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageWrapper from '../components/PageWrapper'
export default function Terms(){
  return (
     <PageWrapper>
    
      <Helmet>
        <title>Terms of Service – MUVANI</title>
        <meta name="description" content="Legal terms and conditions for using the MUVANI website." />
        <link rel="canonical" https="https://muvani.store/#/terms" />
        <meta property="og:title" content="Terms of Service – MUVANI" />
        <meta property="og:description" content="Legal terms and conditions for using the MUVANI website." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muvani.store/#/terms" />
        <meta property="og:image" content="https://muvani.store/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service – MUVANI" />
        <meta name="twitter:description" content="Legal terms and conditions for using the MUVANI website." />
        <meta name="twitter:image" content="https://muvani.store/logo.png" />
      </Helmet>
      <section className="section container">
      <h2>Terms of Service</h2>
      <p>By using this site, you agree to our standard terms and conditions.</p>
    </section>
    </PageWrapper>
  )
}

