import React, {useContext} from 'react';
import {Context} from "../../index";
import './ProductCharacteristics.css'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import MySelect from '../Select/Select';

const ProductCharacteristic = ({param}) => {
    return (
                <tbody className='parameters-table-body'>
                <tr className='parametr'>
                        <th className='parametr-title'>
                            {param.title}
                        </th>
                        <th className='parametr-description'>
                            {param.description}
                        </th>
                    </tr>
        </tbody>
          )
};

export default ProductCharacteristic;