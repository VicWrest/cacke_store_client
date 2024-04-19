import React from 'react';
import {observer} from "mobx-react-lite";
import "./ProductItem.css"
import Button from "../Button/Button.js"
import {PRODUCT_ROUTE} from 

const ProductItem = observer(({product, productItem}) => {
const history = useHistory();
    return (
        <div 
        className='product-list'
        onClick={()=> history.push(PRODUCT_ROUTE + '/' + product.id) }>
            <div className='procuct-img' style={{ backgroundImage: `url(${productItem.img})`}}>
            </div>
            <div className="product-item">
                <div className='product-name'>
                {productItem.name}
            </div>
            <div className='price'>{productItem.price}</div>
            <Button className='add-btn'>
                Добавить в корзину
            </Button>
        </div>     
            </div>
            
    );
});

export default ProductItem;
