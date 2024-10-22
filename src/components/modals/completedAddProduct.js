import Modal from "react-bootstrap/Modal";
import './completedAddProduct.css';
import { useEffect } from "react";

const CompleteAddProduct = ({show, onHide}) => {
    useEffect(()=> {
        setTimeout(onHide, 3000)
    })
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Body>
                <div className='product-add-str'>
                    Товар успешно добавлен в корзину
                </div>
                
            </Modal.Body>
        </Modal>
    );
};

export default CompleteAddProduct;
