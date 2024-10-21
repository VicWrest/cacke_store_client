import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../../components/modals/CreateType";
import CreateProduct from '../../components/modals/CreateProduct';
import EditKorzh from '../../components/modals/editKorzh';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    const [korzhVisible, setKorzhVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить категорию продукта
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setProductVisible(true)}
            >
                Добавить продукт
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setKorzhVisible(true)}
            >
                Редактировать типы коржей
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
            <EditKorzh show={korzhVisible} onHide={() => setKorzhVisible(false)}/>
        </Container>
    );
};

export default Admin;