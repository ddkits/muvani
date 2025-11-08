import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="kicker">For the Life You Live and the Love You Give.</p>
        <div>
          <Link to="/shipping">Shipping & Returns</Link> ·{' '}
          <Link to="/privacy">Privacy</Link> ·{' '}
          <Link to="/terms">Terms</Link>
        </div>
        <small>© {new Date().getFullYear()} MUVANI – Division of Reallexi LLC. All rights reserved.</small>
      </div>
    </footer>
  )
}
