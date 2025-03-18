import React, { useEffect } from "react";
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import HeartIcon from "../assets/heartIc.png"
import VerifiedIc from "../assets/verifiedIc.svg"
import Lokedic from "../assets/lokedic.svg"
import ProfilePhoto from "../assets/profilePhoto.jpg"
import DewberryLogo from "../assets/dewberry_logo.jpg"
import SearchIc from "../assets/searchIc.svg"
import { Link } from 'react-router-dom';

const ServiceProvider = () => {
    const handleToggle = () => {
            document.body.classList.toggle("active_search");
          };
        
          useEffect(() => {
            // Cleanup to ensure no unintended behavior on unmount
            return () => {
              document.body.classList.remove("active_search");
            };
          }, []);
    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in'><h1 className='heading_type1'>Professional Services</h1></div>
                </Container>
            </div>
            <div className='mobile_search'><Container><div className='mobile_search_in btn btn_outline' onClick={handleToggle}>Search <img src={SearchIc}/></div></Container></div>
            <div className='innner_search servidersearch'>
                <Container>
                    <Form>
                        <div className='innner_search_form'>
                            <div className='innner_search_itm'>
                                <Form.Select aria-label="Default select example">
                                    <option>Select a Professional Service</option>
                                    <option value="1">Professional Service</option>
                                    <option value="2">Professional Service</option>
                                    <option value="3">Professional Service</option>
                                </Form.Select>                                
                            </div>
                            <div className='innner_search_itm innner_search_itm_btn'>
                            <Button className="btn btn_primary" type="submit">Search</Button>
                            </div>
                        </div>
                    </Form>
                </Container>
            </div>

            <section className='market_list'>
                <Container>
                    <div className='market_list_in'>
                        <div className='market_list_itms serviceprovider_list'>
                            <div className='market_list_itm'>
                                <div className='market_list_img'><div className='market_list_img_in'><img src={ProfilePhoto} /></div></div>
                                <div className='market_list_con'>
                                    <div className='market_list_con_in'>
                                        <div className='market_meta'>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                        </div>
                                        <div className='market_list_info'>
                                            <div className='user_detail'>
                                                <h3 className='heading_type2 locked_data'>John Smith</h3>
                                                <h4>Electrical Engineer</h4>
                                            </div>                                            
                                            <p className='locked_data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className='locked_btn'>
                                                <Link to="/" className='btn btn_outline'><img src={Lokedic} /> Unlock Professional</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='market_list_right'>
                                    <div className='market_list_right_con'>
                                        <div className='heart_ic'><img src={HeartIcon} /></div>
                                    </div>
                                    <div className='service_provider_s'>
                                        <div className='service_provider_logo locked_data'><img src={DewberryLogo}/></div>
                                        <div className='service_provider_d'>
                                            <p className='locked_data'>Dewberry Ltd.</p>
                                            <p>Engineering Firm</p>
                                            <p>Paris, France</p>
                                        </div>
                                    </div>
                                    <div className='market_list_btn'><Link to="/service-provider-detail" className='btn btn_primary'>Read More</Link></div>
                                </div>
                            </div>
                            <div className='market_list_itm'>
                                <div className='market_list_img'><div className='market_list_img_in'><img src={ProfilePhoto} /></div></div>
                                <div className='market_list_con'>
                                    <div className='market_list_con_in'>
                                        <div className='market_meta'>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                        </div>
                                        <div className='market_list_info'>
                                            <div className='user_detail'>
                                                <h3 className='heading_type2 locked_data'>John Smith</h3>
                                                <h4>Electrical Engineer</h4>
                                            </div>                                            
                                            <p className='locked_data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className='locked_btn'>
                                                <Link to="/" className='btn btn_outline'><img src={Lokedic} /> Unlock Professional</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='market_list_right'>
                                    <div className='market_list_right_con'>
                                        <div className='heart_ic'><img src={HeartIcon} /></div>
                                    </div>
                                    <div className='service_provider_s'>
                                        <div className='service_provider_logo locked_data'><img src={DewberryLogo}/></div>
                                        <div className='service_provider_d'>
                                            <p className='locked_data'>Dewberry Ltd.</p>
                                            <p>Engineering Firm</p>
                                            <p>Paris, France</p>
                                        </div>
                                    </div>
                                    <div className='market_list_btn'><Link to="/service-provider-detail" className='btn btn_primary'>Read More</Link></div>
                                </div>
                            </div>
                            <div className='market_list_itm'>
                                <div className='market_list_img'><div className='market_list_img_in'><img src={ProfilePhoto} /></div></div>
                                <div className='market_list_con'>
                                    <div className='market_list_con_in'>
                                        <div className='market_meta'>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                        </div>
                                        <div className='market_list_info'>
                                            <div className='user_detail'>
                                                <h3 className='heading_type2 locked_data'>John Smith</h3>
                                                <h4>Electrical Engineer</h4>
                                            </div>                                            
                                            <p className='locked_data locked_data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className='locked_btn'>
                                                <Link to="/" className='btn btn_outline'><img src={Lokedic} /> Unlock Professional</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='market_list_right'>
                                    <div className='market_list_right_con'>
                                        <div className='heart_ic'><img src={HeartIcon} /></div>
                                    </div>
                                    <div className='service_provider_s'>
                                        <div className='service_provider_logo locked_data'><img src={DewberryLogo}/></div>
                                        <div className='service_provider_d'>
                                            <p className='locked_data'>Dewberry Ltd.</p>
                                            <p>Engineering Firm</p>
                                            <p>Paris, France</p>
                                        </div>
                                    </div>
                                    <div className='market_list_btn'><Link to="/service-provider-detail" className='btn btn_primary'>Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default ServiceProvider;
