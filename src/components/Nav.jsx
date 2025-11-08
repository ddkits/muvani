import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/logo.png'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <img src={logo} alt="MUVANI logo" className="brand-logo" />
          <div className="brand-text">
            <div className="brand-name">MUVANI</div>
            <div className="brand-sub">Division of Reallexi LLC</div>
          </div>
        </div>
        <div className="nav-links">
          <NavLink to="/" end className={({isActive})=>`nav-link ${isActive?'active':''}`}>Home</NavLink>
          <NavLink to="/shop" className={({isActive})=>`nav-link ${isActive?'active':''}`}>Shop</NavLink>
          <NavLink to="/about" className={({isActive})=>`nav-link ${isActive?'active':''}`}>About</NavLink>
          <NavLink to="/gift-guide" className={({isActive})=>`nav-link ${isActive?'active':''}`}>Gift Guide</NavLink>
          <NavLink to="/faq" className={({isActive})=>`nav-link ${isActive?'active':''}`}>FAQ</NavLink>
          <NavLink to="/contact" className={({isActive})=>`nav-link ${isActive?'active':''}`}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
