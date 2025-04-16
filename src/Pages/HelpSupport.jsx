import { ErrorMessage, Field, Formik } from 'formik';
import React, { useState } from 'react'; // Import useState
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { helpSupport } from '../utils/Utils';
import { IoMdPin, IoMdCall, IoMdMail } from "react-icons/io";
import PhoneInput from 'react-phone-input-2';
import { baseURL } from '../utils/AxiosInstance';
import { SubmitResponse } from '../utils/ApiFunctions';
import toast from 'react-hot-toast';

const HelpSupport = () => {
    const navigate = useNavigate();
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
                        "phone",
                        `+${DialCode}` + " " + result
                    );
                }}
                inputClass="form-input w-full form-control"
                containerClass="w-full"
            />
        );
    };
    const handleSubmit = async (values) => {
        const res = await SubmitResponse(`${baseURL}/saveContactUs`, values)
        if (res?.data?.status == 200) {
            navigate('/')
            toast.success(res?.data?.message)
        }
        else {
            toast.dismiss()
            toast.error(res?.data?.message)
        }
    };
    return (
        <>
            <section className='contact_page'>
                <Container>
                    <div className='contact_page_in'>


                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                phone: "",

                                message: "",
                            }}
                            validationSchema={helpSupport}
                            onSubmit={handleSubmit}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <h2 className="heading_type2">Help & Support</h2>
                                    <Row>
                                        <Col xl="12">
                                            <Form.Group className="form-group">
                                                <Form.Label>Full Name</Form.Label>
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Enter Name"
                                                />
                                                <ErrorMessage
                                                    name="name"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col xl="12">
                                            <Form.Group className="form-group">
                                                <Form.Label>Email Address</Form.Label>
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="You@example.com"
                                                />
                                                <ErrorMessage
                                                    name="email"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col md="12">
                                            <Form.Group className="form-group">
                                                <Form.Label>Phone Number</Form.Label>
                                                <Field name="phone" component={PhoneField
                                                } />
                                                <ErrorMessage
                                                    name="phone"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col md="12">
                                            <Form.Group className="form-group">
                                                <Form.Label>Comments</Form.Label>
                                                <Field
                                                    as="textarea"
                                                    name="message"
                                                    className="form-control"
                                                    rows={3}
                                                    placeholder="Write here..."
                                                />
                                                <ErrorMessage
                                                    name="message"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col md="12">
                                            <Button type="submit" className="btn btn_primary w-100">
                                                Submit
                                            </Button>
                                        </Col>




                                    </Row>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <center>
                        <Row>
                            <Col md={12}>
                                <div className='blue-left-border'>
                                    <div className='detail-contact '>
                                        <span >
                                            <IoMdPin />{" "}
                                        </span>


                                        <Link to={"https://maps.app.goo.gl/N63yHbjxPc5yAoj36"} target='_blank'>
                                            <span className='text-black'>
                                                1 Nahal Gamla St.
                                                Suite 37 Kiryat Ono 55450, Israel
                                            </span>

                                        </Link>
                                    </div>
                                    <div className=' detail-contacts mt-2'>
                                        <span>
                                            <IoMdCall /> {" "}


                                        </span> <span className='phone-color'>+972-52-4785336</span>
                                    </div>
                                    <div className=' detail-contacts mt-2 '>
                                        <span>
                                            <IoMdMail />{" "}

                                        </span>
                                        <span className='text-blue'>
                                            {/* sales@rapidrim.com */}
                                            <Link to="mailto:support@needtechlabs.com">
                                                support@needtechlabs.com
                                            </Link>
                                        </span>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </center>

                </Container>
            </section>
        </>
    );
}

export default HelpSupport;
