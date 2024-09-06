import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index.js";
import { createNewKorzh, createNewProduct, deleteKorzhById, getKorzhType, getTypes } from '../../http/productAPI.js';
import { observer } from 'mobx-react-lite';

const EditKorzh = observer(({show, onHide}) => {
    const {product, errors} = useContext(Context)

    useEffect(()=> {
        getKorzhType().then(korzhs => product.setKorzh(korzhs))
    }, []);

    const [korzh, setKorzh] = useState([]);
    
    const addInfo = () =>{
        setKorzh([...korzh, {name: '', number: Date.now()}])
    }
    const removeInfo = (number) =>{
        setKorzh(korzh.filter(el => el.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setKorzh(korzh.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const addNewKorzh = () => {
        const formData = new FormData()
        formData.append('korzhs', JSON.stringify(korzh))
        createNewKorzh(formData)
        .then((korzhs)=>{
            product.setKorzh(korzhs)
            onHide();
            window.location.reload();
        })
        .catch(err => errors.setError(err))
        return
    }

    const deleteKorzh = (id) =>{
        deleteKorzhById({id})
        .then(korzhs => product.setKorzh(korzhs))
        .catch(err => errors.setError(err))
        return
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Редактирование коржей
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {product.korzh.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.name}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => deleteKorzh(i.id)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                     <Button
                        className="mt-4"
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новый корж
                    </Button>
                    {korzh.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.name}
                                    onChange={(e) => changeInfo('name', e.target.value, i.number)}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={()=>{addNewKorzh()}}>Добавить коржи</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default EditKorzh;
