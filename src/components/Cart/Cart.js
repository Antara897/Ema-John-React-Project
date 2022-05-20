import React from 'react';

import './Cart.css'

const Cart = (props) => {
    const cart = props.cart; 
    console.log(cart);

    const total = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    
    let shipping = 0;

      if(total>70)
    {
        shipping = 0;
    }

    else if(total>0)
    {
        shipping = 4.99;
    }

    const tax = (total/10).toFixed(2);
    const grandTotal = (total+shipping+Number(tax)).toFixed(2);
    
    return (
        <div>
            <h2>Product Summary</h2>
             <p>Items ordered:{cart.length}</p>
             <p>Product Price: {total}</p>
             <p>Tax+Vat: {tax}</p>
             <p>Shipping Cost: {shipping}</p>
             <p>Total Price: {grandTotal}</p>
           {props.children}
           </div>
    );
};

export default Cart;