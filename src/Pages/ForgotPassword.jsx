import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logoimg from '../assets/logo.png';
import Loginmetaic1 from '../assets/loginmetaic1.svg';
import Loginmetaic2 from '../assets/loginmetaic2.svg';
import Loginmetaic3 from '../assets/loginmetaic3.svg';
import BackIc from "../assets/backIc.svg";
import SendEmail from '../Component/Modals/SendEmail';

const ForgotPassword = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <section className='login_page'>
                <Container>
                    <div className='login_page_in'>
                        <div className='mobile_logo'><div className='login_logo'><Link to="/"><img src={Logoimg} /></Link></div></div>
                        <Row className='login_row'>
                            <Col md={6} className='col_login'>
                                <div className='login_form fotgotpassword_form'>
                                    <div className='login_form_head'>
                                        <h2 className='heading_type2 mb-2'>Forgot Password?</h2>
                                        <p>We'll send you a secure link via email to reset your password.</p>
                                    </div>
                                    <Form>
                                        <div className='login_form_in'>
                                            <Form.Group className="form-group" controlId="formGroupEmail">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="email" placeholder="You@example.com" />
                                            </Form.Group>
                                            <Button type='button' className="btn btn_primary w-100" onClick={handleShow}>Reset Password</Button>
                                        </div>
                                        <div className='login_para'>
                                            <div className='inner_head_in'>
                                                <Link to="/login"><img src={BackIc} /> Back to Login</Link>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                            <Col md={6} className='col_login'>
                                <div className='login_con'>
                                    <div className='login_logo'><Link to="/"><img src={Logoimg} /></Link></div>
                                    <div className='why_tech'>
                                        <h2 className='heading_type2'>Why NeedTech</h2>
                                        <ul className='list_type1'>
                                            <li>Patent-pending status</li>
                                            <li>Freedom to Operate certificate</li>
                                            <li>Comprehensive Business Plan</li>
                                            <li>Executive Summary</li>
                                            <li>Third-Party Valuation</li>
                                            <li>And all other relevant due diligence documents.</li>
                                        </ul>
                                    </div>
                                    <div className='login_meta'>
                                        <Row>
                                            <Col sm={4} className='col'>
                                                <div className='login_meta_itm'>
                                                    <div className='login_meta_ic'><img src={Loginmetaic1} /></div>
                                                    <div className='login_meta_con'>
                                                        <h2 className='heading_type2'>300+</h2>
                                                        <p>Happy Customers</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={4} className='col'>
                                                <div className='login_meta_itm'>
                                                    <div className='login_meta_ic'><img src={Loginmetaic2} /></div>
                                                    <div className='login_meta_con'>
                                                        <h2 className='heading_type2'>50+</h2>
                                                        <p>Clients Businesses</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={4} className='col'>
                                                <div className='login_meta_itm'>
                                                    <div className='login_meta_ic'><img src={Loginmetaic3} /></div>
                                                    <div className='login_meta_con'>
                                                        <h2 className='heading_type2'>20+</h2>
                                                        <p>Years of Experience</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <SendEmail
                show={show}
                onHide={handleClose}
            />
        </>
    );
}

export default ForgotPassword;
