import React, {useContext} from 'react';
import {Context} from "../../index";
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import MySelect from '../Select/Select';
import ProductCharacteristic from '../ProductCharacteristics/ProductCharacteristics';
import QuantityItem from '../ItemQuantity/ItemQuantity';

const PageRoute = () => {
    const {product, basket} = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className='product-card'>
            <div className='main'>
            <img className='card-img' src={product.selectedProduct.img}/> 
            <div className='buy-block'>
                <div className='short-descript'>
                    Наивкуснейший десерт с натуральными продуктами и по доступной цене
                </div>
                <div className='price'>{product.selectedProduct.price}</div>
                <Button className='add-btns'
                onClick={()=> {basket.addToBasket(product.selectedProduct)}}>
                    Добавить в корзину</Button>
                <hr className='hr'/>
                <div className='korzh'>
                    <select>
                        <option disabled >Выберите тип коржа</option>
                        <option value="val1">Ванильный</option>
                        <option value="val2">Шоколадный</option>
                    </select>
                </div>
            </div>
            </div>
            <div className='descript'>
            Какой праздник без десерта? Конечно, никакой! И взрослые, и дети искренне любят сладости. 
            Но любите ли вы их готовить самостоятельно? 
            Команда ТортоФФ с радостью возьмет на себя все хлопоты, 
            связанные с приготовлением кульминации вашего вечера: авторского торта. 
            Представьте, какие яркие эмоции вы испытаете, когда на Вашем праздничном 
            столе окажется уникальный торт на заказ от кондитерской фабрики ТортоФФ.
            </div>
            <div className='parameters'>
                <div className='parameters-string'>Характеристики</div>
                <table className='parameters-table'>
                    {product.parameters.map(el => <ProductCharacteristic param={el} />)}
                </table>
            </div>
        </div>
          )
};

export default PageRoute;