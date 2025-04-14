import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import HeartIcon from "../assets/heartIc.png"
import HeartIconFilled from "../assets/heartFilledIc.png"
import VerifiedIc from "../assets/verifiedIc.svg"
import NewIc from "../assets/newIc.svg"
import GrowIc from "../assets/grow_ic.svg"
import DOMPurify from 'dompurify';

import Agric1 from "../assets/agric1.svg"
import Agric2 from "../assets/agric2.svg"
import Agric3 from "../assets/agric3.svg"
import Lokedic from "../assets/lokedic.svg"
import Startupim1 from "../assets/startupim1.jpg"

import SearchIc from "../assets/searchIc.svg"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { baseURL } from "../utils/AxiosInstance";
import toast from "react-hot-toast";
import { GetFunction, handleimageUrl, SubmitResponse } from "../utils/ApiFunctions";
import Pagination from "../Component/Pagination";
import Loader from "../Component/Loader";

const Marketplace = () => {

    const validSubscriptionId = localStorage.getItem('subscriptionId');
    const subscriptionId = validSubscriptionId && validSubscriptionId !== 'null' ? validSubscriptionId : '';
    const [loader, setLoader] = useState(true)
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");
    const innovaRate = searchParams.get("innovaRate");
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const [page, setPage] = useState(1)
    const [categoryId, setcategoryId] = useState(category ? category : '')
    const [innova] = useState(innovaRate ? innovaRate : '')
    const [pagination, setPagination] = useState({})
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [categoryList, setCategoryList] = useState([]);
    const handleToggle = () => {
        document.body.classList.toggle("active_search");
    };


    const getBusinessList = async () => {
        const res = await GetFunction(`${baseURL}/businessList?userId=${token && userId ? userId : ""}&page=${page}&limit=10&search=${search}&categoryId=${categoryId}&minPrice=${minPrice ? minPrice : ''}&maxPrice=${maxPrice ? maxPrice : ''}&innovaRate=${innova}`);
        if (res?.status == 200) {
            setLoader(false)
            setPagination({
                totalRecords: res?.data?.totalRecords, totalPages:
                    res?.data?.totalPages
            })
            setList(res?.data?.data)
        }
        else {
            setLoader(false)

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
        getCategoryList()
        return () => {
            document.body.classList.remove("active_search");
        };
    }, [])
    useEffect(() => {
        getBusinessList()


    }, [page]);


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


    const handlePagination = (page) => {
        setPage(page);
    };
    if (loader) {
        return <Loader />;
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
                                <option value={''}>Pick a Category</option>
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
                            <Form.Control type='number' placeholder='$ Min Price'
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

                                type='number' placeholder='$ Max Price' />
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
                        <div className='results_found'>
                            {
                                pagination?.totalRecords > 0 &&
                                pagination?.totalRecords + " Startups available"
                            }
                        </div>
                        <div className='market_list_itms'>
                            {
                                list?.length > 0 ?
                                    list?.map((val, i) => (
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
                                                        {
                                                            !subscriptionId &&
                                                            <span className={"mb-3"}>
                                                                {DOMPurify.sanitize(val?.shortDescription)
                                                                    .replace(/<[^>]+>/g, '') // Remove HTML tags
                                                                    .substring(0, 40)}
                                                                {val?.shortDescription?.replace(/<[^>]+>/g, '').length > 40 ? '...' : ''}
                                                            </span>


                                                        }
                                                        <p className={subscriptionId ? "" : "locked_data"}>

                                                            {DOMPurify.sanitize(val?.shortDescription)
                                                                .replace(/<[^>]+>/g, '') // Remove HTML tags
                                                                .substring(0, 100)}
                                                            {val?.shortDescription?.replace(/<[^>]+>/g, '').length > 100 ? '...' : ''}
                                                        </p>
                                                        {subscriptionId ? "" :

                                                            <div className={"locked_btn"}>
                                                                <Link to="/buy-plan" className='btn btn_outline'><img src={Lokedic} /> Unlock Startup</Link>
                                                            </div>}
                                                    </div>
                                                </div>
                                                <div className='market_list_rates'>
                                                    <div className='market_list_rate'>
                                                        <p>InnovaRate:</p>
                                                        <h4>{val?.innovaRate || 0} %</h4>
                                                    </div>
                                                    <div className='market_list_rate'>
                                                        <p>Market Readiness Rate:</p>
                                                        <h4 className={subscriptionId ? "" : "locked_data"}>{val?.marketReadiness || 0} %</h4>
                                                    </div>
                                                    <div className='market_list_rate'>
                                                        <p>Market Growth:</p>
                                                        <h4 className={subscriptionId ? "" : "locked_data"}><img src={GrowIc} /> {val?.marketGrowth} %</h4>
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

                                                            if (!token) {

                                                                navigate('/login')
                                                            }
                                                            else {

                                                                addToWishList(val?._id)
                                                            }

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
                                    )) :
                                    <h3 className="my-5 nodata">
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
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Marketplace;
