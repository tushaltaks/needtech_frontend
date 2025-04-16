import React, { useEffect, useState } from 'react';
import Logoimg from '../assets/logo.png';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import PaymentCards from '../assets/payment_cards.svg';
import PaymentSuccessful from '../Component/Modals/PaymentSuccessful';
import { GetFunction, STRIPE_MODE, STRIPE_TYPE, SubmitResponse, decryptValue } from "../utils/ApiFunctions"
import toast from 'react-hot-toast';
import { baseURL } from '../utils/AxiosInstance';
import { CardCvcElement, CardExpiryElement, CardNumberElement, Elements, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ErrorMessage, Formik } from 'formik';

import { subscrptionPurchase } from '../utils/Utils';
import PayForm from '../Component/PayForm';
const StepPayment = () => {

  const navigate = useNavigate();
  const [stripePromise, setStripePromis] = useState("");
  const [subscription, setSubscription] = useState('')
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getStripeData = async () => {
    const res = await GetFunction(`${baseURL}/getKey/${STRIPE_TYPE}/${STRIPE_MODE}`)
    if (res?.status == 200) {
      let stripKey = decryptValue(res?.data?.key);
      setStripePromis(loadStripe(stripKey));
    } else {
      toast.error(res?.data?.message);
    }
  };


  const getPlan = async () => {
    const res = await GetFunction(`${baseURL}/getSubscriptionList`)
    if (res?.status == 200) {
      if (res?.data?.userData?.subscrptionId) {
        navigate('/marketplace')
      }
      setSubscription(res?.data?.data[0])

    }
    // if (res?.status == 200) {
    //   if (process.env.NEXT_PUBLIC_PRODUCTION == "server") {
    //     let stripKey = await decryptValue(res?.data?.data?.live_pk);
    //     // let stripKey = await decryptValue(res?.data?.data?.test_pk);
    //     setStripePromis(loadStripe(stripKey));
    //   }
    //   if (process.env.NEXT_PUBLIC_PRODUCTION == "localhost") {
    //     let stripKey = await decryptValue(res?.data?.data?.test_pk);
    //     setStripePromis(loadStripe(stripKey));
    //   }
    // } else {
    //   toast.error(res?.data?.message);
    // }
  };

  useEffect(() => {
    getPlan()
    getStripeData()
  }, [])


  if (!stripePromise) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <Elements stripe={stripePromise}>
        <div className="cp_s">
          <Container>
            <div className="cp_s_in">
              {/* Header Section */}
              <div className="cp_s_head">
                {/* <Link to="/" className="cp_s_logo">
                  <img src={Logoimg} alt="Logo" />
                </Link> */}
                <h2 className="heading_type2">Marketplace Membership</h2>
                <p>
                  Unlock full access to our marketplace. You will be charged $100 today and then automatically each month, giving you continuous access until you decide to cancel.
                </p>
              </div>

              {/* Payment Form Section */}
              <div className="cp_s_steps payment_steps">

                {/* <Row>

                    <Col md={12}>
                      <Form.Group className="form-group" controlId="formCardNumber">
                        <Form.Label>Card Number</Form.Label>
                        <div className="payment_sec_card">
                          <Form.Control type="text" placeholder="1234 5678 9012 3456" />
                          <div className="payment_sec_ic">
                            <img src={PaymentCards} alt="Payment Cards" />
                          </div>
                        </div>
                      </Form.Group>
                    </Col>


                    <Col md={12}>
                      <Form.Group className="form-group" controlId="formCardHolderName">
                        <Form.Label>Card Holder Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                      </Form.Group>
                    </Col>


                    <Col md={9}>
                      <Form.Group className="form-group" controlId="formExpiryDate">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control type="text" placeholder="MM/YY" />
                      </Form.Group>
                    </Col>

                    <Col md={3}>
                      <Form.Group className="form-group" controlId="formCVV">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="password" placeholder="XXX" />
                      </Form.Group>
                    </Col>


                  </Row> */}

                <PayForm subscription={subscription} />
              </div>
            </div>
          </Container>
        </div>
      </Elements>
      <PaymentSuccessful
        show={show}
        onHide={handleClose}
      />
    </>
  );
};

export default StepPayment;
