import React, { use, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BackIc from "../assets/backIc.svg"
import HeartIcon from "../assets/heartIc.png"
import HeartIconFilled from "../assets/heartFilledIc.png"
import Businessic from "../assets/businessic.svg"


import BusinessImg1 from "../assets/business_img1.jpg"
import VerifiedIc from "../assets/verifiedIc.svg"
import NewIc from "../assets/newIc.svg"
import GrowIc from "../assets/grow_ic.svg"
import Agric1 from "../assets/agric1.svg"
import Agric2 from "../assets/agric2.svg"
import Agric3 from "../assets/agric3.svg"
import Lokedic from "../assets/lokedic.svg"
import Logo_approved from "../assets/logo_approved.png"
import OfferBid from '../Component/Modals/OfferBid';
import { FirstLettCapital, GetFunction, handleimageUrl, SubmitResponse } from '../utils/ApiFunctions';
import { baseURL } from '../utils/AxiosInstance';
import toast from 'react-hot-toast';
import moment from 'moment';
import BidSuccess from '../Component/Modals/BidSuccess';

const MarketDetail = () => {
    const token = localStorage.getItem('token')
    const validSubscriptionId = localStorage.getItem('subscriptionId');
    const subscriptionId = validSubscriptionId && validSubscriptionId !== 'null' ? validSubscriptionId : '';
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')
    const [buisnessDate, setBuisnessdate] = useState('')
    const [bid, setBid] = useState()
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [bidPrice, setBidPrice] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [business, setBusiness] = useState({})
    const { id } = useParams()
    const getSingleBusiness = async () => {
        const data = {
            userId: localStorage?.getItem('userId') || ""
        }
        const res = await SubmitResponse(`${baseURL}/businessDetails/${id}`, data);
        if (res?.status == 200) {
            if (res?.data?.data?.businessStarted) {

                const fromDate = moment(res?.data?.data?.businessStarted, 'DD-MM-YYYY');
                const toDate = moment(); // Current date

                const years = toDate.diff(fromDate, 'years');
                const months = toDate.diff(fromDate.add(years, 'years'), 'months');

                const result = `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;

                setBuisnessdate(result)
            }
            setBusiness(res?.data?.data)
        }
        else {
            toast.error(res?.data?.message)
        }
    };
    useEffect(() => {
        getSingleBusiness()
    }, [])

    const addToWishList = async () => {
        const res = await SubmitResponse(`${baseURL}/AddtowishList`, { businessId: id });
        if (res?.status == 200) {
            toast.dismiss()
            toast.success(res?.data?.message)
            getSingleBusiness()
        }
        else {
            toast.dismiss()
            toast.error(res?.data?.message)
        }
    }


    const RequestBid = async (values) => {

        if (business?.price <= values?.price) {
            toast.error("You Cannot Bid More Than the Price")
            return
        }
        const res = await SubmitResponse(`${baseURL}/requestBidByUser`, {
            businessId: id,
            bidAmount: values?.price
        });
        setBidPrice(values?.price)

        if (res?.status == 200) {
            toast.dismiss()
            // toast.success(res?.data?.message)
            getSingleBusiness()
            handleClose()
            setShow1(true)
        }
        else {
            handleClose()

            toast.dismiss()
            toast.error(res?.message)
        }
    }


    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in'>
                        <Link to="/marketplace"><img src={BackIc} /> Back to Products</Link>
                    </div>
                </Container>
            </div>
            <section className='market_detail'>
                <Container>
                    <div className='market_detail_in'>
                        <div className='market_meta'>
                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={NewIc} /></div><span>New Startup</span></div>
                            <div className='market_meta_itm market_meta_itm_data'><span>{business && business?.businessCategory?.map((val) => val?.title).join(', ')}</span></div>
                        </div>
                        <div className='market_detail_heading'>
                            <h1 className='heading_type1'>{business?.title}</h1>
                        </div>
                        <div className='market_detail_s'>
                            <Row>
                                <Col md={8}>
                                    <div className='market_detail_s_in'>
                                        <div className='market_detail_img'>
                                            <div className='market_detail_img_in'>
                                                <img src={business?.image ? handleimageUrl(business?.image) : BusinessImg1} />
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
                                                <h4>{business?.innovaRate}%</h4>
                                            </div>
                                            <div className='market_list_rate'>
                                                <p>Market Readiness Rate:</p>
                                                <h4 className=''>{business?.marketReadiness}%</h4>
                                                {/* <h4 className='locked_data'>{business?.marketReadiness}%</h4> */}
                                            </div>
                                            <div className='market_list_rate'>
                                                <p>Market Growth:</p>
                                                <h4 className=''>{business?.marketGrowth}% <img src={GrowIc} /></h4>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                {business?.buisnessOwnedBy == userId && token ?
                                    <Col md={4}>
                                        <div className='market_detail_right'>
                                            <div className='market_detail_right_con'>
                                                <div className='market_detail_right_in'>
                                                    <div className='market_detail_logo'><img src={Logo_approved} /></div>

                                                </div>
                                                <div className='heart_ic'><img src={HeartIcon} /></div>
                                            </div>
                                            <div className='acquired_sec'>
                                                <div className='acquired_sec_img'><img src={Businessic} /></div>
                                                <h2 className='acquired_heading'>Acquired</h2>
                                                <p className='acquired_date'>{moment(business?.buisnessPurchasedDate).format('MMM DD, YYYY')}</p>
                                            </div>
                                        </div>

                                    </Col>
                                    : <Col md={4}>
                                        <div className='market_detail_right'>
                                            <div className='market_detail_right_con'>
                                                <div className='market_detail_right_in'>
                                                    <div className='market_detail_logo'><img src={Logo_approved} /></div>
                                                    <div className='market_detail_time'>
                                                        <p>Business Started</p>
                                                        <h4>({buisnessDate ? buisnessDate : 'N/A'})</h4>
                                                    </div>
                                                </div>
                                                <div className='heart_ic' onClick={
                                                    () => {
                                                        if (!token) {
                                                            navigate('/login')
                                                        }
                                                        else {
                                                            addToWishList(business?._id)
                                                        }
                                                    }
                                                } >
                                                    {
                                                        business?.wishlist ?
                                                            <img src={HeartIconFilled} />
                                                            :
                                                            <img src={HeartIcon} />


                                                    }
                                                </div>
                                            </div>

                                            <div>
                                                <div className='market_detail_price'>
                                                    <p>Asking Price</p>
                                                    <h4>${business?.price}</h4>
                                                </div>
                                                {token &&
                                                    subscriptionId ?
                                                    <div className='market_list_btn'>
                                                        <Link to={`/payment/${id}`} className='btn btn_primary'>Buy Now</Link>
                                                        {business?.bidDetailReletedtoBusiness == null &&
                                                            <Button className='btn btn_outline'
                                                                onClick={() => {
                                                                    handleShow()
                                                                }}>Offer a Bid</Button>}
                                                    </div>
                                                    :
                                                    <div className='market_list_btn'>
                                                        <Link to={`/buy-plan`} className='btn btn_primary'>Buy Now</Link>
                                                        {business?.bidDetailReletedtoBusiness == null &&
                                                            <Button className='btn btn_outline'
                                                                onClick={() => {
                                                                    navigate('/buy-plan')
                                                                }}>Offer a Bid</Button>}
                                                    </div>

                                                }

                                                {
                                                    token && business?.bidDetailReletedtoBusiness &&
                                                    <>
                                                        <div className='bids_meta'>
                                                            <div className='bids_meta_price market_list_rate'>
                                                                <p>Bid price:</p>
                                                                <h4>${business?.bidDetailReletedtoBusiness?.bidAmount}</h4>
                                                            </div>
                                                            <div class={business?.bidDetailReletedtoBusiness?.status == 'pending' ?
                                                                'bid_status status_pending' :
                                                                business?.bidDetailReletedtoBusiness?.status == 'accepted' ?
                                                                    'bid_status status_accepted' :
                                                                    'bid_status status_rejected'

                                                            }>{FirstLettCapital(business?.bidDetailReletedtoBusiness?.status)}</div>
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </Col>}
                            </Row>
                        </div>
                        {/* <div className='product_detail'>
                            <Row>
                                <Col md={8}>
                                    <div className='product_detail_in content_gap'>
                                        <h2 className='heading_type2'>Product Detail</h2>
                                        <p className='locked_data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet. veniam, quis nostrud exercitation. magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation.</p>
                                        <p className='locked_data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet. veniam, quis nostrud exercitation. magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation.</p>
                                        <div className='locked_sec'>
                                            <div className='locked_sec_img'><img src={Lokedic} /></div>
                                            <div className='locked_sec_con'>
                                                <h2 className='heading_type2'>Unlock Product</h2>
                                                <p>You can get full access for this product</p>
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
                        </div> */}

                        {token && subscriptionId ?

                            <div className='product_detail'>
                                <Row>
                                    <Col md={8}>
                                        <div className='product_detail_in content_gap'>
                                            <h2 className='heading_type2'>Product Detail</h2>
                                            <p dangerouslySetInnerHTML={{
                                                __html: business?.description
                                            }} >

                                            </p>
                                            <h2 className='heading_type2'>Abstract</h2>
                                            <p>{
                                                business?.abstract ? business?.abstract : 'N/A'
                                            }</p>
                                            <h2 className='heading_type2'>Methodology</h2>
                                            <p >
                                                {
                                                    business?.methodology ? business?.methodology : 'N/A'
                                                }
                                            </p>
                                            <h2 className='heading_type2'>Technology</h2>
                                            <p >
                                                {
                                                    business?.technology ? business?.technology : 'N/A'
                                                }
                                            </p>
                                            <h2 className='heading_type2'>Features</h2>
                                            <ul className='list_type1'>
                                                {
                                                    business?.features ? business?.features?.map((val, i) => (

                                                        <li key={i}>
                                                            {val}
                                                        </li>
                                                    )) : ''
                                                }

                                            </ul>
                                            <h2 className='heading_type2'>Practical Use</h2>
                                            <ul className='list_type1'>
                                                <li>Food Industry: The composition can serve as a healthier alternative to hydrogenated fats in processed foods, offering similar textural properties without introducing trans fats.</li>
                                                <li>Pharmaceuticals: Its stable nature makes it suitable for use as an excipient in drug formulations, enhancing the delivery and stability of active compounds.</li>
                                                <li>Cosmetics: This composition provides a robust base in skin care and cosmetic products, enhancing product texture and delivering consistent sensory qualities.</li>
                                            </ul>
                                            <p>Overall, this innovative Fat Formulation provides a versatile, stable, and customizable platform suitable for a broad range of applications, addressing both functional needs and health considerations.</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='product_detail_assets'>
                                            <h2 className='heading_type2'>Assets Included</h2>
                                            <ul className='list_type1'>
                                                <li>Business Plan</li>
                                                <li>Executive Summary</li>
                                                <li>Provisional Patent</li>
                                                <li>FTO Certificate</li>
                                                <li>3rd Party Valuation</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div> :

                            <div className='product_detail'>
                                <Row>
                                    <Col md={8}>
                                        <div className='product_detail_in content_gap'>
                                            <h2 className='heading_type2'>Product Detail</h2>
                                            <p className='locked_data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet. veniam, quis nostrud exercitation. magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation.</p>
                                            <p className='locked_data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet. veniam, quis nostrud exercitation. magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation.</p>
                                            <div className='locked_sec'>
                                                <div className='locked_sec_img'><img src={Lokedic} /></div>
                                                <div className='locked_sec_con'>
                                                    <h2 className='heading_type2'

                                                    >Unlock Product</h2>
                                                    <p>You can get full access for this product</p>
                                                    <Button

                                                        onClick={() => {
                                                            navigate('/buy-plan')
                                                        }} className='btn btn_primary'>Unlock Now</Button>
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
                        }
                    </div>
                </Container>
            </section >
            <OfferBid
                show={show}
                // business={business}
                onHide={handleClose}
                callBack={RequestBid}
            />

            <BidSuccess
                show={show1}
                bidPrice={bidPrice}
                onHide={() => {
                    setShow1(false)
                }}
            />


        </>
    );
}

export default MarketDetail;
