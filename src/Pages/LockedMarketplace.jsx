import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BackIc from "../assets/backIc.svg"
import HeartIcon from "../assets/heartIc.png"
import HeartIconFilled from "../assets/heartFilledIc.png"
import BusinessImg1 from "../assets/business_img1.jpg"
import VerifiedIc from "../assets/verifiedIc.svg"
import NewIc from "../assets/newIc.svg"
import GrowIc from "../assets/grow_ic.svg"
import Agric1 from "../assets/agric1.svg"
import Agric2 from "../assets/agric2.svg"
import Agric3 from "../assets/agric3.svg"
import Lokedic from "../assets/lokedic.svg"
import Logo_approved from "../assets/logo_approved.png"

const LockedMarketplace = () => {
    return (
        <>
        <div className='inner_head'>
            <Container>
                <div className='inner_head_in'>
                    <Link to="/marketplace"><img src={BackIc} /> Back to Products</Link>
                </div>
            </Container>
        </div>
        <section className='market_detail market_locked_detail'>
            <Container>
                <div className='market_detail_in'>
                    <div className='market_meta'>
                        <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                        <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={NewIc} /></div><span>New Startup</span></div>
                        <div className='market_meta_itm market_meta_itm_data'><span>Business, E-commerce, Cleaning, Food</span></div>
                    </div>
                    <div className='market_detail_heading'>
                        <h1 className='heading_type1'>Cleaning Products, Lifestyle, Personal Care</h1>
                    </div>
                    <div className='market_detail_s'>
                        <Row>
                            <Col md={8}>
                                <div className='market_detail_s_in'>
                                    <div className='market_detail_img'>
                                        <div className='market_detail_img_in'>
                                            <img src={BusinessImg1} />
                                        </div>
                                    </div>
                                    <div className='market_detail_info'>
                                        <div className='market_list_right_meta'>
                                            <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                            <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                            <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>74%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4 className='locked_data'>87%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4 className='locked_data'>4.3% <img src={GrowIc} /></h4>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='market_detail_right'>
                                    <div className='market_detail_right_con'>
                                        <div className='market_detail_right_in'>
                                            <div className='market_detail_logo'><img src={Logo_approved} /></div>
                                            <div className='market_detail_time'>
                                                <p>Business Started</p>
                                                <h4>(13 years 1 month old)</h4>
                                            </div>
                                        </div>
                                        <div className='heart_ic'><img src={HeartIcon} /></div>
                                    </div>
                                    <div className='market_detail_price'>
                                        <p>Asking Price</p>
                                        <h4>$1,316,453.00</h4>
                                    </div>
                                    <div className='market_list_btn'>
                                        <Link to="/payment" className='btn btn_primary'>Buy Now</Link>
                                        <Button className='btn btn_outline' onClick={handleShow}>Offer a Bid</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='product_detail'>
                        <Row>
                            <Col md={8}>
                                <div className='product_detail_in content_gap'>
                                    <h2 className='heading_type2'>Product Detail</h2>
                                    <div className='product_detail_info'>
                                        <div className='product_detail_in_con locked_data'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet. veniam, quis nostrud exercitation. magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet. veniam, quis nostrud exercitation. magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation.</p>
                                        </div>
                                        <div className='locked_sec'>
                                            <div className='locked_sec_img'><img src={Lokedic} /></div>
                                            <div className='locked_sec_con'>
                                                <h3 className='heading_type2'>Unlock Product</h3>
                                                <p>You can get full access for this product</p>
                                            </div>
                                            <Button className='btn btn_primary'>Unlock Now</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='product_detail_assets'>
                                    <h2 className='heading_type2'>Assets Included</h2>
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
            
        </>
    );
}

export default LockedMarketplace;
