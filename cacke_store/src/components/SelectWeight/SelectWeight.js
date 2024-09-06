import React, {useContext, useEffect, useMemo, useState} from 'react';
import './SelectWeight.css'
import { observer } from 'mobx-react-lite';

const SelectWeight = observer(({productItem, updatePrice, changeWeightId}) => {

    const [weightId, setWeightId] = useState(productItem?.basket_product?.weightId || productItem.weight[0].id); 

    useEffect(()=>{
        getPrice(productItem.weight)
    }, [weightId]);
    
    const getPrice = (weight) => {
        const price = weight.find(el => el.id == weightId).price;
        changeWeightId(weightId)
        updatePrice(price)
        return
    };

    return (
        <div className='weight'>
            <select value={weightId} onChange={(e) => setWeightId(e.target.value)}>
                <option disabled >Выберите вес</option>
                {productItem.weight.map(el => <option key={el.id} value={el.id}>{el.value}</option>)}
            </select>
        </div>
        )
})

export default SelectWeight;