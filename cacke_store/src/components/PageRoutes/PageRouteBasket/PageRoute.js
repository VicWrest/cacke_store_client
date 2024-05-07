import React, {useContext} from 'react';
import {Context} from "../../../index";
import './PageRoute.css'
import { useNavigate } from 'react-router-dom';
import { PRODUCTS_ROUTE } from '../../../utils/consts';

const PageRoute = () => {
    const {product} = useContext(Context);
    const navigate = useNavigate();
    console.log(product.selectedProduct.name)
    return (
            <div className='go-back'
            onClick={()=>navigate(PRODUCTS_ROUTE+'/'+ product.selectedType.name
            )}>
            <div className='arrow'>&lsaquo;</div>
                    <div className='string'>Вернуться к покупкам</div>
            </div>
          )
};

export default PageRoute;