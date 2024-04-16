import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import TypeItem from '../TypeItem/TypeItem.js';
import "./TypeBar.css"

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    return (
            <div className='typeBar'>
                {product.types.map(type => {
                    console.log(type.selectedType)
                    return <TypeItem
                    product={product}
                    className='item' 
                    key={type.id} 
                    type={type}/>
                }
                   
            )}
            </div>
            
    );
});

export default TypeBar;