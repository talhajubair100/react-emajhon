import React, { useEffect } from 'react'
import { useState } from 'react'
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
  const  [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('./products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  const handleAddToCart = (id) => {
    console.log('Product Added', id);
}

  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
        }
      </div>
      <div className="cart-container">
        <h3>For Cart</h3>
      </div>
    </div>
  )
}

export default Shop
