import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Context} from "../../index";
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { addProductToBasket, getKorzhType } from '../../http/productAPI';
import CompleteAddProduct from '../modals/completedAddProduct';
import { observer } from 'mobx-react-lite';
import ProductCharacteristic from '../ProductCharacteristics/ProductCharacteristics';
import SelectWeight from '../SelectWeight/SelectWeight';

const ProductCard = observer(({productItem}) => {
    const {basket, product} = useContext(Context);
    const navigate = useNavigate();

    const [korzhId, setKorzhId] = useState(1);
    const [weightId, setWeightId] = useState(productItem.weight[0].id);
    const [strVisible, setStrVisible] = useState(false)
    const [price, setPrice] = useState(productItem.weight[0].price)
    
    useEffect(()=>{
        getKorzhType()
        .then(data => product.setKorzh(data))
    }, [])

    const updatePrice = price => {
        setPrice(price)
    }

    return (
        <div className='product-card'>
            <div className='main'>
            <img className='card-img' src={`${process.env.REACT_APP_API_URL+product.selectedProduct.img}`}/> 
            <div className='buy-block'>
                <div className='short-descript'>
                   {productItem.shortdescription}
                </div>
                <div className='price'>{price}</div>
                <Button className='add-btns1'
                onClick={()=>{
                    basket.addToBasket(productItem, korzhId, weightId)
                    setStrVisible(true);
                } 
                }>
                    Добавить в корзину
                </Button>
                <hr className='hr'/>
                <SelectWeight productItem={productItem} changeWeightId={setWeightId} updatePrice={updatePrice} />
                <div className='korzh'>
                    <select onChange={(e) => setKorzhId(e.target.value)}>
                        <option disabled >Выберите тип коржа</option>
                        {product.korzh.map(el => <option value={el.id}>{el.name}</option>)}
                    </select>
                </div>
            </div>
            </div>
            <div className='descript'>{productItem.description}</div>
            <div className='parameters'>
                <div className='parameters-string'>Характеристики</div>
                <table className='parameters-table'>
                    {productItem.info.map(el => <ProductCharacteristic key={el.id} param={el} />)}
                </table>
            </div>
            <div className='modal-complete-add-product'>
                <CompleteAddProduct show={strVisible} onHide={()=> setStrVisible(false)}/>
            </div>
        </div>
          )
})

export default ProductCard;