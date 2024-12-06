import React, {useContext, useEffect, useMemo, useState} from 'react';
import './SelectWeight.css'
import { observer } from 'mobx-react-lite';

const SelectWeight = observer(({productItem, updatePrice, changeWeightId}) => {

    const [weightId, setWeightId] = useState(productItem?.weightId || productItem.weights[0].id); 

    useEffect(()=>{
        getPrice(productItem.weights)
    }, [weightId]);
    
    const getPrice = (weights) => {
        const arr = weights.find(el => {
            console.log(el.id, weightId)
            console.log(el.id == weightId)
            return el.id == weightId
        });
        console.log(arr)
        const price = arr.price;
        changeWeightId(weightId)
        updatePrice(price)
        return
    };

    return (
        <div className='weight'>
            <select value={weightId} onChange={(e) => setWeightId(e.target.value)}>
                <option disabled >Выберите вес</option>
                {productItem.weights.map(el => <option key={el.id} value={el.id}>{el.value}</option>)}
            </select>
        </div>
        )
})

export default SelectWeight;