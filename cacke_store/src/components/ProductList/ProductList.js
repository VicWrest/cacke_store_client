import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import "./ProductList.css"
import ProductItem from '../Productitem/ProductItem.js';

const ProductList = observer(() => {
    const {product} = useContext(Context)
    return (
    <div key={'product-list'}className="product-list">
            {product.products.map(productItem =>
                    <ProductItem
                    key={product.id} 
                    product={product} 
                    productItem={productItem}/>
            )}
            </div>
    );
});

export default ProductList;
