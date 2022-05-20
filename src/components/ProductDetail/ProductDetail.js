import React from 'react';
import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Element from '../Element/Element';

const ProductDetail = () => {
    const {productKey}=useParams();
    const [prod, setProd]=useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON?fbclid=IwAR3Cp1KcdYClYPFMgXHKF472cS9sEfj7IiJDqkKAO8gHVRS_jdh7dXRX-hE')
        .then(res=> res.json())
        .then(data=> setProd(data))
    }, [])
  const product = prod.find(pd=> pd.key === productKey);
  

    return (
        <div>
            <h1>Your product details!</h1>
             <Element showAddToCart={false} p={product}></Element>
        </div>
    );
};

export default ProductDetail;