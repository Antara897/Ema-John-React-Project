import React, { useState } from 'react';

const ReviewProduct = (props) => {
    
    const {name,quantity,key,price}=props.product;
    const totalPrice = price*quantity;

    const reviewStyle ={
        borderBottom:'1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '20px',
        marginLeft: '120px'
        
    }
    return (
        <div style={reviewStyle} className='review-item'>
            <h4 className='product-name'>{name}</h4>
             <p>Price: {totalPrice}$</p>
            <p><small>Quantity: {quantity}</small></p>
            <br />
            <button className='main-button' onClick={()=> props.removeHandler(key)}>REMOVE</button>
        </div>
    );
};

export default ReviewProduct;