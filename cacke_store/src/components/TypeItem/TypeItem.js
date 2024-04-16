import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, Row, Col} from "react-bootstrap";
import "./TypeItem.css"

const TypeItem = observer(({type, product}) => {
    return (
            <div 
            className='type-item'
            onClick={()=> product.setSelectedType(type)}
            >
                <div className='type-img' style={{ backgroundImage: `url(${type.img})`}}>
                </div>
                <div className='type-name'>
                    {type.name}
                </div>    
            </div>
                
        )}
    );

export default TypeItem;