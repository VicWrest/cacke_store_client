import React, {useContext, useMemo, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import "./PlaceOrder.css"
import Button from "../Button/Button.js"
import SelectDate from '../SelectDate/SelectDate.js'
import { createOrder, deleteAllProducts } from '../../http/productAPI.js';
import PhoneField from '../PhoneField/PhoneField.js';
import { useTelegram } from '../../hooks/useTelegram.js';

//productItem элемент массива products
//product - контекст
const PlaceOrder = observer(() => {
const {basket, errors} = useContext(Context);
const {queryId} = useTelegram();

const placeOrder = () => {
    const products = basket.addProducts;
    const date = basket.date;
    const summa = basket.totalPrice;
    const phone = basket.phone;
    createOrder({products, date, summa, phone, queryId}).then(order => {
        basket.setAllProducts = null;
        console.log(order)
    })
    .catch(err => errors.setError(err))
}

    return (
        <div className='line'>
                <SelectDate />
                <PhoneField  />
                <div className='placing-in-order'> 
                    <div className='itogo' >{queryId}</div>
                    <div className='summa'>{basket.totalPrice}</div>
                    <Button 
                    className='place-order-btn'
                    onClick={(e) => placeOrder()} > 
                    Оформить заказ
                    </Button>
                </div>
         </div>
        
    );
});

export default PlaceOrder;