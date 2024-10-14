import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import "./Products.css"
import ProductList from '../../components/ProductList/ProductList.js';
import { getProducts } from '../../http/productAPI.js';
import {Context} from "../../index.js";
import { useNavigate, useParams } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts.js';

const Products = observer(() => {
  const {product} = useContext(Context);
  const {typeId} = useParams();
  const history = useNavigate();
  
  useEffect(() => {
    if(!Number(typeId)){
      history(SHOP_ROUTE);
      return;
    }
    getProducts(typeId)
    .then(data => {
      console.log(data)
      product.setProducts(data)
      });
  }, [product.selectedType]);
  
  return (
   <div className='products'>
    <ProductList />
   </div>
  );
})

export default Products;