import React, { useState } from 'react'; // Import useState
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '../assets/google_icon.svg';
import FacebookIcon from '../assets/facebook_icon.svg';
import Logoimg from '../assets/logo.png';
import Loginmetaic1 from '../assets/loginmetaic1.svg';
import Loginmetaic2 from '../assets/loginmetaic2.svg';
import Loginmetaic3 from '../assets/loginmetaic3.svg';
import { ErrorMessage, Field, Formik } from 'formik';
import { loginSchma } from '../utils/Utils';
import { SubmitResponse } from '../utils/ApiFunctions';
import { LoginbaseURL } from '../utils/AxiosInstance';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const handleSubmit = async (values) => {

        const res = await SubmitResponse(`${LoginbaseURL}/login`, { ...values, role: 'user' });
        if (res.data?.status == 200) {

            if (res?.data?.data?.LastStep == 7) {
                toast.dismiss()
                toast.success(res?.data?.message);
                localStorage.setItem("name", res?.data?.data?.name);
                localStorage.setItem("subscriptionId", res?.data?.data?.subscrptionId);
                localStorage.setItem("subscritpionStartDate", res?.data?.data?.subscriptionStartDate);
                localStorage.setItem("subscritpionEndDate", res?.data?.data?.subscriptionEndDate);
                localStorage.setItem("userId", res?.data?.data?._id);
                localStorage.setItem("token", res?.data?.token);
                localStorage.setItem("userDetails", JSON.stringify(res?.data?.data));
                navigate(-1)
            }
            else {
                toast.dismiss()
                toast.error('Profile not completed');
                localStorage.setItem("userDetails", JSON.stringify(res?.data?.data));
                localStorage.setItem("userId", res?.data?.data?._id);

                navigate('/complete-profile?lastStep=' + parseInt(res?.data?.data?.LastStep + 1))
            }

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
                        <Row className='login_row'>
                            <Col md={6} className='col_login'>
                                <div className='mobile_logo'><div className='login_logo'><Link to="/"><img src={Logoimg} /></Link></div></div>
                                <div className='login_form'>
                                    <div className='login_form_head'>
                                        <h2 className='heading_type2'>Login</h2>
                                    </div>
                                    <Formik
                                        initialValues={{ email: "", password: "", rememberMe: false }}
                                        validationSchema={loginSchma}
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

                                                    {/* Password Field */}
                                                    <Form.Group className="form-group position-relative" controlId="formGroupPassword">
                                                        <div className="login_form_dflx">
                                                            <Form.Label>Password</Form.Label>
                                                            <Link to="/forgot-password" className="login_a">Forgot Password?</Link>
                                                        </div>
                                                        <div className="eye_password">
                                                            <Field
                                                                name="password"
                                                                type={passwordVisible ? "text" : "password"}
                                                                className="form-control"
                                                                placeholder="Enter password"
                                                            />
                                                            <div className="password_eye" onClick={togglePasswordVisibility}>
                                                                {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                                                            </div>
                                                        </div>
                                                        <ErrorMessage name="password" component="div" className="text-danger" />
                                                    </Form.Group>

                                                    {/* Remember Me Checkbox */}
                                                    <Form.Group className="form-group" id="formGridCheckbox">
                                                        <Field type="checkbox" name="rememberMe" className="me-2" />
                                                        <label>Remember me</label>
                                                    </Form.Group>

                                                    {/* Login Button */}
                                                    <Button type="submit" className="btn btn_primary w-100">Login</Button>

                                                    {/* Social Login */}
                                                    <div className="login_with"><span>Or Login With</span></div>
                                                    <div className="login_social">
                                                        <Link to="/"><img src={GoogleIcon} alt="Google Login" /></Link>
                                                        <Link to="/"><img src={FacebookIcon} alt="Facebook Login" /></Link>
                                                    </div>
                                                </div>

                                                {/* Signup Link */}
                                                <div className="login_para">
                                                    <p>Don’t have an account yet? <Link to="/signup" className="login_a">Signup</Link></p>
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

export default Login;
