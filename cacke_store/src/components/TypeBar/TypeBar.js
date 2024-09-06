import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import TypeItem from '../TypeItem/TypeItem.js';
import "./TypeBar.css"
import { getTypes } from '../../http/productAPI.js';

const TypeBar = observer(() => {
    const {product} = useContext(Context);
    return (
            <div className='typeBar'>
                {product.types.map(type => {
                    return <TypeItem
                    key={type.id} 
                    className='item' 
                    type={type}/>
                }
                   
            )}
            </div>
            
    );
});

export default TypeBar;