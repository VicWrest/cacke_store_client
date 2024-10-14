import PageRoute from "../components/PageRoutes/PageRouteProductCard/PageRoute";
import ProductCard from "../components/ProductCard/ProductCard";
import { getProductById } from "../http/productAPI";
import {Context} from "../index";
import { observer } from "mobx-react-lite";
import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import { PRODUCTS_ROUTE, SHOP_ROUTE } from "../utils/consts";

const ProductPage = observer(()=> {
  const {product} = useContext(Context);
  //const [productById, setProductById] = useState({});
  const {typeId, productId} = useParams();
  const history = useNavigate();

  useEffect(() => {
  getProductById(productId)
  .then(data => {
     product.setProductById([data])
  });
    
    if(!Number(productId) && !Number(typeId) ||
      Number(productId) && !Number(typeId)
  ){
      history(SHOP_ROUTE);
      return;
    }
    if(!Number(productId) && Number(typeId)){
      history(PRODUCTS_ROUTE + '/' + typeId);
      return;
    }
  }, []);

  return (
    <div>
      <PageRoute />
      {
        product.productById.map(el => <ProductCard productItem={el}/>)
      }
      
    </div>
   
  );
})

export default ProductPage;
