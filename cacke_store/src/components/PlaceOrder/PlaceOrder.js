import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index.js";
import "./PlaceOrder.css"
import Button from "../Button/Button.js"
import { PRODUCT_ROUTE } from '../../utils/consts.js';
import {useNavigate} from "react-router-dom";
import SelectDate from '../SelectDate/SelectDate.js'

//productItem элемент массива products
//product - контекст
const PlaceOrder = observer(() => {
const {basket} = useContext(Context);
    return (
        <div className='line'>
                <SelectDate />
                <div className='placing-in-order'> 
                    <div className='itogo' >Итого</div>
                    <div className='summa'>{basket.totalPrice}</div>
                    <Button className='place-order-btn' > Оформить заказ</Button>
                </div>
         </div>
        
    );
});

export default PlaceOrder;