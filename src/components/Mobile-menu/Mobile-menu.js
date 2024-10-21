import React, { useContext, useState } from 'react';
import "./Mobile-menu.css"
import menuButton from '../../assets/menu-button.png';
import { ADMIN_ROUTE, BASKET_ROUTE, REWIEW_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import {Context} from "../../index";

const MobileMenu = observer((props) => {
    const {user} = useContext(Context)
    const history = useNavigate()
    const [isOpen, setOpen] = useState();
    return (
        <div className='mobile-menu'>
            <nav className={`navbar-nav ${isOpen? "active" : ''}`}>
                <ul className='navbar-nav-list'>
                    {user.isAdmin && 
                        <button 
                        className='admin-navbar-btn'
                        onClick={() => history(ADMIN_ROUTE)}>
                            Админ панель
                        </button>
                    }
                    <button className='review-navbar-btn' onClick={()=>history(REWIEW_ROUTE)}>
                        Отзывы
                    </button>
                    <button className='basket-navbar-btn' onClick={()=>history(BASKET_ROUTE)}>
                        Корзина
                    </button>
                </ul>
            </nav>
            <div {...props}
            className='menu-button'
            onClick={() => setOpen(!isOpen)}
            style={{ backgroundImage: `url(${menuButton})`}}>
            </div>
        </div>
    );
});

export default MobileMenu;