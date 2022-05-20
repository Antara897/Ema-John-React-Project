import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Element.css';
import { Link } from 'react-router-dom';

const Element = (props) => {
    const {name,img,seller,price,stock,key}=props.p || {};


    return (
        <div className="product">
            <div className="images">
            <img src={img} alt="" />
            </div>
            <div className="name">
               <h4 className='product-name'><Link to={"/product/"+key}>{name}</Link></h4>
               <br/>
               <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                {props.showAddToCart && <button className='main-button' onClick={()=> props.h(props.p)}> <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
            </div>
        </div>
    );
};

export default Element;
