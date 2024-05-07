import { Card, Col, Container, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import {Context} from "../../index";
import './Basket.css'
import { useNavigate } from 'react-router-dom';
import { PRODUCTS_ROUTE } from '../../utils/consts';
import PageRoute from '../../components/PageRoutes/PageRouteBasket/PageRoute';
import BasketWindow from '../../components/BasketWindow/BasketWindow';

const Basket = observer(()=> {
  const {product} = useContext(Context)
  const navigate = useNavigate();
  return (
    <div className='basket'>
      <PageRoute />
      <BasketWindow />
    </div>
  );
})

export default Basket;
