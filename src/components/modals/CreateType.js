import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import { createNewType } from '../../http/productAPI.js';
import {Context} from "../../index.js";

//show - параметр который отвечает за то виден компонент или нет
//onHide - функция, которая скрфвает модальное окно
const CreateType = ({show, onHide}) => {
    const {errors, product} = useContext(Context)
    const [file, setFile] = useState({})
    const [value, setValue] = useState('')

    const addNewType = () => {
        const formData = new FormData()
        formData.append('name', value)
        formData.append('img', file)
        createNewType(formData).then(data => {
            product.setTypes(data)
            setValue('')
            onHide()
        })
        .catch(err => errors.setError(err))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название категории"}
                    />
                </Form>
                <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={()=>addNewType()}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
