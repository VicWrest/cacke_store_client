import React, { useContext } from 'react';
import {observer} from "mobx-react-lite";
import "./TypeItem.css"
import { PRODUCTS_ROUTE} from '../../utils/consts.js';
import {useNavigate} from "react-router-dom";
import DeleteItem from '../UI/deleteImg/DeleteItem.js';
import {Context} from "../../index.js";
import { deleteTypeById } from '../../http/productAPI.js';

//productItem элемент массива products
//product - контекст
const TypeItem = observer(({type}) => {
const {user, product, errors} = useContext(Context)
const history = useNavigate();

const deleteType = () => {
    deleteTypeById(type.id)
    .then(types => product.setTypes(types))
    .catch(err => errors.setError(err))
}
    return (
        <div 
            className='type-item'
            onClick={()=> {
                history(PRODUCTS_ROUTE + '/' + type.id); 
                product.setSelectedType(type);
                return;}}>
                <div className='type-img' style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL+type.img})`}}>
                    {user.isAdmin && <DeleteItem onClick={(event) => {
                        event.stopPropagation();
                        return deleteType();
                        }} />}
                </div>
                <div className='type-name'>
                    {type.name}
                </div>    
            </div>
    );
});

export default TypeItem;



