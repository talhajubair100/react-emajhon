import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb, deleteShoppingCart } from '../../utilities/fakedb';
const Order = () => {
    const {products, previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);

    const handleRemoveItem = (id) => {
      console.log('remove item', id);
      const remaining = cart.filter(product => product.id !== id);
      setCart(remaining);
      removeFromDb(id);
    }

    const clearCart = () => {
      setCart([]);
      deleteShoppingCart();
    }

  return (
    <div className='shop-container'>
      <div className="orders-container">
      {
        cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveItem={handleRemoveItem}></ReviewItem>)
      }
      {
        !cart.length && <h1>Your cart is empty</h1>
      }
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}></Cart>
      </div>
    </div>
  )
}

export default Order
