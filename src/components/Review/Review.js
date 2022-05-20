import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../utilities/databaseManager';
import products from '../../fakeData/products';
import ReviewProduct from '../ReviewItem/ReviewProduct';
import Cart from '../Cart/Cart';
import './Review.css';
import happyImage from '../../images/giphy.gif';

const Review = () => {
  
   const [cart,setCart] = useState([]);
   const [placeOrdered, setPlaceOrdered] = useState(false);
    console.log(cart);
   
    const removeHandler = (productKey) =>{
          const removeCart = cart.filter(pd=> pd.key !== productKey);
               setCart(removeCart);
               removeFromDatabaseCart(productKey);
        } 
   
    const placeOrderHandler = () =>{
        setCart([]);
        setPlaceOrdered(true);
        processOrder();
    }
   useEffect(()=> {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
         const cartProducts = productKeys.map(key => {
           const product=products.find(pd=> pd.key===key);
           product.quantity = saveCart[key]; 
           return product;
        });

       setCart(cartProducts);

    },[]);
    
    let thankyou;
    if(placeOrdered){
        thankyou = <img src={happyImage} alt="" />
    }

    const thankStyle = {width: '50px',
                        height: '100px',
                        padding: '20px'
    }
   
   return (
        <div className='twin-container'>
            <div className='review-container'>
            {cart.map(pd=> <ReviewProduct key={pd.key} removeHandler={removeHandler}  product={pd}></ReviewProduct>)}
             <span style={thankStyle}>{thankyou}</span>
           </div>

           <div className='cart-container'>
                <Cart cart={cart}><button onClick={placeOrderHandler} className='main-button'>Place Order</button></Cart>
           </div>
        </div>
    );
};

export default Review;