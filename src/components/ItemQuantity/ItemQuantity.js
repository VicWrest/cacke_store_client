import React, {useContext, useEffect, useRef, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import "./ItemQuantity.css"
import rectangle from '../../assets/Rectangle.png'
import btnLess from '../../assets/btn-less.png'
import btnMore from '../../assets/btn-more.png'
import { decrement, increment, updateProductData, updateProductQuantity } from '../../http/productAPI.js';

const QuantityItem = observer(({product, setQuant}) => {
    const {basket, errors} = useContext(Context)
    const [quantity, setQuantity] = useState(product.quantity);
    const incr = (body) => {
        increment(body).then(products => basket.setAllProducts(products))
        .catch(err => errors.setError(err))
    }

    const decr = (body) => {
        if(quantity - 1 > 0){
            decrement(body).then(products => basket.setAllProducts(products))
            .catch(err => errors.setError(err))
        }
        return;
        } 

    return (
        <div className='quantity-product-cell'>
            {/* <div className='quantity-rectangle' style={{ backgroundImage: `url(${rectangle})`}}> */}
            <div className='quantity-rectangle'>
                <div className='btn-less' style={
                    { backgroundImage: `url(${btnLess})`}}
                    onClick={() => {
                        setQuantity(quantity - 1 > 0? quantity - 1 : quantity)
                        setQuant(quantity);
                        decr({productId: Number(product.productId), korzhId: product.korzhId, weightId: product.weightId})
                        return
                        }} ></div>
                <div className='quantity-text'>{quantity}</div>
                <div className='btn-more' style={{ backgroundImage: `url(${btnMore})`}}
                onClick={() => {
                    setQuantity(quantity + 1);
                    setQuant(quantity);
                    incr({productId: Number(product.productId), korzhId: product.korzhId, weightId: product.weightId});
                    return
                    }}></div>
            </div>
        </div>                    
    );
});

export default QuantityItem;