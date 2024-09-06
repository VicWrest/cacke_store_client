import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import { getTypes } from '../../http/productAPI.js';
import {Context} from "../../index.js";
import TypeBar from '../../components/TypeBar/TypeBar.js';
import "./Catalog.css"

const Catalog = observer(() => {
    const {product} = useContext(Context);

    useEffect(()=> {
        getTypes().then(types => product.setTypes(types))
    }, [])

    return (
         <div className='types'>
          <TypeBar />
         </div>
        );
});

export default Catalog;