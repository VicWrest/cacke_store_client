import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import "./ItemQuantity.css"
import rectangle from '../../assets/Rectangle.png'
import btnLess from '../../assets/btn-less.png'
import btnMore from '../../assets/btn-more.png'

const QuantityItem = observer(({product}) => {
    const {basket} = useContext(Context)
    return (
        <div className='quantity-product-cell'>
            <div className='quantity-rectangle' style={{ backgroundImage: `url(${rectangle})`}}>
                <div className='btn-less' style={
                    { backgroundImage: `url(${btnLess})`}}
                    onClick={() => basket.lessQuantity(product)} ></div>
                <div className='quantity-text'>{product.quantity}</div>
                <div className='btn-more' style={{ backgroundImage: `url(${btnMore})`}}
                onClick={() => basket.moreQuantity(product)}></div>
            </div>
        </div>                    
    );
});

export default QuantityItem;