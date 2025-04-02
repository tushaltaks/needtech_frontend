import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Button, Tabs, Tab } from 'react-bootstrap'
import HeartIcon from "../assets/heartIc.png"
import Startupim1 from "../assets/startupim1.jpg"
import DewberryLogo from "../assets/dewberry_logo.jpg"

import HeartIconFilled from "../assets/heartFilledIc.png"
import DOMPurify from 'dompurify';

import BusinessImg1 from "../assets/business_img1.jpg"
import VerifiedIc from "../assets/verifiedIc.svg"
import NewIc from "../assets/newIc.svg"
import GrowIc from "../assets/grow_ic.svg"
import Agric1 from "../assets/agric1.svg"
import Agric2 from "../assets/agric2.svg"
import Agric3 from "../assets/agric3.svg"
import Lokedic from "../assets/lokedic.svg"
import { Link } from 'react-router-dom';
import { GetFunction, handleimageUrl, SubmitResponse } from '../utils/ApiFunctions';
import { baseURL } from '../utils/AxiosInstance';
import toast from 'react-hot-toast';
import Loader from '../Component/Loader';

const MyWishlist = () => {

    const [key, setKey] = useState('buisness');
    const [loader, setLoader] = useState(true)


    const [page, setPage] = useState(1)

    const [paginatio, setPagination] = useState({})
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');



    const getBusinessList = async () => {
        const res = await GetFunction(`${baseURL}/userWishList?page=${page}&limit=10&search=${search}`);
        setLoader(false)

        if (res?.status == 200) {
            setPagination({
                totalRecords: res?.total, totalPages:
                    res?.totalPages
            })
            setList(res?.data?.data)
        }
        else {
            toast.error(res?.data?.message)
        }
    };

    useEffect(() => {
        getBusinessList()


    }, []);

    const addToWishList = async (id, type) => {
        if (type == 'buisness') {

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
        else {
            const res = await SubmitResponse(`${baseURL}/AddtowishList`, { proivider: id });
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
    }


    if (loader) {
        return <Loader />;
    }


    return (
        <>
            <div className='inner_head mb-2'>
                <Container>
                    <div className='inner_head_in'><h1 className='heading_type1 mb-0'>My Wishlist</h1></div>
                </Container>
            </div>
            <section className='market_list'>
                <Container>

                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="buisness" title="Buisness">

                            <div className='market_list_itms'>



                                {
                                    list?.[0]?.businessData?.length > 0 ? list?.[0]?.businessData?.map((val, i) => (
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
                                                        <p>
                                                            {DOMPurify.sanitize(val?.description)
                                                                .replace(/<[^>]+>/g, '') // Remove HTML tags
                                                                .substring(0, 100)}
                                                            {val?.description?.replace(/<[^>]+>/g, '').length > 100 ? '...' : ''}
                                                        </p>
                                                        {/* <div className=''>
                                                            <Link to="/" className='btn btn_outline'><img src={Lokedic} /> Unlock Startup</Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <div className='market_list_rates'>
                                                    <div className='market_list_rate'>
                                                        <p>InnovaRate:</p>
                                                        <h4>{val?.innovaRate || 0} %</h4>
                                                    </div>
                                                    <div className='market_list_rate'>
                                                        <p>Market Readiness Rate:</p>
                                                        <h4 className="">{val?.marketReadiness || 0} %</h4>
                                                    </div>
                                                    <div className='market_list_rate'>
                                                        <p>Market Growth:</p>
                                                        <h4 className=""><img src={GrowIc} /> {val?.marketGrowth} %</h4>
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
                                                            addToWishList(val?._id, 'buisness')

                                                        }}
                                                    >

                                                        <img src={HeartIconFilled} />



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
                                        <center className='nodata'>
                                            <h3>No Buisness Found!</h3>
                                        </center>
                                }

                            </div>
                        </Tab>
                        <Tab eventKey="providers" title="Providers">
                            <div className='market_list_in'>
                                <div className='market_list_itms serviceprovider_list'>
                                    {
                                        list?.[0]?.serviceProviderData?.length > 0 ? list?.[0]?.serviceProviderData?.map((val, i) => (
                                            <div className='market_list_itm' key={i}>
                                                <div className='market_list_img'><div className='market_list_img_in'><img src={handleimageUrl(val?.image)} /></div></div>
                                                <div className='market_list_con'>
                                                    <div className='market_list_con_in'>
                                                        <div className='market_meta'>
                                                            <div className='market_meta_itm'><div className='market_meta_itm_ic'>
                                                                <img src={VerifiedIc} />
                                                            </div><span>Verified</span></div>
                                                        </div>
                                                        <div className='market_list_info'>
                                                            <div className='user_detail'>
                                                                <h3 className='heading_type2 '>{val?.name}</h3>
                                                                <h4>{val?.jobTitle}</h4>
                                                            </div>
                                                            <p className=''>
                                                                <p>
                                                                    {DOMPurify.sanitize(val?.description)
                                                                        .replace(/<[^>]+>/g, '') // Remove HTML tags
                                                                        .substring(0, 100)}
                                                                    {val?.description?.replace(/<[^>]+>/g, '').length > 100 ? '...' : ''}
                                                                </p>
                                                            </p>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='market_list_right'>
                                                    <div className='market_list_right_con'>
                                                        <div className='heart_ic'
                                                            onClick={() => {
                                                                addToWishList(val?._id)

                                                            }}
                                                        >
                                                            <img src={HeartIconFilled} />

                                                        </div>
                                                    </div>
                                                    <div className='service_provider_s'>
                                                        <div className='service_provider_logo '>

                                                            <img src={val?.companyLogo ? handleimageUrl(val?.companyLogo) : DewberryLogo} />
                                                        </div>
                                                        <div className='service_provider_d'>
                                                            <p className=''>{val?.companyName}.</p>
                                                            <p>{val?.aboutCompany}</p>
                                                            <p>{val?.city}, {val?.country}</p>
                                                        </div>
                                                    </div>
                                                    <div className='market_list_btn'><Link to={`/service-provider-detail/${val?._id}`} className='btn btn_primary'>Read More</Link></div>
                                                </div>
                                            </div>
                                        ))
                                            :

                                            <center className='nodata'>
                                                <h3>No Service Provider Found!</h3>
                                            </center>
                                    }
                                </div>
                            </div>
                        </Tab>

                    </Tabs>




                </Container>
            </section>
        </>
    );
}

export default MyWishlist;
