import React, { useState } from 'react'

const Cart = props => {
  const { cart } = props

  const [isActive, setIsActive] = useState(true)
  const [dropdownClassName, setDropdownClassName] = useState(
    'dropdown is-right'
  ) // allows us to toggle the is-active class

  // toggle showing the cart
  const toggleDropdown = e => {
    e.preventDefault()

    setIsActive(!isActive)

    if (isActive) {
      setDropdownClassName('dropdown is-right is-active')
    } else {
      setDropdownClassName('dropdown is-right')
    }
  }

  return (
    <div className={dropdownClassName}>
      <div className="dropdown-trigger">
        <button
          className={
            'button is-medium ' + (cart.length < 7 ? 'is-primary' : 'is-danger')
          }
          onClick={e => toggleDropdown(e)}
        >
          {cart.length < 7 ? <> Cart ({cart.length}) </> : <> Cart Full! </>}
        </button>
      </div>
      <div className="dropdown-menu">
        <div className="dropdown-content">
          {cart.length === 0 ? (
            <div className="dropdown-item">
              Your cart is empty. Add some courses!
            </div>
          ) : (
            <>
              {cart.map(course => (
                <div className="dropdown-item">
                  <strong>{course.dept + ' ' + course.number} </strong> -{' '}
                  {course.title}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
