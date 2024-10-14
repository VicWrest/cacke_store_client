import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index.js";
import { createNewProduct, getTypes } from '../../http/productAPI.js';
import { observer } from 'mobx-react-lite';

//show - параметр который отвечает за то виден компонент или нет
//onHide - функция, которая скрфвает модальное окно
const CreateProduct = observer(({show, onHide}) => {
    const {product, errors} = useContext(Context)
    useEffect(()=> {
        getTypes().then(types => product.setTypes(types))
        .catch(err => errors.setError(err))
    }, []);
    const [info, setInfo] = useState([])
    const [weight, setWeight] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [type, setType] = useState('')
    const [file, setFile] = useState({})
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    
    const addProp = (curState,updateFunction) =>{
        updateFunction([...curState, {title: '', description: '', number: Date.now()}])
    }
    const removeProp = (number, curState, updateFunction) =>{
        updateFunction(curState.filter(el => el.number !== number))
    }
    const changeProp = (key, value, number, curState, updateFunction) => {
        updateFunction(curState.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    
    const addNewProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', `${description}`)
        formData.append('shortdescription', `${shortDescription}`)
        formData.append('img', file)
        formData.append('typeId', product.selectedType.id)
        formData.append('info', JSON.stringify(info))
        formData.append('weight', JSON.stringify(weight))
        createNewProduct(formData)
        .then((products)=>{
            //product.setProducts(products); думаю нет в жтом смысла
            onHide();
            window.location.reload();
        })
        .catch(err => errors.setError(err))
        return;
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить продукт
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{product.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.types.map(type =>
                                <Dropdown.Item
                                    onClick={(e) => product.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название продукта"
                    />
                    <Form.Control
                        onChange={e => setShortDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите краткое описание продукта"
                    />
                    <Form.Control
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите подробное описание  продукта"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                     <hr/>
                     <div class="btn-group-vertical">
                     <Button
                        variant={"outline-dark"}
                        onClick={() => addProp(info, setInfo)}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeProp('title', e.target.value, i.number, info, setInfo)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeProp('description', e.target.value, i.number, info, setInfo)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeProp(i.number, info, setInfo)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}

                    <Button
                        className="mt-3"
                        variant={"outline-dark"}
                        onClick={() => addProp(weight, setWeight)}
                    >
                        Добавить вес и цену
                    </Button>
                    {weight.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeProp('title', e.target.value, i.number, weight, setWeight)}
                                    placeholder="Введите вес"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeProp('description', Number(e.target.value), i.number, weight, setWeight)}
                                    placeholder="Введите цену"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeProp(i.number, weight, setWeight)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                     </div>
                     
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={()=>{addNewProduct()}}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateProduct;
