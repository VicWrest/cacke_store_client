import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import "./ProductList.css"
import ProductItem from '../Productitem/ProductItem.js';

const ProductList = observer(() => {
    const {product} = useContext(Context)
    return (
    <div className="product-list">
            {product.products.map(productItem =>
                    <ProductItem
                    product={product} 
                    key={product.id} 
                    productItem={productItem}/>
            )}
            </div>
    );
});

export default ProductList;
