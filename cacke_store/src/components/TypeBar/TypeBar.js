import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import TypeItem from '../TypeItem/TypeItem.js';
import "./TypeBar.css"
import ProductItem from '../TypeItem/TypeItem.js';

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    return (
            <div className='typeBar'>
                {product.types.map(type => {
                    return <ProductItem
                    key={type.id} 
                    product={product}
                    className='item' 
                    type={type}/>
                }
                   
            )}
            </div>
            
    );
});

export default TypeBar;