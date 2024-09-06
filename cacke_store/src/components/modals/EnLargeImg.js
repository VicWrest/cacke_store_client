import Modal from "react-bootstrap/Modal";
import './EnLargeImg.css';

//show - параметр который отвечает за то виден компонент или нет
//onHide - функция, которая скрфвает модальное окно
const EnLargeImg = ({show, onHide, img}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Body>
                <div className='div-large-img' >
                    <img className='large-img' src={img}></img>
                </div>
                
            </Modal.Body>
        </Modal>
    );
};

export default EnLargeImg;
