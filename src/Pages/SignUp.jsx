import React, { useState } from 'react'; // Import useState
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Eye, EyeOff } from "lucide-react";
import { Link } from 'react-router-dom';
import BackIc from "../assets/backIc.svg"

import GoogleIcon from '../assets/google_icon.svg';
import FacebookIcon from '../assets/facebook_icon.svg';
import Logoimg from '../assets/logo.png';
import Loginmetaic1 from '../assets/loginmetaic1.svg';
import Loginmetaic2 from '../assets/loginmetaic2.svg';
import Loginmetaic3 from '../assets/loginmetaic3.svg';
import OTP from '../Component/Modals/OTP';
import { ErrorMessage, Field, Formik } from 'formik';
import { signupSchema } from '../utils/Utils';
import PhoneInput from 'react-phone-input-2';
import { SubmitResponse } from '../utils/ApiFunctions';
import { LoginbaseURL } from '../utils/AxiosInstance';
import toast from 'react-hot-toast';


const PhoneField = ({ field, form }) => {
    return (
        <PhoneInput
            country={"us"} // Default country
            value={field.value} // Bind value from Formik


            onChange={(value, country, e, formattedValue) => {
                let DialCode = country?.dialCode;
                let valueLength = value?.length;
                let result = value?.substr(
                    DialCode?.length,
                    valueLength - DialCode?.length
                );

                form.setFieldValue(
                    "mobile",
                    `+${DialCode}` + " " + result
                );
            }}
            inputClass="form-input w-full form-control"
            containerClass="w-full"
        />
    );
};

const SignUp = () => {

    const [formState, setFormValues] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const [passwordVisible1, setPasswordVisible1] = useState(false);

    const togglePasswordVisibility1 = () => {
        setPasswordVisible1(!passwordVisible1);
    };

    const sendOtp = async (values) => {
        setFormValues({ ...values })
        const res = await SubmitResponse(`${LoginbaseURL}/register`, values);

        if (res?.data?.status == 200) {
            toast.success(res?.data?.message);
            handleShow();
        }
        else {

            toast.dismiss()
            toast.error(res?.message);
        }

    }



    return (
        <>

              <div className='inner_head'>
                            <Container>
                                <div className='inner_head_in backbtn_s'>
                                    <Link to="/marketplace"
                                    //     onClick={() => {
                                    //     const from = location.state?.from?.pathname?.toString();
                                    //     console.log('locatioaaan', typeof (from));
                                    //     if (from === undefined) {
                                    //         console.log('ddddddddd', navigate(-1))
                                    //        // fallback if no previous route
                                    //     } else {
                                    //         navigate(from);

                                    //     }
                                    // }}

                                    // onClick={() => {
                                    //     navigate('/marketplace');
                                    // }}
                                    >
                                        <img src={BackIc} /> Back</Link>
                                </div>
                            </Container>
                        </div>
            <section className='login_page'>
                <Container>
                    <div className='login_page_in'>
                        <div className='mobile_logo'><div className='login_logo'><Link to="/"><img src={Logoimg} /></Link></div></div>
                        <Row className='login_row'>
                            <Col md={6} className='col_login'>
                                <div className='login_form'>
                                    <div className='login_form_head'>
                                        <h2 className='heading_type2'>Get Started</h2>
                                    </div>
                                    <Formik
                                        initialValues={{
                                            name: '',
                                            email: '',

                                            registrationType: "web",
                                            mobile: '',
                                            password: '',
                                            confirmPassword: '',
                                            reviewterms_conditions: false,
                                            reviewNdaSigned: false,
                                        }}
                                        validationSchema={signupSchema}
                                        onSubmit={sendOtp}
                                    >
                                        {({ handleSubmit, isSubmitting }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <div className='login_form_in'>
                                                    <Row>
                                                        <Col xl='12'>
                                                            <Form.Group className='form-group'>
                                                                <Form.Label>Full Name</Form.Label>
                                                                <Field type='text' name='name' className='form-control' placeholder='Enter Name' />
                                                                <ErrorMessage name='name' component='div' className='text-danger' />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl='12'>
                                                            <Form.Group className='form-group'>
                                                                <Form.Label>Email Address</Form.Label>
                                                                <Field type='email' name='email' className='form-control' placeholder='You@example.com' />
                                                                <ErrorMessage name='email' component='div' className='text-danger' />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md='12'>
                                                            <Form.Group className='form-group'>
                                                                <Form.Label>Phone Number</Form.Label>
                                                                <Field name="mobile" component={PhoneField
                                                                } />
                                                                <ErrorMessage name='mobile' component='div' className='text-danger' />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col lg='6'>
                                                            <Form.Group className='form-group position-relative'>
                                                                <Form.Label>Password</Form.Label>
                                                                <div className='eye_password'>
                                                                    <Field
                                                                        type={passwordVisible ? 'text' : 'password'}
                                                                        name='password'
                                                                        className='form-control'
                                                                        placeholder='Enter password'
                                                                    />
                                                                    <div className='password_eye' onClick={togglePasswordVisibility}>
                                                                        {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                                                                    </div>
                                                                </div>
                                                                <ErrorMessage name='password' component='div' className='text-danger' />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col lg='6'>
                                                            <Form.Group className='form-group position-relative'>
                                                                <Form.Label>Confirm Password</Form.Label>
                                                                <div className='eye_password'>
                                                                    <Field
                                                                        type={passwordVisible1 ? 'text' : 'password'}
                                                                        name='confirmPassword'
                                                                        className='form-control'
                                                                        placeholder='Enter password'
                                                                    />
                                                                    <div className='password_eye' onClick={togglePasswordVisibility1}>
                                                                        {passwordVisible1 ? <EyeOff size={20} /> : <Eye size={20} />}
                                                                    </div>
                                                                </div>
                                                                <ErrorMessage name='confirmPassword' component='div' className='text-danger' />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md="12">
                                                            <Form.Group className="form-group">
                                                                <Form.Check
                                                                    type="checkbox"
                                                                    id="reviewNdaSigned"
                                                                    className="mb-2"
                                                                    label={
                                                                        <>
                                                                            Review and digitally{" "}
                                                                            <a href="/" target="_blank" rel="noopener noreferrer">
                                                                                sign our NDA
                                                                            </a>{" "}
                                                                            before you proceed
                                                                        </>
                                                                    }
                                                                    as={Field}
                                                                    name="reviewNdaSigned"
                                                                />
                                                                <ErrorMessage name="reviewNdaSigned" component="div" className="text-danger" />
                                                            </Form.Group>

                                                            <Form.Group className="form-group">
                                                                <Form.Check
                                                                    type="checkbox"
                                                                    id="reviewterms_conditions"
                                                                    className="mb-2"
                                                                    label={
                                                                        <>
                                                                            I have read and agree to the{" "}
                                                                            <a href="/reviewterms_conditions-conditions" target="_blank" rel="noopener noreferrer">
                                                                                Terms and Conditions
                                                                            </a>
                                                                            ,{" "}
                                                                            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                                                                                Privacy Policy
                                                                            </a>{" "}
                                                                            and have digitally signed the reviewNdaSigned
                                                                        </>
                                                                    }
                                                                    as={Field}
                                                                    name="reviewterms_conditions"
                                                                />
                                                                <ErrorMessage name="reviewterms_conditions" component="div" className="text-danger" />
                                                            </Form.Group>
                                                        </Col>

                                                        <Col md='12'>
                                                            <Button type='submit' disabled={isSubmitting} className='btn btn_primary w-100'>
                                                                {isSubmitting ? 'Please Wait...' : 'Continue'}
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                    <div className='login_with'><span>Or Signup With</span></div>
                                                    <div className='login_social'>
                                                        <Link to='#'><img src={GoogleIcon} alt='Google' /></Link>
                                                        <Link to='#'><img src={FacebookIcon} alt='Facebook' /></Link>
                                                    </div>
                                                </div>
                                                <div className='login_para'><p>Already have an account? <Link to='/login' className='login_a'>Login</Link></p></div>
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
            <OTP
                show={show}
                onHide={handleClose}
                formValue={formState}
            />
        </>
    );
}

export default SignUp;
