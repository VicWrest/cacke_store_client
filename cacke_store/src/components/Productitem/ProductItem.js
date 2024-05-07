import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import "./ProductItem.css"
import Button from "../Button/Button.js"
import { PRODUCT_ROUTE } from '../../utils/consts.js';
import {useNavigate} from "react-router-dom";

//productItem элемент массива products
//product - контекст
const ProductItem = observer(({product, productItem}) => {
const history = useNavigate();
const {basket} = useContext(Context);
    return (
        <div className='product-item'>
            <div 
            className='product-cart'
            onClick={()=> {
                history(PRODUCT_ROUTE + '/type/' + productItem.id); 
                product.setSelectedProduct(productItem);
                return;}}>
                <div className='product-img' style={{ backgroundImage: `url(${productItem.img})`}}></div>
                <div className='product-name'>
                    {productItem.name}
                </div>    
                <div className='price'>{productItem.price}</div>
            </div>
            <Button className='add-btn' onClick={()=> {basket.addToBasket(productItem)
                }}>
                    Добавить в корзину
                </Button>
        </div>
        
    );
});

export default ProductItem;