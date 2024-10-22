import React, { useContext, useRef, useState } from 'react';
import "./Desktop-menu.css"
import { ADMIN_ROUTE, BASKET_ROUTE, REWIEW_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import {Context} from "../../index";
import { useClickOutside } from '../../hooks/useClickOutside';

const DesktopMenu = observer((props) => {
    const {user} = useContext(Context)
    const history = useNavigate()
    const [isOpen, setOpen] = useState();
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if(isOpen){
            setTimeout(() => setOpen(false), 50)
        }
    })
    return (
        <div className='navbar-buttons'>
        <div className='navbar-btns'> 
        <div className='client-navbar-btns'>
            <button className='review-navbar-btn' onClick={()=>history(REWIEW_ROUTE)}>
                Отзывы
            </button>
            <button className='basket-navbar-btn' onClick={()=>history(BASKET_ROUTE)}>
                Корзина
            </button>
        </div>
    </div>
    </div>
    );
});

export default DesktopMenu;