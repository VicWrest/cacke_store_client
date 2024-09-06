import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import {Context} from "../../index";
import './Basket.css'
import PageRoute from '../../components/PageRoutes/PageRouteBasket/PageRoute';
import BasketWindow from '../../components/BasketWindow/BasketWindow';
import { getProductsInBasket, getKorzhType  } from '../../http/productAPI';

const Basket = observer(()=> {
  const {basket, product} = useContext(Context)
  useEffect(() => {
    getProductsInBasket()
    .then(products => {
        console.log(products)
          basket.setAllProducts(products)});
        
      }, [])
  return (
    <div className='basket'>
      <PageRoute />
      <BasketWindow />
    </div>
  );
})

export default Basket;
