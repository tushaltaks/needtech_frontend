import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import PaymentCards from '../assets/payment_cards.svg';
import Startupim1 from "../assets/startupim1.jpg"
import BidSubmitted from '../Component/Modals/BidSubmitted';

const OfferBidPayment = () => {
    const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in'><h1 className='heading_type1'>Offer a Bid</h1></div>
                </Container>
            </div>
            <div className='not_sec'>
                <Container>
                    <div className='not_sec_in'>
                        <p>Note: Payment will be charged once your bid is approved. If your bid is rejected, there will be no charge.</p>
                    </div>
                </Container>
            </div>
            <section className='payment_sec'>
                <Container>
                    <div className='payment_sec_in'>
                        <Row className='payment_row'>
                            <Col lg={7}>
                               <div className='payment_sec_info'>
                                   {/* <h2 className='heading_type2'>Payment method</h2> */}
                                   <Form>
                                    <Row>
                                        <Col md={12} className='mb-3'>
                                            <Form.Check
                                            type="radio"
                                            label="Credit Card"
                                            name="radioGroup"
                                            id="radioOption1"
                                            value="option1"
                                            />
                                            <Form.Check
                                            type="radio"
                                            label="Bank Wire Transfer"
                                            name="radioGroup"
                                            id="radioOption2"
                                            value="option2"
                                            />
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="form-group" controlId="formGroupName">
                                                <Form.Label>Card Number</Form.Label>
                                                <div className='payment_sec_card'>
                                                    <Form.Control type="text" placeholder="----------------" />
                                                    <div className='payment_sec_ic'><img src={PaymentCards}/></div>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="form-group" controlId="formGroupName">
                                                <Form.Label>Card holder name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter name" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Group className="form-group" controlId="formGroupName">
                                                <Form.Label>Expiry Date</Form.Label>
                                                <Form.Control type="text" placeholder="MM/YY" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group className="form-group" controlId="formGroupName">
                                                <Form.Label>CVV</Form.Label>
                                                <Form.Control type="text" placeholder="XXX" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className='btn_sec btn_sec_itms'>
                                        <Button type='button' className='btn btn_primary' onClick={handleShow}>Pay Now</Button>
                                        <Button type='button' className='btn btn_outline'>Cancel</Button>
                                    </div>
                                   </Form>
                               </div>
                            </Col>
                            <Col lg={5} xl={4}>
                                <div className='payment_history'>
                                    <div className='payment_history_img'><div className='payment_history_img_in'><img src={Startupim1} /></div></div>     
                                    <div className='payment_history_con'>
                                        <div className='market_meta_itm market_meta_itm_data'><span>Health & 2 more</span></div>
                                        <h4>Novel Fat Formulation</h4>
                                        <div class="payment_bid_price"><p>Asking price:</p><h4>$59,700</h4></div>
                                    </div>                               
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <BidSubmitted
                show={show}
                onHide={handleClose}
            />
        </>
    );
}

export default OfferBidPayment;
