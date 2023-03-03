import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStorecart, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
  const products = useLoaderData();
  // const  [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  }
  // useEffect(() => {
  //   fetch('./products.json')
  //   .then(res => res.json())
  //   .then(data => setProducts(data))
  // }, [])

  useEffect(() => {
    const storedCart = getStorecart();
    const savedCart = [];
    for (const id in storedCart){
      const addedProduct = products.find(product => product.id === id);
      console.log(addedProduct);
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;

        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products])

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find(pd => pd.id === product.id);
    if(!exists){
      product.quantity = 1;
      newCart = [...cart, product];
    }else{
      const rest = cart.filter(pd => pd.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(product.id)
}

  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}></Cart>
      </div>
    </div>
  )
}

export default Shop
