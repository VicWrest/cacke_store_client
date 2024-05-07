import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import "./BasketProductItem.css"
import rectangle from '../../assets/Rectangle.png'
import btnLess from '../../assets/btn-less.png'
import btnMore from '../../assets/btn-more.png'
import QuantityItem from '../ItemQuantity/ItemQuantity.js';
import deleteImg from '../../assets/delete.png';

const BasketProductItem = observer(({product}) => {
    const {basket} = useContext(Context)
    return (
        <tbody className='product-item-basket'>
                <tr className='product-item-basket'>
                        <th className='product-in-basket'>
                                <div className='product-in-basket-img' style={{ backgroundImage: `url(${product.img})`}}></div>
                                <div className='product-name-in-basket'>{product.name}</div>
                        </th>
                        <th className='quantity-th'>
                            <QuantityItem product={product}/>
                        </th>
                        <th className='product-price'>{product.price * product.quantity}</th>
                        <th className='deleteProduct'>
                            <div 
                            className='delete-img' 
                            style={{ backgroundImage: `url(${deleteImg})`}}
                            onClick={()=> basket.removeAdBasket(product)}>
                                
                            </div>
                        </th>
                    </tr>
        </tbody>
    );
});

export default BasketProductItem;