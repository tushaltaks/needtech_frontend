import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BackIc from "../assets/backIc.svg"
import HeartIcon from "../assets/heartIc.png"
import VerifiedIc from "../assets/verifiedIc.svg"
import DewberryLogo from "../assets/dewberry_logo.jpg"

import HeartIconFilled from "../assets/heartFilledIc.png"



import Logo_approved from "../assets/logo_approved.png"
import OfferBid from '../Component/Modals/OfferBid';
import ProfilePhoto from "../assets/profilePhoto.jpg"
import ProviderDetails from '../Component/Modals/ProviderDetails';
import { handleimageUrl, SubmitResponse } from '../utils/ApiFunctions';
import { baseURL } from '../utils/AxiosInstance';
import toast from 'react-hot-toast';

const ServiceProviderDetail = () => {
    const [show, setShow] = useState(false);
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [provider, setProvider] = useState({})
    const { id } = useParams()
    const getsingleProvider = async () => {
        const data = {
            userId: localStorage?.getItem('userId') || ""
        }
        const res = await SubmitResponse(`${baseURL}/serviceProviderDetails/${id}`, data);
        if (res?.status == 200) {
            setProvider(res?.data?.data)
        }
        else {
            toast.error(res?.data?.message)
        }
    };
    useEffect(() => {
        getsingleProvider()
    }, [])

    const addToWishList = async () => {
        const res = await SubmitResponse(`${baseURL}/AddtowishList`, { proivider: id });
        if (res?.status == 200) {
            toast.dismiss()
            toast.success(res?.data?.message)
            getsingleProvider()
        }
        else {
            toast.dismiss()
            toast.error(res?.data?.message)
        }
    }

    console.log('serviceProviderDetail', provider)
    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in backbtn_s'>
                        <Link to="/service-provider-login"><img src={BackIc} /> Back to Service Providers</Link>
                    </div>
                </Container>
            </div>
            <section className='market_detail service_provider_detail'>
                <Container>
                    <div className='market_detail_in'>
                        <div className='market_detail_s'>
                            <Row>
                                <Col md={8}>
                                    <div className='market_detail_s_in'>
                                        <div className='market_detail_img'>
                                            <div className='market_detail_img_in'>
                                                <img src={provider?.image ? handleimageUrl(provider?.image) : ProfilePhoto} />
                                            </div>
                                        </div>
                                        <div className='market_detail_info'>
                                            <div className='market_meta'>
                                                <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                                            </div>
                                            <div className='market_detail_heading'>
                                                <h1 className='heading_type1'>{provider?.name}</h1>
                                                <h4>{provider?.jobTitle}</h4>
                                            </div>
                                            <div className='service_provider_lisitng'>
                                                <h2 className='heading_type2'>Areas of Experties</h2>
                                                <ul className='list_type1'>
                                                    {
                                                        provider?.areaofExpertise &&
                                                        provider?.areaofExpertise?.map((item, index) => (
                                                            <li key={index}>{item}</li>
                                                        ))
                                                    }


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='market_detail_right'>
                                        <div className='market_detail_right_con'>
                                            <div className='market_detail_right_in'>
                                                <div className='market_detail_logo'><img src={Logo_approved} /></div>
                                                <div className='market_detail_serviceprovider'>
                                                    <h4>Approved Partner</h4>
                                                    <p>{provider?.professionalExperience} years in provider</p>
                                                </div>
                                            </div>
                                            <div className='heart_ic'
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
                                                    provider?.wishlist ?
                                                        <img src={HeartIconFilled} />


                                                        :
                                                        <img src={HeartIcon} />
                                                }
                                            </div>
                                        </div>
                                        <div className='service_provider_s'>
                                            <div className='service_provider_logo'><img
                                                src={provider?.companyLogo ? handleimageUrl(provider?.companyLogo) : DewberryLogo}
                                            /></div>
                                            <div className='service_provider_d'>
                                                <p>{provider?.companyName}</p>
                                                <p>{provider?.aboutCompany}</p>
                                                <p>{provider?.city}, {provider?.country}</p>
                                            </div>
                                        </div>
                                        <div className='market_list_btn'>
                                            <Button className='btn btn_outline' onClick={handleShow}>Contact Details</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='product_detail'>
                            <Row>
                                <Col md={8}>
                                    <div className='product_detail_in content_gap'



                                    >
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: provider?.description
                                            }}
                                        >

                                        </p>
                                        <h2 className='heading_type2 mt-4'>Product Detail</h2>
                                        <p>
                                            {provider?.producDetails}
                                        </p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='product_detail_assets'>
                                        <h2 className='heading_type2'>Company's Services</h2>
                                        <ul className='list_type1'>
                                            {/* <li>Primary domain and all site</li> */}
                                            {
                                                provider?.companyServices?.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))
                                            }
                                            {/* <li>Amazon Seller Central Account</li>
                                            <li>Supplier Relationships</li>
                                            <li>Walmart and Shopify Accounts</li>
                                            <li>Social Media Accounts</li>
                                            <li>Trademarks</li> */}
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
            <ProviderDetails
                show={show}
                provider={provider}
                onHide={handleClose}
            />
        </>
    );
}

export default ServiceProviderDetail;
