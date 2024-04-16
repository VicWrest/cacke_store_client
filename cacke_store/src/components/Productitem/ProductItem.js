import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import TypeItem from '../TypeItem/TypeItem.js';
import "./TypeBar.css"

const ProductItem = observer(({product, ProductItem}) => {
    return (
        <div 
        className='product-item'
        >
            <div className='procuct-img' style={{ backgroundImage: `url(${ProductItem.img})`}}>
            </div>
            <div className='type-name'>
                {ProductItem.name}
            </div>
            <div className='price'>{ProductItem.price}</div>
        </div>     
    );
});

export default ProductItem;
