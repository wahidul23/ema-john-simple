import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    return (
        <div className="review-item">
            <h4 className="product-name">{name}</h4>
            <h5>Product Quantity: {quantity}</h5>
            <button className="addBtn">Remove</button>
        </div>
    );
};

export default ReviewItem;