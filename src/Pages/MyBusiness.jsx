import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import DOMPurify from 'dompurify';

import VerifiedIc from "../assets/verifiedIc.svg"
import NewIc from "../assets/newIc.svg"
import GrowIc from "../assets/grow_ic.svg"
import Agric1 from "../assets/agric1.svg"
import Agric2 from "../assets/agric2.svg"
import Agric3 from "../assets/agric3.svg"
import Startupim1 from "../assets/startupim1.jpg"
import { Link } from 'react-router-dom';
import { baseURL } from "../utils/AxiosInstance";
import toast from "react-hot-toast";
import Pagination from "../Component/Pagination";
import { GetFunction, handleimageUrl } from "../utils/ApiFunctions";

const MyBusiness = () => {
    const [page, setPage] = useState(1)
    const [limit] = useState(10)
    const [pagination, setPagination] = useState({})
    const [list, setList] = useState([]);
    const getBusinessList = async () => {
        const res = await GetFunction(`${baseURL}/myBuisness?page=${page}&limit=${limit}`);
        console.log(res)
        if (res?.status == 200) {
            setPagination({
                totalRecords: res?.data?.pagination?.totalRecords, totalPages:
                    res?.data?.pagination?.totalPages
            })
            setList(res?.data?.data)
        }
        else {
            toast.error(res?.data?.message)
        }
    };

    useEffect(() => {
        getBusinessList()
    }, [page])

    const handlePagination = (page) => {
        setPage(page);
    };
    console.log('list', list)
    return (
        <>
            <div className='inner_head mb-0'>
                <Container>
                    <div className='inner_head_in'><h1 className='heading_type1 mb-0'>My Startups</h1></div>
                </Container>
            </div>
            <div className='seach_mobile'></div>
            <section className='market_list'>
                {/* <Container>
                    <div className='market_list_in'>
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
                                            <p>Bought price:</p>
                                            <h4>$59,700</h4>
                                        </div>
                                        <div className='heart_ic'><img src={HeartIconFilled} /></div>
                                    </div>
                                    <div className='market_list_right_meta'>
                                        <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                    </div>
                                    <div className='market_list_btn'><Link to="/business-detail" className='btn btn_primary'>Read More</Link></div>
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
                                            <p>Bought price:</p>
                                            <h4>$79,500</h4>
                                        </div>
                                        <div className='heart_ic'><img src={HeartIcon} /></div>
                                    </div>
                                    <div className='market_list_right_meta'>
                                        <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                    </div>
                                    <div className='market_list_btn'><Link to="/business-detail" className='btn btn_primary'>Read More</Link></div>
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
                                            <p>Bought price:</p>
                                            <h4>$33,000</h4>
                                        </div>
                                        <div className='heart_ic'><img src={HeartIcon} /></div>
                                    </div>
                                    <div className='market_list_right_meta'>
                                        <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                    </div>
                                    <div className='market_list_btn'><Link to="/business-detail" className='btn btn_primary'>Read More</Link></div>
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
                                            <p>Bought price:</p>
                                            <h4>$61,500</h4>
                                        </div>
                                        <div className='heart_ic'><img src={HeartIconFilled} /></div>
                                    </div>
                                    <div className='market_list_right_meta'>
                                        <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                    </div>
                                    <div className='market_list_btn'><Link to="/business-detail" className='btn btn_primary'>Read More</Link></div>
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
                                            <p>Bought price:</p>
                                            <h4>$43,000</h4>
                                        </div>
                                        <div className='heart_ic'><img src={HeartIcon} /></div>
                                    </div>
                                    <div className='market_list_right_meta'>
                                        <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                    </div>
                                    <div className='market_list_btn'><Link to="/business-detail" className='btn btn_primary'>Read More</Link></div>
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
                                            <p>Bought price:</p>
                                            <h4>$27,000</h4>
                                        </div>
                                        <div className='heart_ic'><img src={HeartIconFilled} /></div>
                                    </div>
                                    <div className='market_list_right_meta'>
                                        <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                        <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                    </div>
                                    <div className='market_list_btn'><Link to="/business-detail" className='btn btn_primary'>Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container> */}

                <Container>

                    <div className='market_list_itms'>
                        {
                            list?.length > 0 ?
                                list?.map(({ businessId }, i) => (
                                    <div className='market_list_itm' key={i}>
                                        <div className='market_list_img'><div className='market_list_img_in'><img src={businessId?.image ? handleimageUrl(businessId?.image) : Startupim1} /></div></div>
                                        <div className='market_list_con'>
                                            <div className='market_list_con_in'>
                                                <div className='market_meta'>
                                                    <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                                    <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={NewIc} /></div><span>New Startup</span></div>
                                                    <div className='market_meta_itm market_meta_itm_data'>
                                                        <span>
                                                            {businessId?.businessCategory?.[0]?.title}
                                                            {businessId?.businessCategory?.length > 1 && ` & ${businessId.businessCategory.length - 1} more`}
                                                        </span>

                                                    </div>
                                                </div>
                                                <div className='market_list_info'>
                                                    <h3 className='heading_type2'>{businessId?.title}</h3>


                                                    <p>
                                                        {DOMPurify.sanitize(businessId?.description)?.replace(/<[^>]+>/g, '') // Remove HTML tags
                                                            .substring(0, 100)}
                                                        {businessId?.description?.replace(/<[^>]+>/g, '').length > 100 ? '...' : ''}
                                                    </p>

                                                </div>
                                            </div>
                                            <div className='market_list_rates'>
                                                <div className='market_list_rate'>
                                                    <p>InnovaRate:</p>
                                                    <h4>{businessId?.innovaRate || 0} %</h4>
                                                </div>
                                                <div className='market_list_rate'>
                                                    <p>Market Readiness Rate:</p>
                                                    <h4 className=" ">{businessId?.marketReadiness || 0} %</h4>
                                                </div>
                                                <div className='market_list_rate'>
                                                    <p>Market Growth:</p>
                                                    <h4 className=""><img src={GrowIc} /> {businessId?.marketGrowth} %</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='market_list_right'>
                                            <div className='market_list_right_con'>
                                                <div className='market_list_right_con_in'>
                                                    <p>Asking price:</p>
                                                    <h4>$ {businessId?.price}</h4>
                                                </div>

                                            </div>
                                            <div className='market_list_right_meta'>
                                                <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                                <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                                <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                            </div>
                                            <div className='market_list_btn'><Link to={`/market-detail/${businessId?._id}`} className='btn btn_primary'>Read More</Link></div>
                                        </div>
                                    </div>
                                )) :
                                <h3 className="my-5">
                                    <center>No Businesses Found!</center>
                                </h3>
                        }


                    </div>
                    {
                        list?.length > 0 &&
                        <Pagination
                            current={page}
                            total={pagination?.totalPages}
                            pagination={handlePagination}
                        />
                    }

                </Container>
            </section>
        </>
    );
}

export default MyBusiness;
