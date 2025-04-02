import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { bidpopup } from '../../utils/Utils';

const OfferBid = (props) => {
    return (
        <>
            <Modal {...props} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="modal_sec_in">
                        <h2 className="text-center heading_type2">Offer Bid</h2>
                        <p>Please submit your bid price</p>

                        <Formik
                            initialValues={{ price: "", confirmBid: false }}
                            validationSchema={bidpopup}
                            onSubmit={props?.callBack}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="login_form_in">

                                        <Form.Group className="form-group dollar_sign_s">
                                            <div className="price_dollar_sign">$</div>
                                            <Field
                                                name="price"
                                                type="numebr"
                                                className="form-control"
                                                placeholder="Enter price (in USD)"
                                            />
                                            <ErrorMessage name="price" component="div" className="float-start text-justify  text-danger" />
                                        </Form.Group>

                                        <Form.Group className="text-start form-group mb-3" id="formGridCheckbox">
                                            <Field
                                                type="checkbox"
                                                name="confirmBid"
                                                className="form-check-input mx-2"
                                                id="confirmBid"
                                            />
                                            <label htmlFor="confirmBid" className="form-check-label mt-1">
                                                I confirm this bid is correct.
                                            </label>
                                            <ErrorMessage name="confirmBid" component="div" className="text-danger" />
                                        </Form.Group>

                                        <button type="submit" className="btn btn_primary w-100">Submit</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default OfferBid;
