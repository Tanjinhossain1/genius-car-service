import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log(user)
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className=''>
            <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <img onClick={() => navigate('/home')} width={250} src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            {user && <Nav.Link as={Link} to='/addservice'>Add Service</Nav.Link>}

                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>

                        <Nav>
                            {user &&
                                <div className='d-flex'>
                                    <Nav.Link as={Link} to='/manageservice'>Manage</Nav.Link>
                                    <Nav.Link as={Link} to='/orderhistory'>Order</Nav.Link>
                                </div>
                            }
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            {user?.uid ? <button className='btn btn-dark text-light' onClick={logout}>Log out</button> :
                                <Nav.Link as={Link} to='/login'>
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;