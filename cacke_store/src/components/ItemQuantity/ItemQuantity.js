import React, {useContext, useEffect, useRef, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import "./ItemQuantity.css"
import rectangle from '../../assets/Rectangle.png'
import btnLess from '../../assets/btn-less.png'
import btnMore from '../../assets/btn-more.png'
import { updateProductData, updateProductQuantity } from '../../http/productAPI.js';

const QuantityItem = observer(({product, setQuant}) => {
    const {basket} = useContext(Context)
    const [quantity, setQuantity] = useState(product.basket_product.quantity);
    const changeQuantity = useRef(false);
    
    useEffect(() => {
        if(changeQuantity.current){
            updateProductData({
                id: product.basket_product.id, 
                quantity, 
                korzhId: product.basket_product.korzhId,
                weightId: product.basket_product.weightId
            })
            .then(products => basket.setAllProducts(products))
        }
        changeQuantity.current = true;
        return;
    }, [quantity]);

    return (
        <div className='quantity-product-cell'>
            <div className='quantity-rectangle' style={{ backgroundImage: `url(${rectangle})`}}>
                <div className='btn-less' style={
                    { backgroundImage: `url(${btnLess})`}}
                    onClick={() => {
                        setQuantity(quantity - 1 > 0? quantity - 1 : quantity)
                        setQuant(quantity);
                        return
                        }} ></div>
                <div className='quantity-text'>{quantity}</div>
                <div className='btn-more' style={{ backgroundImage: `url(${btnMore})`}}
                onClick={() => {
                    setQuantity(quantity + 1);
                    setQuant(quantity);
                    return
                    }}></div>
            </div>
        </div>                    
    );
});

export default QuantityItem;