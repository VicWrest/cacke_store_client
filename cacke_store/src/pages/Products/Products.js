import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import "./Products.css"
import ProductList from '../../components/ProductList/ProductList.js';
import ProductPage from '../ProductPage.js';

const Products = observer(() => {
  return (
   <div className='products'>
    <ProductList />
   </div>
  );
})

export default Products;