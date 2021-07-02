import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
    
    useEffect(() =>{
        //cart data
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        }, [])
        setCart(cartProducts);
    })
    return (
        <div>
            <h1>Ordered Items:{cart.length}</h1>
            {
                cart.map(pd =><ReviewItem product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;