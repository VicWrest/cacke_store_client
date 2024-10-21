import React, {useContext} from 'react';
import {Context} from "../../index";
import { ADMIN_ROUTE, BASKET_ROUTE, REWIEW_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import {useNavigate} from "react-router-dom";
import { observer } from 'mobx-react-lite';
import './NavBar.css'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
    return (
        <div className='navbar'>
            <div className='home-work-string' onClick={()=>history(SHOP_ROUTE)} >
            Домашняя мастерская десертов
            </div>
            <div className='navbar-buttons'>
            {user.isAdmin? 
            <button 
            className='review-navbar-btn'
            onClick={() => history(ADMIN_ROUTE)}>
                Админ панель
            </button>
            :
            <div className='client-navbar-btns'>
                <button className='review-navbar-btn' onClick={()=>history(REWIEW_ROUTE)}>
                        Отзывы
                </button>
                <button className='basket-navbar-btn' onClick={()=>history(BASKET_ROUTE)}>
                Корзина
                </button>
            </div>
            }
        </div>
        </div>
          )
    });

export default NavBar;