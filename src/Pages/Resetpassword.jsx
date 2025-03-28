import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logoimg from '../assets/logo.png';
import Loginmetaic1 from '../assets/loginmetaic1.svg';
import Loginmetaic2 from '../assets/loginmetaic2.svg';
import Loginmetaic3 from '../assets/loginmetaic3.svg';
import BackIc from "../assets/backIc.svg";
import SendEmail from '../Component/Modals/SendEmail';
import { ErrorMessage, Field, Formik } from 'formik';
import toast from 'react-hot-toast';
import { LoginbaseURL } from '../utils/AxiosInstance';
import { forgotPassword, resetPassword } from '../utils/Utils';
import { SubmitResponse } from '../utils/ApiFunctions';
import { Eye, EyeOff } from 'lucide-react';

const Resetpassword = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code"); // Extract the "code" from the URL
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const [passwordVisible1, setPasswordVisible1] = useState(false);

    const togglePasswordVisibility1 = () => {
        setPasswordVisible1(!passwordVisible1);
    };


    const handleSubmit = async (values) => {
        if (code) {
            const data = {
                "code": code,
                "newPassword": values?.password
            }

            const res = await SubmitResponse(`${LoginbaseURL}/resetPassword`, { ...data });
            if (res.data?.status == 200) {
                toast.dismiss()
                toast.success(res?.message ? res?.message : res?.data?.message);
                navigate('/login')

            }
            else {
                toast.dismiss()
                toast.error(res?.message ? res?.message : res?.data?.message);
            }
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
                                        <h2 className='heading_type2 mb-2'>Reset Password?</h2>
                                        {/* <p>We'll send you a secure link via email to reset your password.</p> */}
                                    </div>
                                    <Formik
                                        initialValues={{ password: "", confirmPassword: "" }}
                                        validationSchema={resetPassword}
                                        onSubmit={handleSubmit}
                                    >
                                        {({ handleSubmit }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <div className="login_form_in">
                                                    {/* Email Field */}
                                                    <Form.Group className="form-group" controlId="formGroupEmail">
                                                        <Form.Label>Password</Form.Label>
                                                        <div className='eye_password'>
                                                            <Field name="password" type={passwordVisible ? 'text' : 'password'} className="form-control" placeholder="**********" />
                                                            <div className='password_eye' onClick={togglePasswordVisibility}>
                                                                {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                                                            </div>
                                                        </div>

                                                        <ErrorMessage name="password" component="div" className="text-danger" />
                                                    </Form.Group>


                                                    <Form.Group className="form-group" controlId="formGroupEmail">
                                                        <Form.Label>Confirm Password</Form.Label>
                                                        <div className='eye_password'>
                                                            <Field name="confirmPassword" type={passwordVisible1 ? 'text' : 'password'} className="form-control" placeholder="**********" />
                                                            <div className='password_eye' onClick={togglePasswordVisibility1}>
                                                                {passwordVisible1 ? <EyeOff size={20} /> : <Eye size={20} />}
                                                            </div>
                                                        </div>
                                                        <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
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


        </>
    );
}

export default Resetpassword;
