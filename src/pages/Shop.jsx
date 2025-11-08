import React from 'react'
import { Helmet } from 'react-helmet-async'
import { products } from './products'
export default function Shop(){
  return (
    <div className="section">
      <Helmet>
        <title>Shop – MUVANI</title>
        <meta name="description" content="Explore curated gifts and romantic sets from MUVANI." />
        <link rel="canonical" href="https://muvani.store/#/shop" />
        <meta property="og:title" content="Shop – MUVANI" />
        <meta property="og:description" content="Explore curated gifts and romantic sets from MUVANI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muvani.store/#/shop" />
        <meta property="og:image" content="https://muvani.store/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shop – MUVANI" />
        <meta name="twitter:description" content="Explore curated gifts and romantic sets from MUVANI." />
        <meta name="twitter:image" content="https://muvani.store/logo.png" />
      </Helmet>
      <div className="container"><h2>Shop</h2></div>
      <section className="grid">
        {products.map(p => (
          <article className="card" key={p.id}>
            <img src={p.image} alt={p.name} loading="lazy" />
            <div className="card-body">
              <h3>{p.name}</h3>
              <div className="price">${p.price.toFixed(2)}</div>
              <button className="btn btn-solid small">Add to cart</button>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

