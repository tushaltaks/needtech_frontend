import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logoimg from '../assets/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProfileUser from '../assets/profileUser.svg';
import { Dropdown } from 'react-bootstrap';
import Downarrow from '../assets/downarrow.svg';
import { handleimageUrl } from '../utils/ApiFunctions';
import Swal from 'sweetalert2';

const Header = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [show, setShow] = useState(false)
    const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem("userDetails")));

    const [token, setToken] = useState(localStorage.getItem("token"));
    const handleLogut = async () => {

        Swal.fire({
            title: "Are you sure?",
            text: "you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                setUserDetails(null)
                setToken(null)
                setShow(true)
                localStorage.clear()
                navigate('/login')
            }
        });


    }

    useEffect(() => {
        setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
        setToken(localStorage.getItem("token"));
    }, [token, pathname]);
    return (
        <header className='header-sec'>
            <Navbar expand="lg" className="header_sec">
                <Container>
                    <Navbar.Brand href="/"><img src={Logoimg} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className='navbar-collapse_in'>
                            <Nav className='header_nav'>
                                <Nav.Link as={Link} to="/marketplace">Marketplace</Nav.Link>
                                <Nav.Link as={Link} to="/service-provider">Service Providers</Nav.Link>
                                <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/the-company">Company</Nav.Link>
                            </Nav>
                            {!token ? <Nav className='header_nav_right'>
                                <Nav.Link as={Link} to="/login">Sign In</Nav.Link> <span className='nav_seprator'>|</span>
                                <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                            </Nav> :

                                <Nav className='header_nav_right'>
                                    {/* <Nav.Link href="" className='notification_sec'><img className='notification_ic' src={NotificationIc}/></Nav.Link> */}
                                    <Dropdown className="menu_dropdown">
                                        <Dropdown.Toggle variant="success" id="dropdown-basic"><div className='profile_user_img'><img src={userDetails?.profileImage ? handleimageUrl(userDetails?.profileImage) : ProfileUser} /></div> <span>
                                            {userDetails?.name}</span> <img className='dropdown_ic' src={Downarrow} /></Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item as={Link} to="/my-profile">My Profile</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/my-wishlist">My Wishlist</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/my-bids">My Bids</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/my-business">My Startups</Dropdown.Item>
                                            <Dropdown.Item onClick={handleLogut} >Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Nav>}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
