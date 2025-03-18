import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logoimg from '../assets/logo.png';

const Header = () => {
    return (
        <header className='header-sec'>
            <Navbar expand="lg" className="header_sec">
                <Container>
                    <Navbar.Brand href="#"><img src={Logoimg} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className='navbar-collapse_in'>
                            <Nav className='header_nav'>
                                <Nav.Link href="/marketplace">Marketplace</Nav.Link>
                                <Nav.Link href="/service-provider">Service Provider</Nav.Link>
                                <Nav.Link href="#">Start a StartUp</Nav.Link>
                                <Nav.Link href="#">StartUp-in-a-Box</Nav.Link>
                                <Nav.Link href="/about-us">About Us</Nav.Link>
                                <Nav.Link href="#">Partners</Nav.Link>
                            </Nav>
                            <Nav className='header_nav_right'>
                                <Nav.Link href="/login">Sign In</Nav.Link> <span className='nav_seprator'>|</span>
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>                    
                </Container>
                </Navbar>
        </header>
    );
}

export default Header;
