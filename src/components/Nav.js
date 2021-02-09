import React from 'react'

import Cart from './Cart'

export default props => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item title" href="#">
        Penn Course Cart
      </a>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <Cart cart={props.cart} />
        </div>
      </div>
    </div>
  </nav>
)
