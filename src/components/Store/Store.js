import React from 'react';
import {useEffect, useState} from 'react';
import Element from '../Element/Element';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

import './Store.css'
import { addToDatabaseCart, getDatabaseCart } from '../utilities/databaseManager';
import products from '../../fakeData/products';


const Store = () => {
   const [cart, setCart]=useState([])

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart);
        const previousCart = productKey.map(existingKey=> {
              const product = products.find(pd=> pd.key === existingKey)
              product.quantity = saveCart[existingKey];
              return product;
            })  
            setCart(previousCart);  
    },[]);

   const handleProduct=(product)=>{

      const toBeAddedKey = product.key;
      const sameProduct = cart.find(pd=> pd.key === toBeAddedKey);
      let count=1;
      let newCart;
      if(sameProduct){
          count = sameProduct.quantity + 1;
          sameProduct.quantity = count;
          const others = cart.filter(pd=> pd.key !== toBeAddedKey);
          newCart = [...others, sameProduct];
      }

      else {
          product.quantity = 1;
          newCart = [...cart, product];

      }
      setCart(newCart);
      addToDatabaseCart(product.key, count);
     
   }

   

   

    return (
        <div className="store-container">
           <div className="product-container">  
            {products.map(product=> <Element showAddToCart={true} key={product.key} h={handleProduct} p={product}></Element>)}
           </div>

           <div className="cart-container">
            <Cart cart={cart}><Link to="/review"> <button className='main-button'>Review Order</button></Link>
        </Cart>
           </div>

        </div>
    );
};

export default Store;