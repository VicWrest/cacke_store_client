import React, {useContext} from 'react';
import {Context} from "../../index";
import { ADMIN_ROUTE, BASKET_ROUTE, REWIEW_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import {useNavigate} from "react-router-dom";
import { observer } from 'mobx-react-lite';
import './NavBar.css'
import MobileMenu from '../Mobile-menu/Mobile-menu';
import DesktopMenu from '../Desktop-menu/Desktop-menu';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
    return (
        <div className='navbar'>
            <div className='home-work-string' onClick={()=>history(SHOP_ROUTE)} >
            Домашняя мастерская десертов
            </div>
            {user.isAdmin? 
                <DesktopMenu />
                :
                <MobileMenu  />
            }
            </div>
    )
});

        
 

export default NavBar;