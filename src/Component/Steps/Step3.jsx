import { ErrorMessage, Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { stepThree } from '../../utils/Utils';

const Step3 = ({ next, prev, oldValues, setValues, updateDetails }) => {
    const initialValues = {
        aboutBusiness: oldValues?.aboutBusiness || "",
    };
    return (
        <>


            <Formik
                initialValues={initialValues}
                validationSchema={stepThree}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    setValues({ ...oldValues, ...values });
                    updateDetails({ ...oldValues, ...values, LastStep: 3 });
                    // next();

                }}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="step_body">
                            <div className="step_form">
                                <p>3. Please tell us in detail about your business</p>
                                <Form.Group className="form-group" controlId="formGroupEmail">
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        onChange={handleChange}
                                        value={values.aboutBusiness}
                                        name='aboutBusiness'
                                        placeholder="Write here..."
                                    />
                                </Form.Group>
                                <ErrorMessage name="aboutBusiness" component="div" className="text-danger mt-2" />
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

export default Step3;
