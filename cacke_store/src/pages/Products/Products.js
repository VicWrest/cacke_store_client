import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import ProductList from '../../components/ProductList/ProductList.js';

const products = observer(() => {
  return (
     <div>
       <ProductList />
     </div>
  );
})

export default products;