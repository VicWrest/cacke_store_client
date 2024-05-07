import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ADMIN_ROUTE, BASKET_ROUTE, REWIEW_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const {user} = useContext(Context)
    const history = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Домашняя мастерская 
            десертов</NavLink>
            {user.isAdmin ?
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button
                        variant={"outline-light"}
                        onClick={() => history(ADMIN_ROUTE)}
                    >
                        Админ панель
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button className="mr-3" variant={"outline-light"} onClick={()=>history(REWIEW_ROUTE)}>Отзывы</Button>
                    <Button variant={"outline-light"} onClick={()=>history(BASKET_ROUTE)}>Корзина</Button>
                </Nav>
            }
        </Container>
    </Navbar>

          )
};

export default NavBar;