import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carosel from '../../Carosel/Carosel';

const Header = () => {
    return (
        <div>
            <nav>
                {/* <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link> */}
                <>
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>                   
                </>
            </nav>
            <Carosel></Carosel>
        </div>
    );
};

export default Header;