import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OfferBid = (props) => {
    return (
        <>
            <Modal {...props} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className='modal_sec_in'>
                        <h2 className='text-center heading_type2'>Offer Bid</h2>
                        <p>Please submit your bid price</p>

                        <Form>
                            <div className='login_form_in'>
                                <Form.Group className="form-group dollar_sign_s">
                                    <div className='price_dollar_sign'>$</div>
                                    <Form.Control type="text" placeholder="Enter price (in USD)" />
                                </Form.Group>
                                <Form.Group className="form-group mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="I confirm this bid is correct." />
                                </Form.Group>
                                <Link to="/offer-bid-payment" className="btn btn_primary w-100">Submit</Link>
                            </div>
                        </Form> 
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default OfferBid;
