import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logoimg from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className='footer_sec'>
            <Container>
                <div className='footer_sec_in'>
                    <Row>
                        <Col md="3">
                            <div className='footer_itm footer_logo'><img src={Logoimg} /></div>
                        </Col>
                        <Col md="3" sm="4" className='col'>
                            <div className='footer_itm footer_itm_l'>
                                <p className='footer_heading'>Company</p>
                                <ul>
                                    <li><Link to="/">About us</Link></li>
                                    <li><Link to="/">Testimonials</Link></li>
                                    <li><Link to="/articles">Articles</Link></li>
                                    <li><Link to="/">Help & Support</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="3" sm="4"  className='col'>
                            <div className='footer_itm'>
                                <p className='footer_heading'>Sellers</p>
                                <ul>
                                    <li><Link to="/">Sell your online business</Link></li>
                                    <li><Link to="/">Seller pricing</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="3" sm="4">
                            <div className='footer_itm'>
                                <p className='footer_heading'>Buyers</p>
                                <ul>
                                    <li><Link to="/">Online businesses for sale</Link></li>
                                    <li><Link to="/">Buyer pricing</Link></li>
                                    <li><Link to="/">Instant Slack Alerts</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='footer_bottom'>
                    <Row>
                        <Col md={6}>
                            <ul className='footer_bottom_itms'>
                                <li><Link to="/">Terms of Service</Link></li>
                                <li>|</li>
                                <li><Link to="/">Privacy Policy</Link></li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <p className='footer_bottom_con'>© 2025 NeedTech. All rights reserved</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
            
        </>
    );
}

export default Footer;
