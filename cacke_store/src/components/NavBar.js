import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { SHOP_ROUTE } from '../utils/consts';

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Домашняя мастерская 
            десертов</NavLink>
            {user.isAdmin ?
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button
                        variant={"outline-light"}
                        onClick={() => {}}
                    >
                        Админ панель
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"} onClick={{}}>Корзина</Button>
                </Nav>
            }
        </Container>
    </Navbar>

          )
};

export default NavBar;