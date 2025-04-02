import { ErrorMessage, Formik } from 'formik';

import React from 'react'
import { subscrptionPurchase } from '../utils/Utils';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { SubmitResponse } from '../utils/ApiFunctions';
import { baseURL } from '../utils/AxiosInstance';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "black",
            padding: "1px",
            border: "4px solid #C19444",
            fontFamily: "Parkinsans",
            fontSize: "16px",

        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "red",
        },
    },
};
function PayForm({ subscription }) {
    const navigate = useNavigate()
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (values) => {

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(
                CardCvcElement,
                CardExpiryElement,
                CardNumberElement
            ),
        });
        if (error) {
            return toast.error(error?.message);
        }

        const data = {
            pmId: paymentMethod?.id,
            planId: subscription?._id,
        };
        const res = await SubmitResponse(`${baseURL}/buyPlan`, data);
        console.log("res", res?.data?.data);
        if (res?.data?.status == 200) {
            if (res?.data?.data?.requiresAction == true) {
                const { error, paymentIntent } = await stripe.confirmCardPayment(
                    res?.data?.data?.clientSecret,
                    {
                        payment_method: {
                            card: elements.getElement(
                                CardCvcElement,
                                CardExpiryElement,
                                CardNumberElement
                            ),
                        },
                    }
                );

                if (paymentIntent.status === "succeeded") {
                    const datas = {
                        subscriptionId: res?.data?.data?.subscriptionId,
                        planId: subscription?._id,
                        pmId: paymentMethod?.id,
                    };

                    const ress = await SubmitResponse(
                        `${baseURL}/addCustomerPlan`,
                        datas
                    );

                    if (ress?.data?.status == 200) {
                        console.log("ress", ress?.data?.data);
                        toast.success(res?.data?.message);
                        localStorage.setItem("subscriptionId", ress?.data?.data?.subscrptionId);
                        localStorage.setItem("subscritpionStartDate", ress?.data?.data?.subscriptionStartDate);
                        localStorage.setItem("subscritpionEndDate", ress?.data?.data?.subscriptionEndDate);
                        navigate('/marketplace')
                        // props?.callbackss();
                    } else {
                        toast.error(res?.message);
                    }
                }
            }
        }
    }
    return (
        <div>
            <Formik
                validationSchema={subscrptionPurchase} // Your Yup validation schema
                onSubmit={handleSubmit}
                initialValues={{
                    name: "",
                    cardNumber: "",
                    cvv: "",
                    expiry: "",
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={12}>
                                <Form.Group className="mb-3" controlId="formCardNumber">
                                    <Form.Label>
                                        Card Number <span className="red-star">*</span>
                                    </Form.Label>
                                    <div
                                        className={`${errors.cardNumber && touched.cardNumber
                                            ? "border border-danger rounded p-2"
                                            : "border border-gray rounded p-2"
                                            }`}
                                    >
                                        <CardNumberElement
                                            options={{...CARD_OPTIONS, showAutofill: false}}
                                            onChange={(e) => {
                                                if (e.complete) {
                                                    setFieldValue("cardNumber", e.complete);
                                                } else {
                                                    setFieldValue("cardNumber", e.empty);
                                                }
                                            }}

                                        />
                                    </div>
                                    <ErrorMessage
                                        component="div"
                                        name='cardNumber'
                                        className='text-danger'
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="form-group" controlId="formCardHolderName">
                                    <Form.Label>Card Holder Name</Form.Label>
                                    <Form.Control type="text"
                                        onChange={(e) => {
                                            setFieldValue("name", e.target.value);
                                        }}

                                        name='name' placeholder="Enter name" />
                                    <ErrorMessage name='name' component="div" className='text-danger' />
                                </Form.Group>
                            </Col>


                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formExpiry">
                                    <Form.Label>
                                        Expiry <span className="red-star">*</span>
                                    </Form.Label>
                                    <div
                                        className={`${errors.expiry && touched.expiry
                                            ? "border border-danger rounded p-2"
                                            : "border border-gray rounded p-2"
                                            }`}
                                    >
                                        <CardExpiryElement
                                            options={CARD_OPTIONS}
                                            onChange={(e) => {
                                                if (e.complete) {
                                                    setFieldValue("expiry", e.complete);
                                                } else {
                                                    setFieldValue("expiry", e.empty);
                                                }
                                            }}
                                        />
                                    </div>

                                    <ErrorMessage
                                        name='expiry'
                                        component="div"
                                        className='text-danger'
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formCvv">
                                    <Form.Label>
                                        CVV <span className="red-star">*</span>
                                    </Form.Label>
                                    <div
                                        className={`${errors.cvv && touched.cvv
                                            ? "border border-danger rounded p-2"
                                            : "border border-gray rounded p-2"
                                            }`}
                                    >
                                        <CardCvcElement
                                            options={CARD_OPTIONS}
                                            onChange={(e) => {
                                                if (e.complete) {
                                                    setFieldValue("cvv", e.complete);
                                                } else {
                                                    setFieldValue("cvv", e.empty);
                                                }
                                            }}
                                        />
                                    </div>
                                    <ErrorMessage
                                        name='cvv'
                                        component="div"
                                        className='text-danger'
                                    />
                                </Form.Group>
                            </Col>


                        </Row>


                        <div className='payable_amount'><label>Total Payable</label><label>${subscription?.price}</label></div>

                        {/* Buttons Section */}
                        <div className="btn_sec btn_sec_itms">
                            <Button type="submit" className="btn_primary"
                            >
                                Pay Now
                            </Button>
                            <Button
                                onClick={() => {
                                    navigate("/marketplace");
                                }}
                                type="button" className="btn_outline">
                                Cancel
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>{" "}
        </div>
    )
}

export default PayForm