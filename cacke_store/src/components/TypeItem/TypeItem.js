
import React from 'react';
import {observer} from "mobx-react-lite";
import "./TypeItem.css"
import Button from "../Button/Button.js"
import { PRODUCTS_ROUTE, PRODUCT_ROUTE } from '../../utils/consts.js';
import {useNavigate} from "react-router-dom";

//productItem элемент массива products
//product - контекст
const ProductItem = observer(({product, type}) => {
const history = useNavigate()
    return (
        <div 
            className='type-item'
            onClick={()=> {
                history(PRODUCTS_ROUTE + '/type/'); 
                product.setSelectedType(type);
                return;}}>
                <div className='type-img' style={{ backgroundImage: `url(${type.img})`}}></div>
                <div className='type-name'>
                    {type.name}
                </div>    
            </div>
    );
});

export default ProductItem;






// import React, {useContext} from 'react';
// import {observer} from "mobx-react-lite";
// import {Context} from "../../index";
// import {Card, Row, Col} from "react-bootstrap";
// import "./TypeItem.css"

// const TypeItem = observer(({type, product}) => {
//     return (
//             <div 
//             className='type-item'
//             onClick={()=> product.setSelectedType(type)}
//             >
//                 <div className='type-img' style={{ backgroundImage: `url(${type.img})`}}>
//                 </div>
//                 <div className='type-name'>
//                     {type.name}
//                 </div>    
//             </div>
                
//         )}
//     );

// export default TypeItem;