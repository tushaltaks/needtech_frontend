import React, { useState } from "react";
import { CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { Form, Col, Button, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { paymentFormStripe } from "../utils/Utils";
import { SubmitResponse } from "../utils/ApiFunctions";
import toast from "react-hot-toast";
import { baseURL } from "../utils/AxiosInstance";

const CARD_OPTIONS = { style: { base: { fontSize: "16px" } } };

const PaymentForm = ({ business, price }) => {
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (values, { setSubmitting }) => {
        if (!stripe || !elements) {
            setMessage("Stripe has not loaded yet.");
            return;
        }

        const cardElement = elements.getElement(CardNumberElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            setMessage(error.message);
            setSubmitting(false);
            return;
        }

        try {
            const data = {
                amount: price ,
                // amount: price * 100,
                currency: "usd",
                paymentMethodId: paymentMethod.id,
                description: "Business Purchase",
                businessId: business?._id,
            };
            const response = SubmitResponse(`${baseURL}/purchaseBusiness`, data);
            if (response?.status == 200) {
                toast.success("Payment successful");
                navigate("/my-business")
            }
            else {
                toast.error(response?.data?.message)
            }



        } catch (err) {
            toast.error(err.response?.data || err.message)


        }
        setSubmitting(false);
    };
    return (
        <Formik
            validationSchema={paymentFormStripe}
            onSubmit={handleSubmit}
            initialValues={{ name: "", cardNumber: "", expiry: "", cvv: "" }}
        >
            {({ errors, touched, setFieldValue, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Cardholder Name <span className="red-star">*</span></Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter name"
                                    onChange={(e) => setFieldValue("name", e.target.value)}
                                />
                            </Form.Group>
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </Col>

                        <Col md={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Card Number <span className="red-star">*</span></Form.Label>
                                <div className={`border rounded p-2 ${errors.cardNumber && touched.cardNumber ? "border-danger" : "border-gray"}`}>
                                    <CardNumberElement options={CARD_OPTIONS} onChange={(e) => setFieldValue("cardNumber", e.complete)} />
                                </div>
                                <ErrorMessage name="cardNumber" component="div" className="text-danger" />

                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Expiry <span className="red-star">*</span></Form.Label>
                                <div className={`border rounded p-2 ${errors.expiry && touched.expiry ? "border-danger" : "border-gray"}`}>
                                    <CardExpiryElement options={CARD_OPTIONS} onChange={(e) => setFieldValue("expiry", e.complete)} />
                                </div>
                                <ErrorMessage name="expiry" component="div" className="text-danger" />

                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>CVV <span className="red-star">*</span></Form.Label>
                                <div className={`border rounded p-2 ${errors.cvv && touched.cvv ? "border-danger" : "border-gray"}`}>
                                    <CardCvcElement options={CARD_OPTIONS} onChange={(e) => setFieldValue("cvv", e.complete)} />

                                </div>
                                <ErrorMessage name="cvv" component="div" className="text-danger" />

                            </Form.Group>
                        </Col>
                    </Row>

                    <div className='btn_sec btn_sec_itms'>
                        <Button type="submit" disabled={isSubmitting} className='btn btn_primary'>

                            {isSubmitting ? 'Please Wait':'Pay Now'}
                        </Button>
                        <Button type='button' className='btn btn_outline' onClick={() => {
                            navigate(-1)
                        }}>Cancel</Button>
                    </div>


                </form>
            )}
        </Formik>
    );
};

export default PaymentForm;
