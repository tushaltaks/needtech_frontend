import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BackIc from "../assets/backIc.svg"
import HeartIcon from "../assets/heartIc.png"
import VerifiedIc from "../assets/verifiedIc.svg"
import DewberryLogo from "../assets/dewberry_logo.jpg"
import Logo_approved from "../assets/logo_approved.png"
import OfferBid from '../Component/Modals/OfferBid';
import ProfilePhoto from "../assets/profilePhoto.jpg"
import Lokedic from "../assets/lokedic.svg"

const ServiceProviderDetailLogin = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in backbtn_s'>
                        <Link to="/service-provider"><img src={BackIc} /> Back to Service Providers</Link>
                    </div>
                </Container>
            </div>
            <section className='market_detail service_provider_detail'>
                <Container>
                    <div className='market_detail_in'>
                        <div className='market_detail_s'>
                            <Row>
                                <Col md={8}>
                                    <div className='market_detail_s_in'>
                                        <div className='market_detail_img'>
                                            <div className='market_detail_img_in'>
                                                <img src={ProfilePhoto} />
                                            </div>
                                        </div>
                                        <div className='market_detail_info'>
                                            <div className='market_meta'>
                                                <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                            </div>
                                            <div className='market_detail_heading'>
                                                <h1 className='heading_type1 locked_data'>John Smith</h1>
                                                <h4>Electrical Engineer</h4>
                                            </div>
                                            <div className='service_provider_lisitng'>
                                                <h2 className='heading_type2'>Areas of Experties</h2>
                                                <ul className='list_type1 locked_data'>
                                                    <li>Primary domain and all site</li>
                                                    <li>Amazon Seller Central Account</li>
                                                    <li>Supplier Relationships</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='market_detail_right'>
                                        <div className='market_detail_right_con'>
                                            <div className='market_detail_right_in'>
                                                <div className='market_detail_logo'><img src={Logo_approved} /></div>
                                                <div className='market_detail_serviceprovider locked_data'>
                                                    <h4>Approved Partner</h4>
                                                    <p>19 years in business</p>
                                                </div>
                                            </div>
                                            <div className='heart_ic'><img src={HeartIcon} /></div>
                                        </div>
                                        <div className='service_provider_s'>
                                            <div className='service_provider_logo locked_data'><img src={DewberryLogo} /></div>
                                            <div className='service_provider_d'>
                                                <p className='locked_data'>Dewberry Ltd.</p>
                                                <p>Engineering Firm</p>
                                                <p>Paris, France</p>
                                            </div>
                                        </div>
                                        <div className='market_list_btn'>
                                            <Link to="/" className='btn btn_primary'>Contact Details</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='product_detail'>
                            <Row>
                                <Col md={8}>
                                    <div className='product_detail_in content_gap'>
                                        <div className='locked_btn'>
                                            <Link to="/" className='btn btn_outline'><img src={Lokedic} /> Unlock Professional</Link>
                                        </div>
                                        <p className='locked_data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet. veniam, quis nostrud exercitation. magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation.</p>
                                        <p className='locked_data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet. veniam, quis nostrud exercitation. magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation.</p>
                                        <h2 className='heading_type2 mt-5'>Product Detail</h2>
                                        <p className='locked_data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet. veniam, quis nostrud exercitation. magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation.</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='product_detail_assets'>
                                        <h2 className='heading_type2'>About the Company</h2>
                                        <ul className='list_type1 locked_data'>
                                            <li>Primary domain and all site</li>
                                            <li>Amazon Seller Central Account</li>
                                            <li>Supplier Relationships</li>
                                            <li>Walmart and Shopify Accounts</li>
                                            <li>Social Media Accounts</li>
                                            <li>Trademarks</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
            <OfferBid
                show={show}
                onHide={handleClose}
            />
        </>
    );
}

export default ServiceProviderDetailLogin;
