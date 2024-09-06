import Modal from "react-bootstrap/Modal";
import './ErrorAlert.css';
//крайнее сделал модальное окно, сделать другой шрифт у надписи
//и такое же добавить если добавить в корзину вызывается из productCard

//show - параметр который отвечает за то виден компонент или нет
//onHide - функция, которая скрфвает модальное окно
const ErrorAlert = ({show, onHide, error, isFallback}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            onClick={() => onHide()}
        >
            <Modal.Body>
            <div class="alert alert-danger text-center" role="alert">
                <div className="error-alert">
                    <div dangerouslySetInnerHTML={{__html: error?.data}} />
                    {isFallback && <p className="recess-str">Кликните для перезагрузки страницы</p>}
                </div>
            </div>
                
            </Modal.Body>
        </Modal>
    );
};

export default ErrorAlert;