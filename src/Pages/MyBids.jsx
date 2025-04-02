import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import HeartIcon from "../assets/heartIc.png"
import DOMPurify from 'dompurify';

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
import { baseURL } from '../utils/AxiosInstance';
import { FirstLettCapital, GetFunction, handleimageUrl } from '../utils/ApiFunctions';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const MyBids = () => {

    const [page, setPage] = React.useState(1);
    const [limit] = React.useState(10);

    const [paginatio, setPagination] = useState({})
    const queryClient = useQueryClient()


    const getBids = async () => {
        const res = await GetFunction(`${baseURL}/bidListByUser?page=${page}&limit=${10}`);
        // console.log('res', res)
        if (res?.status == 200) {
            setPagination({
                currentPage: res?.data?.currentPage,
                totalPages: res?.data?.totalPages,
                totalRecords: res?.data?.totalRecords,
            });
            return res?.data?.data
        }
        else {
            toast.dismiss()
            toast.error(res?.data?.message)
        }
    };


    const { data, isLoading, refetch } = useQuery({
        queryKey: ['bids', page],
        queryFn: getBids,
        onError: (error) => {
            toast.error(error.message);
        },


    })

    const addToWishList = async (id) => {
        const res = await SubmitResponse(`${baseURL}/AddtowishList`, { businessId: id });
        if (res?.status == 200) {
            toast.dismiss()
            toast.success(res?.data?.message)
            queryClient.invalidateQueries("bids"); // Ref
        }
        else {
            toast.dismiss()
            toast.error(res?.data?.message)
        }
    }
    console.log('data', data)
    return (
        <>
            <div className='inner_head mb-0'>
                <Container>
                    <div className='inner_head_in'><h1 className='heading_type1 mb-0'>My Bids</h1></div>
                </Container>
            </div>

            <section className='market_list'>
                <Container>
                    <div className='market_list_in'>
                        <div className='market_list_itms bid_list_itms'>
                            {
                                data?.length > 0 ? data?.map((val, i) => (
                                    <div className='market_list_itm' key={i}>
                                        <div className='market_list_img'><div className='market_list_img_in'><img src={val?.businessId?.image ? handleimageUrl(val?.businessId?.image) : BusinessImg1} /></div></div>
                                        <div className='market_list_con'>
                                            <div className='market_list_con_in'>
                                                <div className='bid_data'>
                                                    <div className='bid_data_price market_list_rate'>
                                                        <p>Bid Price</p>
                                                        <h4>${val?.bidAmount}</h4>
                                                    </div>
                                                    {/* <div className='bid_status status_rejected'>Rejected</div> */}
                                                    <div className={val?.status == "accepted" ?
                                                        ' bid_status status_accepted' : val?.status == "rejected" ?
                                                            'status_rejected bid_status' :
                                                            " status_pending bid_status"}>{FirstLettCapital(val?.status)}</div>
                                                </div>
                                                <div className='market_list_info'>
                                                    <h3 className='heading_type2'>{val?.businessId?.title}</h3>
                                                    <p>
                                                        {DOMPurify.sanitize(val?.businessId?.description)
                                                            .replace(/<[^>]+>/g, '') // Remove HTML tags
                                                            .substring(0, 100)}
                                                        {val?.businessId?.description?.replace(/<[^>]+>/g, '').length > 100 ? '...' : ''}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='market_list_rates'>
                                                <div className='market_list_rate'>
                                                    <p>InnovaRate:</p>
                                                    <h4>{val?.businessId?.innovaRate}%</h4>
                                                </div>
                                                <div className='market_list_rate'>
                                                    <p>Market Readiness Rate:</p>
                                                    <h4>{val?.businessId?.marketReadiness}%</h4>
                                                </div>
                                                <div className='market_list_rate'>
                                                    <p>Market Growth:</p>
                                                    <h4><img src={GrowIc} /> {val?.businessId?.marketGrowth}%</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='market_list_right'>
                                            <div className='market_list_right_con'>
                                                <div className='market_list_right_con_in'>
                                                    <p>Asking price:</p>
                                                    <h4>${val?.businessId?.price}</h4>
                                                </div>
                                                {/* <div className='heart_ic cursor-pointer'
                                                    onClick={() => {
                                                        addToWishList(val?.businessId?._id)

                                                    }}
                                                >
                                                    {
                                                        val?.businessId?.wishlist ?
                                                            <img src={HeartIconFilled} />


                                                            :
                                                            <img src={HeartIcon} />
                                                    }
                                                </div> */}
                                            </div>
                                            <div className='market_list_right_meta'>
                                                <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                                <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                                <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                            </div>
                                            <div className='market_list_btn'><Link to={`/market-detail/${val?.businessId?._id}`} className='btn btn_primary'>Read More</Link></div>
                                        </div>
                                    </div>
                                )) :
                                    <>
                                        <center><h3>No Bids!</h3></center>
                                    </>
                            }


                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default MyBids;
