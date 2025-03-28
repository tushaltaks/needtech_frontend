import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { stepSix } from '../../utils/Utils';

const Step6 = ({ next, prev, oldValues, setValues, updateDetails }) => {
    const initialValues = {
        financingAquirungStartus: oldValues?.financingAquirungStartus || "",
        financingDevelopingStartus: oldValues?.financingDevelopingStartus || "",
    };



    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={stepSix}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    setValues({ ...oldValues, ...values });
                    updateDetails({ ...oldValues, ...values, LastStep: 6 });

                    // next();
                    setSubmitting(false);
                }}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={(event) => { event.preventDefault(); handleSubmit(); }}>
                        <div className="step_body">
                            <div className="step_form">
                                <p>6. Will you need financing assistance for:</p>

                                {/* Acquiring Startups */}
                                <div className="form-group">
                                    <label className="form-label">a. Acquiring startups</label>
                                    <div className="custom_radio1">
                                        <Row className="custom_radio1_row">
                                            <Col md="5" lg="4" className="col-6">
                                                <div className="custom_radio1_itm">
                                                    <label htmlFor="acquireYes">Yes</label>
                                                    <Field
                                                        type="radio"
                                                        name="financingAquirungStartus"
                                                        id="acquireYes"
                                                        value="Yes"
                                                        as={Form.Check}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="5" lg="4" className="col-6">
                                                <div className="custom_radio1_itm">
                                                    <label htmlFor="acquireNo">No</label>
                                                    <Field
                                                        type="radio"
                                                        name="financingAquirungStartus"
                                                        id="acquireNo"
                                                        value="No"
                                                        as={Form.Check}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <ErrorMessage name="financingAquirungStartus" component="div" className="text-danger mt-2" />
                                </div>

                                {/* Developing Startups */}
                                <div className="form-group">
                                    <label className="form-label">b. Developing the startups once they are acquired</label>
                                    <div className="custom_radio1">
                                        <Row className="custom_radio1_row">
                                            <Col md="5" lg="4" className="col-6">
                                                <div className="custom_radio1_itm">
                                                    <label htmlFor="developYes">Yes</label>
                                                    <Field
                                                        type="radio"
                                                        name="financingDevelopingStartus"
                                                        id="developYes"
                                                        value="Yes"
                                                        as={Form.Check}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="5" lg="4" className="col-6">
                                                <div className="custom_radio1_itm">
                                                    <label htmlFor="developNo">No</label>
                                                    <Field
                                                        type="radio"
                                                        name="financingDevelopingStartus"
                                                        id="developNo"
                                                        value="No"
                                                        as={Form.Check}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <ErrorMessage name="financingDevelopingStartus" component="div" className="text-danger mt-2" />
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="step_footer">
                                <Button className="btn_info" type="button" onClick={prev}>
                                    Back
                                </Button>
                                <Button className="btn_primary ms-auto" type="submit">
                                    Next
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default Step6;
