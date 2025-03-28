import React, { useState } from 'react';
import Logoimg from '../assets/logo.png';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PaymentCards from '../assets/payment_cards.svg';
import PaymentSuccessful from '../Component/Modals/PaymentSuccessful';

const StepPayment = () => {
    const [show, setShow] = useState(false);
                const handleClose = () => setShow(false);
                const handleShow = () => setShow(true);
  return (
    <>
      <div className="cp_s">
        <Container>
          <div className="cp_s_in">
            {/* Header Section */}
            <div className="cp_s_head">
              <Link to="/" className="cp_s_logo">
                <img src={Logoimg} alt="Logo" />
              </Link>
              <h2 className="heading_type2">Payment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Payment Form Section */}
            <div className="cp_s_steps payment_steps">
              <Form>
                <Row>
                  {/* Card Number Field */}
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

                  {/* Card Holder Name Field */}
                  <Col md={12}>
                    <Form.Group className="form-group" controlId="formCardHolderName">
                      <Form.Label>Card Holder Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                  </Col>

                  {/* Expiry Date Field */}
                  <Col md={9}>
                    <Form.Group className="form-group" controlId="formExpiryDate">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control type="text" placeholder="MM/YY" />
                    </Form.Group>
                  </Col>

                  {/* CVV Field */}
                  <Col md={3}>
                    <Form.Group className="form-group" controlId="formCVV">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="password" placeholder="XXX" />
                    </Form.Group>
                  </Col>
                </Row>

                <div className='payable_amount'><label>Total Payable</label><label>$1,316,453.00</label></div>

                {/* Buttons Section */}
                <div className="btn_sec btn_sec_itms">
                  <Button type="button" className="btn_primary" onClick={handleShow}>
                    Pay Now
                  </Button>
                  <Button type="button" className="btn_outline">
                    Cancel
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Container>
      </div>
      <PaymentSuccessful
            show={show}
            onHide={handleClose}
        />
    </>
  );
};

export default StepPayment;
