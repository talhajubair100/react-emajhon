import React from 'react'
import './Cart.css'

const Cart = ({cart}) => {    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grand_total = (total + shipping + parseFloat(tax));
  return (
    <div className='cart'>
    <h3>Cart</h3>
    <p>Cart Item: {quantity}</p>
    <p>Total Price: ${total}</p>
    <p>Total Shipping: ${shipping}</p>
    <p>Tax Price: ${tax}</p>
    <hr></hr>
    <p>Grand Total: ${grand_total.toFixed(2)}</p>


    </div>
  )
}

export default Cart
