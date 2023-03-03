import React from 'react';
import './ReviewItem.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ReviewItem = ({product, handleRemoveItem}) => {
    const {name, quantity, id, price, img} = product;
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
        <button onClick={() => handleRemoveItem(id)} className='btn-del'>
            <FontAwesomeIcon className='del-icon' icon={faTrashAlt} />
        </button>
        </div>
        </div>

    </div>
  )
}

export default ReviewItem
