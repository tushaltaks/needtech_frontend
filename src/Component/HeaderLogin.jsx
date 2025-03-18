import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logoimg from '../assets/logo.png';
import NotificationIc from '../assets/notificationIc.svg';
import ProfileUser from '../assets/profileUser.svg';
import Downarrow from '../assets/downarrow.svg';
import { Dropdown } from 'react-bootstrap';

const HeaderLogin = () => {
    return (
        <header className='header-sec'>
            <Navbar expand="lg" className="header_sec">
                <Container>
                    <Navbar.Brand href="#"><img src={Logoimg} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className='navbar-collapse_in'>
                            <Nav className='header_nav'>
                                <Nav.Link href="/marketplace-login">Marketplace</Nav.Link>
                                <Nav.Link href="/service-provider-login">Service Provider</Nav.Link>
                                <Nav.Link href="#">Start a StartUp</Nav.Link>
                                <Nav.Link href="#">StartUp-in-a-Box</Nav.Link>
                                <Nav.Link href="/about-us">About Us</Nav.Link>
                                <Nav.Link href="#">Partners</Nav.Link>
                            </Nav>
                            <Nav className='header_nav_right'>
                                <Nav.Link href="" className='notification_sec'><img className='notification_ic' src={NotificationIc}/></Nav.Link>
                                <Dropdown className="menu_dropdown">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic"><div className='profile_user_img'><img src={ProfileUser}/></div> <span>Daniel K.</span> <img className='dropdown_ic' src={Downarrow}/></Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/my-profile">My Profile</Dropdown.Item>
                                        <Dropdown.Item href="/my-wishlist">My Wishlist</Dropdown.Item>
                                        <Dropdown.Item href="/my-bids">My Bids</Dropdown.Item>
                                        <Dropdown.Item href="/my-business">My Startups</Dropdown.Item>
                                        <Dropdown.Item href="/">Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </div>
                    </Navbar.Collapse>                    
                </Container>
                </Navbar>
        </header>
    );
}

export default HeaderLogin;
