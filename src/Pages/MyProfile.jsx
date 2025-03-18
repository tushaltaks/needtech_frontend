import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import ProfilePhoto from "../assets/profilePhoto.jpg"
import { Link } from "react-router-dom";

const MyProfile = () => {
    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in'><h1 className='heading_type1'>My Profile</h1></div>
                </Container>
            </div>
            <section className='prodile_sec'>
                <Container>
                    <div className='prodile_sec_in'>
                        <Row className='row_space'>
                            <Col lg={8}>
                                <div className='prodile_sec_s'>
                                    <div className='prodile_sec_img'><div className='prodile_sec_img_in'><img src={ProfilePhoto}/></div></div>
                                    <div className='prodile_sec_info'>
                                        <h2 className='heading_type2'>Personal Info</h2>
                                        <div className='prodile_sec_itms'>
                                            <div className='prodile_sec_itm market_list_rate'>
                                                <p>Name</p>
                                                <h4>Peter Parker</h4>
                                            </div>
                                            <div className='prodile_sec_itm market_list_rate'>
                                                <p>Email</p>
                                                <h4>peterparker@needtech.com</h4>
                                            </div>
                                            <div className='prodile_sec_itm market_list_rate'>
                                                <p>Mobile Number</p>
                                                <h4>+1 982 536 4025</h4>
                                            </div>
                                        </div>
                                        <div className='btn_sec btn_sec_itms'>
                                            <Button as={Link} to="/edit-profile" className='btn btn_primary'>Edit Profile</Button>
                                            <Button as={Link} to="/change-password" className='btn btn_outline'>Change Password</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='prodile_sec_info prodile_sec_right'>
                                    <h2 className='heading_type2'>Business Info</h2>
                                    <div className='prodile_sec_itms'>
                                        <div className='prodile_sec_itm market_list_rate'>
                                            <p>Business Name</p>
                                            <h4>Cleaning Products</h4>
                                        </div>
                                        <div className='prodile_sec_itm market_list_rate'>
                                            <p>Position</p>
                                            <h4>Board Member</h4>
                                        </div>
                                        <div className='prodile_sec_itm market_list_rate'>
                                            <p>Type of business</p>
                                            <h4>Entrepreneur</h4>
                                        </div>
                                        <div className='prodile_sec_itm market_list_rate'>
                                            <p>Address</p>
                                            <h4>jacksonville, florida, usa</h4>
                                        </div>
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

export default MyProfile;
