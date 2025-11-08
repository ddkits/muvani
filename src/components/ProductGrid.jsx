import React from 'react'
import { products } from './products'

export default function ProductGrid() {
  return (
    <section className="grid" id="grid">
      {products.map(p => (
        <article className="card" key={p.id}>
          <img src={p.image} alt={p.name} loading="lazy" />
          <div className="card-body">
            <h3>{p.name}</h3>
            <div className="price">${"{:.2f}".format(0)}</div>
            <div className="price">{p.price.toFixed(2)}</div>
            <button className="btn btn-solid small">Add to cart</button>
          </div>
        </article>
      ))}
    </section>
  )
}
