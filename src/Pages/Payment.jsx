import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Startupim1 from "../assets/startupim1.jpg"
import PaymentCards from '../assets/payment_cards.svg';
import BidSubmitted from '../Component/Modals/BidSubmitted';
import { useNavigate, useParams } from 'react-router-dom';
import { baseURL } from '../utils/AxiosInstance';
import { handleimageUrl, SubmitResponse } from '../utils/ApiFunctions';
import toast from 'react-hot-toast';
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../Component/PaymentForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PRIVATE_KEY); // Replace with your Stripe public key


const Payment = () => {
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const [checkRadio, setCheckRadio] = useState('credit-card')
    const [business, setBusiness] = useState({})
    const { id } = useParams()
    const getSingleBusiness = async () => {
        const data = {
            userId: localStorage?.getItem('userId') || ""
        }
        const res = await SubmitResponse(`${baseURL}/businessDetails/${id}`, data);
        if (res?.status == 200) {
            setBusiness(res?.data?.data)
        }
        else {
            toast.error(res?.data?.message)
        }
    };
    useEffect(() => {
        getSingleBusiness()
    }, [])


    const PurchaseBuisness = async () => {
        const data = {
            amount: business?.bidDetailReletedtoBusiness == null ? business?.price : business?.bidDetailReletedtoBusiness?.status == 'accepted' ? business?.bidDetailReletedtoBusiness?.bidAmount : business?.price,
            businessId: business?._id,
        };
        const res = await SubmitResponse(`${baseURL}/buyBuisness`, data);
        if (res?.status == 200) {
            window.location.href = res?.data?.data?.url
        }
        else {
            toast.error(res?.data?.message)
        }
    };




    return (
        <>
            <Elements stripe={stripePromise} >
                <div className='inner_head'>
                    <Container>
                        <div className='inner_head_in'><h1 className='heading_type1'>Payment</h1></div>
                    </Container>
                </div>
                <section className='payment_sec'>
                    <Container>
                        <div className='payment_sec_in'>
                            <Row className='payment_row'>
                                <Col md={7}>
                                    <div className='payment_sec_info'>
                                        {/* <h2 className='heading_type2'>Payment method</h2> */}

                                        <Row>
                                            <Col md={12} className='mb-3'>
                                                <Form.Check
                                                    type="radio"
                                                    label="Credit Card"
                                                    name="radioGroup"
                                                    onChange={() => {
                                                        setCheckRadio('credit-card')
                                                    }}
                                                    checked={checkRadio === 'credit-card'}
                                                    value="credit-card"
                                                    id="radioOption1"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    onChange={() => {
                                                        setCheckRadio('bank-wire')
                                                    }}
                                                    checked={checkRadio === 'bank-wire'}
                                                    label="Bank Wire Transfer"
                                                    name="radioGroup"
                                                    id="radioOption2"
                                                    value="bank-wire"
                                                />
                                            </Col>

                                            <div className='btn_sec btn_sec_itms'>
                                                <Button onClick={PurchaseBuisness} disabled={loader} className='btn btn_primary'>

                                                    Pay Now
                                                </Button>
                                                <Button type='button' className='btn btn_outline' onClick={() => {
                                                    navigate(-1)
                                                }}>Cancel</Button>
                                            </div>
                                            {/* <PaymentForm business={business} price={
                                                business?.bidDetailReletedtoBusiness == null ? business?.price : business?.bidDetailReletedtoBusiness?.bidAmount
                                            } /> */}
                                        </Row>


                                    </div>
                                </Col>
                                <Col lg={5} xl={4}>
                                    <div className='payment_history'>
                                        <div className='payment_history_img'><div className='payment_history_img_in'><img src={
                                            business?.image ? handleimageUrl(business?.image) : Startupim1
                                        } /></div></div>
                                        <div className='payment_history_con'>
                                            <div className='market_meta_itm market_meta_itm_data'><span>
                                                {business?.businessCategory?.[0]?.title}
                                                {business?.businessCategory?.length > 1 && ` & ${business?.businessCategory.length - 1} more`}

                                            </span></div>
                                            <h4>{business?.title}</h4>
                                            <div class="payment_bid_price"><p>Asking price:</p><h4>
                                                {/* ${business?.bidDetailReletedtoBusiness == null ? business?.price : business?.bidDetailReletedtoBusiness?.bidAmount} */}
                                                ${
                                                    business?.bidDetailReletedtoBusiness == null ? business?.price : business?.bidDetailReletedtoBusiness?.status == 'accepted' ? business?.bidDetailReletedtoBusiness?.bidAmount : business?.price

                                                }
                                            </h4></div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
            </Elements>
        </>
    );
}

export default Payment;
