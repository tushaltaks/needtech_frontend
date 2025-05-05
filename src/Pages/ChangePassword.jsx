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
import { ChangePassowrd } from '../utils/Utils';
import { SubmitResponse } from '../utils/ApiFunctions';
import { baseURL, LoginbaseURL } from '../utils/AxiosInstance';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

const ChangePassword = () => {


    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible1, setPasswordVisible1] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const togglePasswordVisibility1 = () => {
        setPasswordVisible1(!passwordVisible1);
    };
    const togglePasswordVisibility2 = () => {
        setPasswordVisible2(!passwordVisible2);
    };


    const handleSubmit = async (values) => {
        const res = await SubmitResponse(`${LoginbaseURL}/changePassword`, values);

        if (res?.status == 200) {
            toast.success(res?.data?.message);
            setShow(false);
        }

        else {
            toast.dismiss()
            toast.error(res?.message);
        }
    }

    return (
        <>
            <section className='login_page'>
                <Container>
                    <div className='login_page_in'>
                        <div className='mobile_logo'><div className='login_logo'><Link to="/"><img src={Logoimg} /></Link></div></div>
                        <Row className='login_row'>
                            <Col md={6} className='col_login'>
                                <div className='login_form'>
                                    <div className='login_form_head'>
                                        <h2 className='heading_type2'>Change Password?</h2>
                                    </div>
                                    <Formik
                                        initialValues={{
                                            oldPassword: "",
                                            newPassword: "",
                                            confirmPassword: "",
                                        }}
                                        validationSchema={ChangePassowrd}
                                        onSubmit={handleSubmit}
                                    >
                                        {({ handleSubmit }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <div className="login_form_in">
                                                    <div className="form-group">
                                                        <label>Old Password</label>
                                                        <div className="eye_password">
                                                            <Field
                                                                type={passwordVisible ? "text" : "password"}

                                                                name="oldPassword"
                                                                className="form-control"
                                                                placeholder="Enter Password"
                                                            />
                                                            <div className="password_eye" onClick={togglePasswordVisibility}>
                                                                {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                                                            </div>
                                                        </div>
                                                        <ErrorMessage name="oldPassword" component="div" className="text-danger" />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>New Password</label>
                                                        <div className="eye_password">
                                                            <Field
                                                                type={passwordVisible1 ? "text" : "password"}
                                                                name="newPassword"
                                                                className="form-control"
                                                                placeholder="Enter Password"
                                                            />

                                                            <div className="password_eye" onClick={togglePasswordVisibility1}>
                                                                {passwordVisible1 ? <EyeOff size={20} /> : <Eye size={20} />}
                                                            </div>
                                                        </div>
                                                        <ErrorMessage name="newPassword" component="div" className="text-danger" />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Confirm Password</label>
                                                        <div className="eye_password">

                                                            <Field
                                                                type={passwordVisible2 ? "text" : "password"}

                                                                name="confirmPassword"
                                                                className="form-control"
                                                                placeholder="Enter Password"
                                                            />
                                                            <div className="password_eye" onClick={togglePasswordVisibility2}>
                                                                {passwordVisible2 ? <EyeOff size={20} /> : <Eye size={20} />}
                                                            </div>
                                                        </div>
                                                        <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                                    </div>

                                                    <Button type="submit" className="btn btn_primary w-100">
                                                        Submit
                                                    </Button>
                                                </div>

                                                <div className="login_para">
                                                    <div className="inner_head_in">
                                                        <Link to="/my-profile">
                                                            <img src={BackIc} alt="Back" /> Back to Profile
                                                        </Link>
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

export default ChangePassword;
