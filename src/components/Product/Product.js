import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    //console.log(props);
    const {name, img,seller, price, stock} = props.product;
    return (
        <div className ="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <div>
                    <h4 className="product-name">{name}</h4>
                    <p> by {seller}</p>
                    <br/>
                    <p>${price}</p>
                    <p><small>Only {stock} left in stock- order soon!</small></p>
                    <button
                    onClick ={() => props.handleAddProduct(props.product)}
                    className="addBtn"
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Product;