import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import "./BasketProductItem.css"
import QuantityItem from '../ItemQuantity/ItemQuantity.js';
import { deleteProductById, getKorzhType, updateProductData, updateProductKorzh } from '../../http/productAPI.js';
import DeleteItem from '../UI/deleteImg/DeleteItem.js';
import SelectWeight from '../SelectWeight/SelectWeight.js';

const BasketProductItem = observer(({productItem}) => {
    const {basket, product, errors} = useContext(Context);
    const [korzhId, setKorzhId] = useState(productItem.basket_product.korzhId);
    const [weightId, setWeightId] = useState(productItem.basket_product.weightId);
    const [weight, setWeight] = useState(productItem.weight);
    const [price, setPrice] = useState(productItem.basket_product.weight.price);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(productItem.basket_product.quantity);

    const changeKorzh = useRef(false);

    useEffect(() => {
        if(changeKorzh.current){
            updateProductData({id: productItem.basket_product.id, korzhId, weightId: Number(weightId)})
            .then(products => basket.setAllProducts(products))
        }
        changeKorzh.current = true;
        return;
    }, [korzhId, weightId]);

    const getTotalPrice = () => {
        return price * quantity
    }

    const getPrice = useMemo(() => getTotalPrice, [quantity, price])
    const deleteProduct = (productId) =>{
        deleteProductById(productId)
        .then((products) => {
            basket.setAllProducts(products);
        })
        .catch(err => errors.setError(err))
    }

    return (
        <tbody className='product-item-basket'>
                <tr className='product-item-basket'>
                        <th className='product-in-basket'>
                                <div className='product-in-basket-img' style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL+productItem.img})`}}></div>
                                <div className='name-and-korzh'>
                                <div className='product-name-in-basket'>{productItem.name}</div>
                                <SelectWeight productItem={productItem} changeWeightId={setWeightId} updatePrice={setPrice} />
                                <div className='korzh'>
                                    <select value={productItem.basket_product.korzhId} onChange={(e) => setKorzhId(e.target.value)}>
                                        <option disabled >Выберите тип коржа</option>
                                        {product.korzh.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
                                    </select>
                                </div>
                                </div>
                               
                        </th>
                        <th className='quantity-th'>
                            <QuantityItem className='quant-item' setQuant={setQuantity} product={productItem}/>
                        </th>
                        <th className='product-price'>{price * productItem.basket_product.quantity}</th>
                        <th className='deleteProduct'>
                            <DeleteItem onClick={()=> deleteProduct(productItem.basket_product.id)} />
                        </th>
                    </tr>
        </tbody>
    );
});

export default BasketProductItem;