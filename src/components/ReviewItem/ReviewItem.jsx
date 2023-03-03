import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product}) => {
    const {name, quantity, key, price, img} = product;
  return (
    <div className='review-item'>
        <div>
            <img src={img} alt="" />
        </div>
        <div className="review-details">
        <div className="details">
            <p>{name}</p>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price}</p>
        </div>
        <div className="review-delete">
        <button>Delete</button>
        </div>
        </div>

    </div>
  )
}

export default ReviewItem
