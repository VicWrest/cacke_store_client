import React from 'react';
import "./DeleteItem.css"
import deleteImg from '../../../assets/delete.png';

const DeleteItem = (props) => {
    return (
        <div {...props}
        className='delete-img' 
        style={{ backgroundImage: `url(${deleteImg})`}}>
        </div>
    );
};

export default DeleteItem;


