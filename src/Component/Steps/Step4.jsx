import { ErrorMessage, Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { stepFour } from '../../utils/Utils';

const Step4 = ({ next, prev, oldValues, setValues, updateDetails }) => {
    const initialValues = {
        expectationAboutStartup: oldValues?.expectationAboutStartup || "",
    };
    return (
        <>


            <Formik
                initialValues={initialValues}
                validationSchema={stepFour}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    setValues({ ...oldValues, ...values });
                    updateDetails({ ...oldValues, ...values, LastStep: 4 });

                    // next();

                }}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="step_body">
                            <div className="step_form">
                                <p>4. Now please tell us about your expectations about the startups you want to acquire</p>
                                <Form.Group className="form-group" controlId="formGroupEmail">
                                    <Form.Control
                                        as="textarea"
                                        onChange={handleChange}
                                        name='expectationAboutStartup'
                                        value={values.expectationAboutStartup}
                                        rows={5}
                                        placeholder="Write here..."
                                    />
                                </Form.Group>
                                <ErrorMessage name="expectationAboutStartup" component="div" className="text-danger mt-2" />

                            </div>
                            <div className="step_footer">
                                <Button className="btn_info" onClick={prev}>
                                    Back
                                </Button>
                                <Button className="btn_primary ms-auto" type='submit'>
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

export default Step4;
