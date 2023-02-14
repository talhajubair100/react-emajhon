import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product, handleAddToCart}) => {
    // const { product, handleAddToCart } = props;
    const {name, seller, price, stock, ratings, img,} = product;
    
    
  return (
    <div className='product'>
      
      <img src={img} alt="" />
      <div className="product-info">
      <h5>{name}</h5>
      <p>Seller: {seller}</p>
      <p>Price: ${price}</p>
      <p>IN Stock: {stock} Pcs</p>
      <p>Rating: {ratings} Start</p>
      </div>
      <button onClick={() => {handleAddToCart(product)}} className='btn-cart'>
      Add To Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  )
}

export default Product
