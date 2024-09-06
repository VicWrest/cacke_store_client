import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import "./ProductItem.css"
import Button from "../Button/Button.js"
import { PRODUCT_ROUTE } from '../../utils/consts.js';
import {useNavigate, useParams} from "react-router-dom";
import CompleteAddProduct from '../modals/completedAddProduct.js';
import DeleteItem from '../UI/deleteImg/DeleteItem.js';
import { deleteAllProducts, deleteProduct, deleteProductById } from '../../http/productAPI.js';

//productItem элемент массива products
//product - контекст
const ProductItem = observer(({product, productItem}) => {
const history = useNavigate();
const {basket, user, errors} = useContext(Context);
const {typeId} = useParams();
const [strVisible, setStrVisible] = useState(false);
const [korzhId, setKorzhId] = useState(product.korzh[0].id);

const deleteProductById = () => {
    const params = {typeId, productId: productItem.id}
    deleteProduct(params)
    .then(products => product.setProducts(products))
    .catch(err => errors.setError(err))
}

    return (
        <div className='product-item'>
            <div 
            className='product-cart'
            onClick={()=> {
                history(PRODUCT_ROUTE + '/' + typeId + '/' + productItem.id); 
                product.setSelectedProduct(productItem);
                return;}}>
                <div className='product-img' style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL+productItem.img})`}}>
                    {user.isAdmin && <DeleteItem 
                    onClick={(event) => {
                        event.stopPropagation();
                        return deleteProductById();
                        }}
                    />}
                </div>
                <div className='product-name'>
                    {productItem.name}
                </div>    
                <div className='price'>{productItem.weight[0].price}</div>
            </div>
            <Button 
            className='add-btn' 
            onClick={()=> {
                basket.addToBasket({productItem, korzhId})
                setStrVisible(true);
            }}
            >
                    Добавить в корзину
            </Button>
            <div className='modal-complete-add-product'>
                <CompleteAddProduct show={strVisible} onHide={()=> setStrVisible(false)}/>
            </div>
        </div>
        
    );
});

export default ProductItem;