import React from 'react';

// Components
import Logo from './Logo/Logo';
import SearchPage from './SearchPage/SearchPage'
import './Header.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (
        <>
            {/* <div className='header'> */}
                {/* <div className='brand'>
                    <Logo />
                </div>
                <div className="searchbar">
                    <SearchPage />
    </div> */}
                
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="ligth" variant="dark">
                    <Navbar.Brand href="#home"> 
                        <div className='brand'>
                            <Logo />
                        </div>
                    </Navbar.Brand>
                    <div className="searchbar">
                            <SearchPage />
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#pricing">Home</Nav.Link>
                        <Nav.Link href="#features">Explore</Nav.Link>
                        <Nav.Link href="#pricing">Profile</Nav.Link>
                        <NavDropdown title="Settings" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Somethin more</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">Notifications</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Nueva Publicacion
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            {/* </div> */}
        </>
    )
};

export default Header;
