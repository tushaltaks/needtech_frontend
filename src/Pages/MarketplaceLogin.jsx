import React, { useEffect } from "react";
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import HeartIcon from "../assets/heartIc.png"
import HeartIconFilled from "../assets/heartFilledIc.png"
import VerifiedIc from "../assets/verifiedIc.svg"
import NewIc from "../assets/newIc.svg"
import GrowIc from "../assets/grow_ic.svg"
import Agric1 from "../assets/agric1.svg"
import Agric2 from "../assets/agric2.svg"
import Agric3 from "../assets/agric3.svg"
import Lokedic from "../assets/lokedic.svg"
import Startupim1 from "../assets/startupim1.jpg"
import Startupim2 from "../assets/startupim2.jpg"
import Startupim3 from "../assets/startupim3.jpg"
import Startupim4 from "../assets/startupim4.jpg"
import Startupim5 from "../assets/startupim5.jpg"
import Startupim6 from "../assets/startupim6.jpg"
import SearchIc from "../assets/searchIc.svg"
import { Link } from 'react-router-dom';

const MarketplaceLogin = () => {
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
                    <div className='inner_head_in'><h1 className='heading_type1'>Startups Marketplace</h1></div>
                </Container>
            </div>
            <div className='mobile_search'><Container><div className='mobile_search_in btn btn_outline' onClick={handleToggle}>Search <img src={SearchIc}/></div></Container></div>
            <div className='innner_search'>
                <Container>
                    <Form>
                        <div className='innner_search_form'>
                            <div className='innner_search_itm innner_search_itm_big'>
                                <Form.Select aria-label="Default select example">
                                    <option>Pick a Category</option>
                                    <option value="1">Pick a Category</option>
                                    <option value="2">Pick a Category</option>
                                    <option value="3">Pick a Category</option>
                                </Form.Select>                                
                            </div>
                            <div className='innner_search_itm innner_search_itm_nm'>
                                <Form.Control type='text' placeholder='Search' />
                            </div>
                            <div className='innner_search_itm innner_search_itm_small'>
                                <Form.Control type='text' placeholder='Min Price' />
                            </div>
                            <div className='innner_search_itm innner_search_itm_small'>
                                <Form.Control type='text' placeholder='Max Price' />
                            </div>
                            <div className='innner_search_itm innner_search_itm_btn'>
                            <Button className="btn btn_primary" type="submit">Search</Button>
                            </div>
                        </div>
                    </Form>
                </Container>
            </div>
            <div className='seach_mobile'></div>
            <section className='market_list'>
                <Container>
                    <div className='market_list_in'>
                        <div className='results_found'>297 Startups available</div>
                        <div className='market_list_itms'>
                            <div className='market_list_itm'>
                                <div className='market_list_img'><div className='market_list_img_in'><img src={Startupim1} /></div></div>
                                <div className='market_list_con'>
                                    <div className='market_list_con_in'>
                                        <div className='market_meta'>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={NewIc} /></div><span>New Startup</span></div>
                                            <div className='market_meta_itm market_meta_itm_data'><span>Health & 2 more</span></div>
                                        </div>
                                        <div className='market_list_info'>
                                            <h3 className='heading_type2'>Novel Fat Formulation</h3>
                                            <p>A novel fat formulation enables tailored triglyceride compositions to enhance stability and functionality for food, pharmaceuticals, and cosmetics...</p>
                                            
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>79%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4>83%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4><img src={GrowIc} /> 9.3%</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='market_list_right'>
                                    <div className='market_list_right_con'>
                                        <div className='market_list_right_con_in'>
                                            <p>Asking price:</p>
                                            <h4>$59,700</h4>
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
                                <div className='market_list_img'><div className='market_list_img_in'><img src={Startupim2} /></div></div>
                                <div className='market_list_con'>
                                    <div className='market_list_con_in'>
                                        <div className='market_meta'>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={NewIc} /></div><span>New Startup</span></div>
                                            <div className='market_meta_itm market_meta_itm_data'><span>Cybersecurity & 3 more</span></div>
                                        </div>
                                        <div className='market_list_info'>
                                            <h3 className='heading_type2'>Dynamic Cybersecurity Management</h3>
                                            <p>A significant innovation in the field of cybersecurity through the implementation of AI-driven analytics tailored for dynamic, real-time threat detection...</p>
                                            
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>86%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4>91%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4><img src={GrowIc} /> 26.3%</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='market_list_right'>
                                    <div className='market_list_right_con'>
                                        <div className='market_list_right_con_in'>
                                            <p>Asking price:</p>
                                            <h4>$79,500</h4>
                                        </div>
                                        <div className='heart_ic'><img src={HeartIcon} /></div>
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
                                <div className='market_list_img'><div className='market_list_img_in'><img src={Startupim3} /></div></div>
                                <div className='market_list_con'>
                                    <div className='market_list_con_in'>
                                        <div className='market_meta'>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={NewIc} /></div><span>New Startup</span></div>
                                            <div className='market_meta_itm market_meta_itm_data'><span>Agriculture & 2 more</span></div>
                                        </div>
                                        <div className='market_list_info'>
                                            <h3 className='heading_type2'>Agribiotics System</h3>
                                            <p>An autonomous robotic system for comprehensive soil health diagnostics, integrating advanced sensors and AI for real-time analysis of moisture, pH, and...</p>
                                            
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>77%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4>80%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4><img src={GrowIc} /> 12.3%</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='market_list_right'>
                                    <div className='market_list_right_con'>
                                        <div className='market_list_right_con_in'>
                                            <p>Asking price:</p>
                                            <h4>$33,000</h4>
                                        </div>
                                        <div className='heart_ic'><img src={HeartIcon} /></div>
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
                                <div className='market_list_img'><div className='market_list_img_in'><img src={Startupim4} /></div></div>
                                <div className='market_list_con'>
                                    <div className='market_list_con_in'>
                                        <div className='market_meta'>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                            <div className='market_meta_itm market_meta_itm_data'><span>Fintech & 2 more</span></div>
                                        </div>
                                        <div className='market_list_info'>
                                            <h3 className='heading_type2'>Credit Card Fraud Detection</h3>
                                            <p>A system to detect fraudulent credit card activity by analyzing the location of in-person transactions. It identifies accurate merchant locations, calculates...</p>
                                            
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>74%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4>89%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4><img src={GrowIc} /> 15.3%</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='market_list_right'>
                                    <div className='market_list_right_con'>
                                        <div className='market_list_right_con_in'>
                                            <p>Asking price:</p>
                                            <h4>$61,500</h4>
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
                                <div className='market_list_img'><div className='market_list_img_in'><img src={Startupim5} /></div></div>
                                <div className='market_list_con'>
                                    <div className='market_list_con_in'>
                                        <div className='market_meta'>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                            <div className='market_meta_itm market_meta_itm_data'><span>Health & 3 more</span></div>
                                        </div>
                                        <div className='market_list_info'>
                                            <h3 className='heading_type2'>Indoor Air Purification Technology</h3>
                                            <p>An innovative approach to air purification. The system achieves continuous and efficient pathogen inactivation, enhances indoor air quality and has...</p>
                                            
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>75%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4>85%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4><img src={GrowIc} /> 10.3%</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='market_list_right'>
                                    <div className='market_list_right_con'>
                                        <div className='market_list_right_con_in'>
                                            <p>Asking price:</p>
                                            <h4>$43,000</h4>
                                        </div>
                                        <div className='heart_ic'><img src={HeartIcon} /></div>
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
                                <div className='market_list_img'><div className='market_list_img_in'><img src={Startupim6} /></div></div>
                                <div className='market_list_con'>
                                    <div className='market_list_con_in'>
                                        <div className='market_meta'>
                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                            <div className='market_meta_itm market_meta_itm_data'><span>Agriculture & 1 more</span></div>
                                        </div>
                                        <div className='market_list_info'>
                                            <h3 className='heading_type2'>Adaptive Separator Panels</h3>
                                            <p>Adaptive Separator Panels optimize perishable goods storage with customizable, removable panels that enhance airflow and liquid circulation in shipping...</p>
                                            
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>71%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4>67%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4><img src={GrowIc} /> 6.3%</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='market_list_right'>
                                    <div className='market_list_right_con'>
                                        <div className='market_list_right_con_in'>
                                            <p>Asking price:</p>
                                            <h4>$27,000</h4>
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

export default MarketplaceLogin;
