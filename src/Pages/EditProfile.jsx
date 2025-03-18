import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import ProfilePhoto from "../assets/profilePhoto.jpg"
import { Link } from "react-router-dom";
import BackIc from "../assets/backIc.svg";

const EditProfile = () => {
    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in'><Link className='inner_head_a_h' to="/my-profile"><img src={BackIc} /> My Profile</Link><h1 className='heading_type1'>Edit Profile</h1></div>
                </Container>
            </div>
            <section className='prodile_sec'>
                <Container>
                    <div className='prodile_sec_in'>
                        <Row>
                            <Col md={12}>
                                <Form className='prodile_sec_s'>
                                    <div className='prodile_sec_img'>
                                        <div className='prodile_sec_img_in'><img src={ProfilePhoto}/></div>
                                        <div className='rditpic_btn'><span className='btn btn_outline'>Upload Photo</span><Form.Control type="file" placeholder="Enter Name" /></div>
                                    </div>
                                    <div className='editprofile_info'>
                                        <h2 className='heading_type2'>Personal Info</h2>
                                        <div className='edit_itms'>
                                            <Row>
                                                <Col md="6">
                                                    <Form.Group className="form-group" controlId="formGroupName">
                                                        <Form.Label>Full Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Name" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group" controlId="formGroupEmail">
                                                        <Form.Label>Email Address</Form.Label>
                                                        <Form.Control type="email" placeholder="You@example.com" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="12">
                                                    <Form.Group className="form-group" htmlFor="phone" controlId="formGroupEmail">
                                                        <Form.Label>Phone Number</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter mobile number" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </div>
                                        <h2 className='heading_type2'>Business Info</h2>
                                        <div className='edit_itms'>
                                            <Row>
                                                <Col md="6">
                                                    <Form.Group className="form-group" controlId="formGroupName">
                                                        <Form.Label>Business Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter business name" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group" controlId="formGroupEmail">
                                                        <Form.Label>Website</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter website" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group" htmlFor="phone" controlId="formGroupEmail">
                                                        <Form.Label>Position</Form.Label>
                                                        <Form.Select className='form-control' aria-label="Default select example">
                                                            <option>Chairman</option>
                                                            <option value="1">Chairman</option>
                                                            <option value="2">Chairman</option>
                                                            <option value="3">Chairman</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group" htmlFor="phone" controlId="formGroupEmail">
                                                        <Form.Label>Type of business</Form.Label>
                                                        <Form.Select className='form-control' aria-label="Default select example">
                                                            <option>Entrepreneur</option>
                                                            <option value="1">Entrepreneur</option>
                                                            <option value="2">Entrepreneur</option>
                                                            <option value="3">Entrepreneur</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                <Col md="12">
                                                    <Form.Group className="form-group" htmlFor="phone" controlId="formGroupEmail">
                                                        <Form.Label>Country</Form.Label>
                                                        <Form.Select className='form-control' aria-label="Default select example">
                                                            <option>Country</option>
                                                            <option value="1">Country</option>
                                                            <option value="2">Country</option>
                                                            <option value="3">Country</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group" controlId="formGroupName">
                                                        <Form.Label>State</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter state name" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group" controlId="formGroupName">
                                                        <Form.Label>City</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter city name" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="12">
                                                    <div className='btn_sec btn_sec_itms'>
                                                        <Button as={Link} to="/" className='btn btn_primary'>Save Changes</Button>
                                                        <Button as={Link} to="/" className='btn btn_outline'>Cancel</Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default EditProfile;
