import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
    <h3>Cart</h3>
    <p>Cart Item: {cart.length}</p>
    </div>
  )
}

export default Cart
