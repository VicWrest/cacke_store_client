import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Container, Form} from "react-bootstrap";
import {Context} from "../../index.js";
import { createNewReview } from '../../http/reviewAPI.js';

const CreateReview = ({show, onHide}) => {
    const {review, errors} = useContext(Context);

    const initalValues = {
        name: 'Пользователь предпочел скрыть свои данные', 
        comment: '',
        isAnonim: false,
        anonimStr: 'Пользователь предпочел скрыть свои данные',
        file: {}
    };

    const [name, setName] = useState(initalValues.name);
    const [comment, setComment] = useState(initalValues.comment)
    const [isAnonim, setAnonim] = useState(initalValues.isAnonim)
    const [anonimStr, setAnonimStr] = useState(initalValues.anonimStr)
    const [file, setFile] = useState(initalValues.file);

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const addNewReview = () => {
        const formData = new FormData();
        const username = isAnonim? anonimStr : name;
        formData.append('authorName', `${username}`);
        formData.append('description', `${comment}`);
        formData.append('img', file)
        createNewReview(formData).then(async response => {
            console.log(response)
            await review.addReviews(response);
            setName(initalValues.name);
            setComment(initalValues.comment);
            setAnonim(initalValues.isAnonim);
            setFile(initalValues.file);
        })
        .catch(err => {
            return errors.setError(err);
        })
        return onHide;
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            key={review.reviews[0]?.id}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Новый отзыв
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Form.Label className='ml-2'>Добавьте фотографию</Form.Label>
                    <Form.Control
                        className="mt-1"
                        type="file"
                        onChange={selectFile}
                    />

                    <Form.Control
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите имя"
                    />
                    <Form>
                    <Form.Check
                        type="switch"
                        checked={isAnonim}
                        onChange={e => setAnonim(!isAnonim)}
                        id="custom-switch"
                        label="Оставить отзыв анонимно"
                    />
                    </Form>
                    <Form.Control
                        onChange={e => setComment(e.target.value)}
                        className="mt-3"
                        placeholder="Общее впечатление"
                    />
                     <hr/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={()=>{
                    addNewReview()
                    onHide()
                    }}>
                        Добавить
                    </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateReview;
