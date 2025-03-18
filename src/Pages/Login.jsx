import React, { useState } from 'react'; // Import useState
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Eye, EyeOff } from "lucide-react";
import { Link } from 'react-router-dom';
import GoogleIcon from '../assets/google_icon.svg';
import FacebookIcon from '../assets/facebook_icon.svg';
import Logoimg from '../assets/logo.png';
import Loginmetaic1 from '../assets/loginmetaic1.svg';
import Loginmetaic2 from '../assets/loginmetaic2.svg';
import Loginmetaic3 from '../assets/loginmetaic3.svg';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <>
            <section className='login_page'>
                <Container>
                    <div className='login_page_in'>
                        <Row className='login_row'>
                            <Col md={6} className='col_login'>
                                <div className='mobile_logo'><div className='login_logo'><Link to="/"><img src={Logoimg} /></Link></div></div>
                                <div className='login_form'>
                                    <div className='login_form_head'>
                                        <h2 className='heading_type2'>Login</h2>
                                    </div>                                     
                                    <Form>
                                        <div className='login_form_in'>
                                            <Form.Group className="form-group" controlId="formGroupEmail">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="email" placeholder="You@example.com" />
                                            </Form.Group>
                                            <Form.Group className="form-group position-relative" controlId="formGroupPassword">
                                                <div className='login_form_dflx'><Form.Label>Password</Form.Label> <Link to="/forgot-password" className='login_a'>Forgot Password?</Link></div>                                            
                                                <div className='eye_password'>
                                                    <Form.Control
                                                    type={passwordVisible ? "text" : "password"}
                                                    placeholder="Enter password"
                                                    />
                                                    {/* Eye Icon */}
                                                    <div className='password_eye'
                                                    onClick={togglePasswordVisibility} >
                                                    {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                                                    </div>
                                                </div>
                                            </Form.Group>
                                            <Form.Group className="form-group" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Remember me" />
                                            </Form.Group>
                                            <Link to="/marketplace-login" className="btn btn_primary w-100" type="submit">Login</Link>

                                            <div className='login_with'><span>Or Login With</span></div>
                                            <div className='login_social'>
                                                <Link to="/"><img src={GoogleIcon} /></Link>
                                                <Link to="/"><img src={FacebookIcon} /></Link>
                                            </div>
                                        </div>
                                        <div className='login_para'><p>Don’t have an account yet? <Link to="/signup" className='login_a'>Signup</Link></p></div>
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
                                    <div className='login_meta why_need_meta'>
                                        <Row>
                                            <Col sm={4} className='col'>
                                                <div className='login_meta_itm'>
                                                    <div className='login_meta_ic'><img src={Loginmetaic1} /></div>
                                                    <div className='login_meta_con'>
                                                        <p className='heading_t'>First Ever</p>
                                                        <p>Startup Innovation Machine For Business Generation</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={4} className='col'>
                                                <div className='login_meta_itm'>
                                                    <div className='login_meta_ic'><img src={Loginmetaic2} /></div>
                                                    <div className='login_meta_con'>
                                                        <p className='heading_t'>10,000+</p>
                                                        <p>Investment-Ready Startups Marketplace</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={4} className='col'>
                                                <div className='login_meta_itm'>
                                                    <div className='login_meta_ic'><img src={Loginmetaic3} /></div>
                                                    <div className='login_meta_con'>
                                                        <p className='heading_t'>Empowering</p>
                                                        <p>Bright Minds From All Walks Of Life</p>
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
        </>
    );
}

export default Login;
