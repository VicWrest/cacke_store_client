import React, {useContext} from 'react';
import {Context} from "../../../index";
import './PageRoute.css'
import { useNavigate } from 'react-router-dom';
import { PRODUCTS_ROUTE, SHOP_ROUTE } from '../../../utils/consts';

const PageRoute = () => {
    const {product} = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className='page-route'>
            <div 
            className='main-page'
            onClick={()=>navigate(SHOP_ROUTE
            )}>Главная</div>
            <div className='arrow'>&rsaquo;</div>
            <div className='type-page' onClick={()=>navigate(PRODUCTS_ROUTE + '/' + product.selectedType.id)}>
                {product.selectedType.name}
            </div>
            {product.selectedType.name?
            <div className='arrow'>&rsaquo;</div>:null
            }
            <div className='product-page'>{product.selectedProduct.name}</div>
        </div>
          )
};

export default PageRoute;