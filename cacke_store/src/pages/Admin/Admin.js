import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
// import CreateBrand from "../components/modals/CreateBrand";
// import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../../components/modals/CreateType";
import CreateProduct from '../../components/modals/CreateProduct';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)

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
            {/* <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/> */}
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
        </Container>
    );
};

export default Admin;