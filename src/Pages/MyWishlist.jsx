import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
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
import { Link } from 'react-router-dom';

const MyWishlist = () => {
    return (
        <>
            <div className='inner_head mb-2'>
                <Container>
                    <div className='inner_head_in'><h1 className='heading_type1 mb-0'>My Wishlist</h1></div>
                </Container>
            </div>
            <section className='market_list'>
                <Container>
                    <div className='market_list_in'>
                        <div className='market_list_itms'>
                            <div className='market_list_itm'>
                                <div className='market_list_img'><div className='market_list_img_in'><img src={BusinessImg1} /></div></div>
                                <div className='market_list_con'>
                                    <div className='market_list_con_in'>
                                        <div className='market_meta'>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={NewIc} /></div><span>New Startup</span></div>
                                            <div className='market_meta_itm market_meta_itm_data'><span>Business & 3 more </span></div>
                                        </div>
                                        <div className='market_list_info'>
                                            <h3 className='heading_type2'>Cleaning Products, Lifestyle, Personal Care</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>74%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4>87%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4><img src={GrowIc} /> 4.3%</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='market_list_right'>
                                    <div className='market_list_right_con'>
                                        <div className='market_list_right_con_in'>
                                            <p>Asking price:</p>
                                            <h4>$37,700</h4>
                                        </div>
                                        <div className='heart_ic'><img src={HeartIconFilled} /></div>
                                    </div>
                                    <div className='market_list_right_meta'>
                                        <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                    </div>
                                    <div className='market_list_btn'><Link to="/market-detail-login" className='btn btn_primary'>Read More</Link></div>
                                </div>
                            </div>
                            <div className='market_list_itm'>
                                <div className='market_list_img'><div className='market_list_img_in'><img src={BusinessImg1} /></div></div>
                                <div className='market_list_con'>
                                    <div className='market_list_con_in'>
                                        <div className='market_meta'>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={NewIc} /></div><span>New Startup</span></div>
                                            <div className='market_meta_itm market_meta_itm_data'><span>Business & 3 more </span></div>
                                        </div>
                                        <div className='market_list_info'>
                                            <h3 className='heading_type2'>Cleaning Products, Lifestyle, Personal Care</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>74%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4>87%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4><img src={GrowIc} /> 4.3%</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='market_list_right'>
                                    <div className='market_list_right_con'>
                                        <div className='market_list_right_con_in'>
                                            <p>Asking price:</p>
                                            <h4>$37,700</h4>
                                        </div>
                                        <div className='heart_ic'><img src={HeartIconFilled} /></div>
                                    </div>
                                    <div className='market_list_right_meta'>
                                        <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                    </div>
                                    <div className='market_list_btn'><Link to="/market-detail-login" className='btn btn_primary'>Read More</Link></div>
                                </div>
                            </div>
                            <div className='market_list_itm'>
                                <div className='market_list_img'><div className='market_list_img_in'><img src={BusinessImg1} /></div></div>
                                <div className='market_list_con'>
                                    <div className='market_list_con_in'>
                                        <div className='market_meta'>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={NewIc} /></div><span>New Startup</span></div>
                                            <div className='market_meta_itm market_meta_itm_data'><span>Business & 3 more </span></div>
                                        </div>
                                        <div className='market_list_info'>
                                            <h3 className='heading_type2'>Cleaning Products, Lifestyle, Personal Care</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>74%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4>87%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4><img src={GrowIc} /> 4.3%</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='market_list_right'>
                                    <div className='market_list_right_con'>
                                        <div className='market_list_right_con_in'>
                                            <p>Asking price:</p>
                                            <h4>$37,700</h4>
                                        </div>
                                        <div className='heart_ic'><img src={HeartIconFilled} /></div>
                                    </div>
                                    <div className='market_list_right_meta'>
                                        <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                    </div>
                                    <div className='market_list_btn'><Link to="/market-detail-login" className='btn btn_primary'>Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default MyWishlist;
