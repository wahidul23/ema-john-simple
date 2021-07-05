import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div className="review-item">
            <h4 className="product-name">{name}</h4>
            <h5>Product Quantity: {quantity}</h5>
            <p><small>${price}</small></p>
            <button 
            className="addBtn"
            onClick ={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;