import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logoimg from '../assets/logo.png';
import Loginmetaic1 from '../assets/loginmetaic1.svg';
import Loginmetaic2 from '../assets/loginmetaic2.svg';
import Loginmetaic3 from '../assets/loginmetaic3.svg';
import BackIc from "../assets/backIc.svg";
import SendEmail from '../Component/Modals/SendEmail';
import { ErrorMessage, Field, Formik } from 'formik';
import toast from 'react-hot-toast';
import { LoginbaseURL } from '../utils/AxiosInstance';
import { forgotPassword } from '../utils/Utils';
import { SubmitResponse } from '../utils/ApiFunctions';

const ForgotPassword = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email, setEmail] = useState('')
    const handleSubmit = async (values) => {
        const res = await SubmitResponse(`${LoginbaseURL}/forgotPassword`, { ...values });
        if (res.data?.status == 200) {
            toast.dismiss()
            // toast.success(res?.data?.message);
            handleShow()
            setEmail({ email: values?.email,code:res?.data?.message?.split('->')[1]})
        }
        else {
            toast.dismiss()
            toast.error(res?.message ? res?.message : res?.data?.message);
        }

    };
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
                                    <Formik
                                        initialValues={{ email: "" }}
                                        validationSchema={forgotPassword}
                                        onSubmit={handleSubmit}
                                    >
                                        {({ handleSubmit }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <div className="login_form_in">
                                                    {/* Email Field */}
                                                    <Form.Group className="form-group" controlId="formGroupEmail">
                                                        <Form.Label>Email Address</Form.Label>
                                                        <Field name="email" type="email" className="form-control" placeholder="You@example.com" />
                                                        <ErrorMessage name="email" component="div" className="text-danger" />
                                                    </Form.Group>

                                                    {/* Reset Password Button */}
                                                    <Button type="submit" className="btn btn_primary w-100">Reset Password</Button>
                                                </div>

                                                {/* Back to Login */}
                                                <div className="login_para">
                                                    <div className="inner_head_in">
                                                        <Link to="/login"><img src={BackIc} alt="Back" /> Back to Login</Link>
                                                    </div>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
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
                                            <Col className='col-4'>
                                                <div className='login_meta_itm'>
                                                    <div className='login_meta_ic'><img src={Loginmetaic1} /></div>
                                                    <div className='login_meta_con'>
                                                        <p className='heading_t'>First Ever</p>
                                                        <p>Startup Innovation Machine For Business Generation</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className='col-4'>
                                                <div className='login_meta_itm'>
                                                    <div className='login_meta_ic'><img src={Loginmetaic2} /></div>
                                                    <div className='login_meta_con'>
                                                        <p className='heading_t'>10,000+</p>
                                                        <p>Investment-Ready Startups Marketplace</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className='col-4'>
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

            <SendEmail
                show={show}
                onHide={handleClose}
                email={email}
            />
        </>
    );
}

export default ForgotPassword;
