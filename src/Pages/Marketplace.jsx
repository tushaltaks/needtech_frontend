import React, { useEffect, useState } from "react";
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

import SearchIc from "../assets/searchIc.svg"
import { Link } from 'react-router-dom';
import { baseURL } from "../utils/AxiosInstance";
import toast from "react-hot-toast";
import { GetFunction, handleimageUrl, SubmitResponse } from "../utils/ApiFunctions";

const Marketplace = () => {

    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");
    const innovaRate = searchParams.get("innovaRate");


    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const [page, setPage] = useState(1)
    const [categoryId, setcategoryId] = useState(category ? category : '')
    const [innova] = useState(innovaRate ? innovaRate : '')
    const [paginatio, setPagination] = useState({})
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [categoryList, setCategoryList] = useState([]);
    const handleToggle = () => {
        document.body.classList.toggle("active_search");
    };



    const getBusinessList = async () => {
        const res = await GetFunction(`${baseURL}/businessList?userId=${token && userId ? userId : ""}&page=${page}&limit=10&search=${search}&categoryId=${categoryId}&minPrice=${minPrice}&maxPrice=${maxPrice}
            &innovaRate=${innova}`);
        if (res?.status == 200) {
            setPagination({
                totalRecords: res?.data?.totalRecords, totalPages:
                    res?.data?.totalPages
            })
            setList(res?.data?.data)
        }
        else {
            toast.error(res?.data?.message)
        }
    };
    const getCategoryList = async () => {
        const res = await GetFunction(`${baseURL}/getCategoryList`);

        if (res?.status == 200) {
            setCategoryList(res?.data)
        }
        else {
            toast.error(res?.data?.message)
        }
    };
    useEffect(() => {
        getBusinessList()
        getCategoryList()
        return () => {
            document.body.classList.remove("active_search");
        };
    }, []);

    const addToWishList = async (id) => {
        const res = await SubmitResponse(`${baseURL}/AddtowishList`, { businessId: id });
        if (res?.status == 200) {
            toast.dismiss()
            toast.success(res?.data?.message)
            getBusinessList()
        }
        else {
            toast.dismiss()
            toast.error(res?.data?.message)
        }
    }


    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in'><h1 className='heading_type1'>Startups Marketplace</h1></div>
                </Container>
            </div>
            <div className='mobile_search'><Container><div className='mobile_search_in btn btn_outline' onClick={handleToggle}>Search <img src={SearchIc} /></div></Container></div>
            <div className='innner_search'>
                <Container>

                    <div className='innner_search_form'>
                        <div className='innner_search_itm innner_search_itm_big'>
                            <Form.Select aria-label="Default select example"
                                value={categoryId}
                                onChange={(e) => {
                                    setcategoryId(e.target.value)
                                }}
                            >
                                <option>Pick a Category</option>
                                {categoryList &&
                                    categoryList?.map((item, index) => (
                                        <option key={index} value={item?._id}>{item?.title}</option>
                                    ))
                                }
                            </Form.Select>
                        </div>
                        <div className='innner_search_itm innner_search_itm_nm'>
                            <Form.Control type='text' placeholder='Search'
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                }}
                            />
                        </div>
                        <div className='innner_search_itm innner_search_itm_small'>
                            <Form.Control type='number' placeholder='Min Price'
                                value={minPrice}
                                onChange={(e) => {
                                    setMinPrice(e.target.value)
                                }}
                            />
                        </div>
                        <div className='innner_search_itm innner_search_itm_small'>
                            <Form.Control
                                value={maxPrice}
                                onChange={(e) => {
                                    setMaxPrice(e.target.value)
                                }}

                                type='number' placeholder='Max Price' />
                        </div>
                        <div className='innner_search_itm innner_search_itm_btn'>
                            <Button className="btn btn_primary"
                                onClick={getBusinessList}
                            >Search</Button>
                        </div>
                    </div>

                </Container>
            </div>
            <div className='seach_mobile'></div>
            <section className='market_list'>
                <Container>
                    <div className='market_list_in'>
                        <div className='results_found'>{paginatio?.totalRecords || 0} Startups available</div>
                        <div className='market_list_itms'>
                            {
                                list && list?.map((val, i) => (
                                    <div className='market_list_itm' key={i}>
                                        <div className='market_list_img'><div className='market_list_img_in'><img src={val?.image ? handleimageUrl(val?.image) : Startupim1} /></div></div>
                                        <div className='market_list_con'>
                                            <div className='market_list_con_in'>
                                                <div className='market_meta'>
                                                    <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                                    <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={NewIc} /></div><span>New Startup</span></div>
                                                    <div className='market_meta_itm market_meta_itm_data'>
                                                        <span>
                                                            {val?.businessCategory?.[0]?.title}
                                                            {val?.businessCategory?.length > 1 && ` & ${val.businessCategory.length - 1} more`}
                                                        </span>

                                                    </div>
                                                </div>
                                                <div className='market_list_info'>
                                                    <h3 className='heading_type2'>{val?.title}</h3>
                                                    <p className="locked_data">
                                                        {val?.description}
                                                    </p>
                                                    <div className='locked_btn'>
                                                        <Link to="/" className='btn btn_outline'><img src={Lokedic} /> Unlock Startup</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='market_list_rates'>
                                                <div className='market_list_rate'>
                                                    <p>InnovaRate:</p>
                                                    <h4>{val?.innovaRate || 0} %</h4>
                                                </div>
                                                <div className='market_list_rate'>
                                                    <p>Market Readiness Rate:</p>
                                                    <h4 className="locked_data">{val?.marketReadiness || 0} %</h4>
                                                </div>
                                                <div className='market_list_rate'>
                                                    <p>Market Growth:</p>
                                                    <h4 className="locked_data"><img src={GrowIc} /> {val?.marketGrowth} %</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='market_list_right'>
                                            <div className='market_list_right_con'>
                                                <div className='market_list_right_con_in'>
                                                    <p>Asking price:</p>
                                                    <h4>$ {val?.price}</h4>
                                                </div>
                                                <div className='heart_ic cursor-pointer'
                                                    onClick={() => {
                                                        addToWishList(val?._id)

                                                    }}
                                                >
                                                    {
                                                        val?.wishlist ?
                                                            <img src={HeartIconFilled} />


                                                            :
                                                            <img src={HeartIcon} />
                                                    }
                                                </div>
                                            </div>
                                            <div className='market_list_right_meta'>
                                                <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                                <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                                <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                            </div>
                                            <div className='market_list_btn'><Link to={`/market-detail/${val?._id}`} className='btn btn_primary'>Read More</Link></div>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* <div className='market_list_itm'>
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
                                            <p className="locked_data">A significant innovation in the field of cybersecurity through the implementation of AI-driven analytics tailored for dynamic, real-time threat detection...</p>
                                            <div className='locked_btn'>
                                                <Link to="/" className='btn btn_outline'><img src={Lokedic} /> Unlock Startup</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>86%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4 className="locked_data">91%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4 className="locked_data"><img src={GrowIc} /> 26.3%</h4>
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
                                    <div className='market_list_btn'><Link to="/market-detail" className='btn btn_primary'>Read More</Link></div>
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
                                            <p className='locked_data'>An autonomous robotic system for comprehensive soil health diagnostics, integrating advanced sensors and AI for real-time analysis of moisture, pH, and...</p>
                                            <div className='locked_btn'>
                                                <Link to="/" className='btn btn_outline'><img src={Lokedic} /> Unlock Startup</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>77%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4 className="locked_data">80%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4 className="locked_data"><img src={GrowIc} /> 12.3%</h4>
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
                                    <div className='market_list_btn'><Link to="/market-detail" className='btn btn_primary'>Read More</Link></div>
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
                                            <p className="locked_data">A system to detect fraudulent credit card activity by analyzing the location of in-person transactions. It identifies accurate merchant locations, calculates...</p>
                                            <div className='locked_btn'>
                                                <Link to="/" className='btn btn_outline'><img src={Lokedic} /> Unlock Startup</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>74%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4 className="locked_data">89%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4 className="locked_data"><img src={GrowIc} /> 15.3%</h4>
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
                                    <div className='market_list_btn'><Link to="/market-detail" className='btn btn_primary'>Read More</Link></div>
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
                                            <p className='locked_data'>An innovative approach to air purification. The system achieves continuous and efficient pathogen inactivation, enhances indoor air quality and has...</p>
                                            <div className='locked_btn'>
                                                <Link to="/" className='btn btn_outline'><img src={Lokedic} /> Unlock Startup</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>75%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4 className='locked_data'>85%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4 className='locked_data'><img src={GrowIc} /> 10.3%</h4>
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
                                    <div className='market_list_btn'><Link to="/market-detail" className='btn btn_primary'>Read More</Link></div>
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
                                            <p className='locked_data'>Adaptive Separator Panels optimize perishable goods storage with customizable, removable panels that enhance airflow and liquid circulation in shipping...</p>
                                            <div className='locked_btn'>
                                                <Link to="/" className='btn btn_outline'><img src={Lokedic} /> Unlock Startup</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='market_list_rates'>
                                        <div className='market_list_rate'>
                                            <p>InnovaRate:</p>
                                            <h4>71%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Readiness Rate:</p>
                                            <h4 className='locked_data'>67%</h4>
                                        </div>
                                        <div className='market_list_rate'>
                                            <p>Market Growth:</p>
                                            <h4 className='locked_data'><img src={GrowIc} /> 6.3%</h4>
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
                                    <div className='market_list_btn'><Link to="/market-detail" className='btn btn_primary'>Read More</Link></div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Marketplace;
