import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { stepOne } from '../../utils/Utils';

const Step1 = ({ next, prev, oldValues, setValues, updateDetails }) => {

    return (
        <>
            <div>
                <Formik
                    initialValues={{ businessActivity: oldValues?.businessActivity || "I’m a new entrepreneur and I’m looking to start my first ever investment" }}
                    validationSchema={stepOne}
                    onSubmit={(values) => {
                        updateDetails({ ...oldValues, ...values, LastStep: 1 });
                        setValues({ ...oldValues, ...values })
                        // next();
                    }}
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="step_body">
                                <div className="step_form">
                                    <p>1. What better describes your business activity</p>
                                    <div className="custom_radio1">
                                        {[
                                            { id: "option1", label: "I’m a new entrepreneur and I’m looking to start my first ever investment" },
                                            { id: "option2", label: "I’m an entrepreneur with no experience on private investment" },
                                            { id: "option3", label: "I’m a serial entrepreneur, and constantly look for interesting startups and business to invest on" },
                                            { id: "option4", label: "I’m an accredited investor interested on acquiring new startups" },
                                            { id: "option5", label: "I represent a family fund, investment firm or venture capital, and we are always interested on acquiring more startups" },
                                            { id: "option6", label: "I represent a government office and we are interested on expanding the commercial activities in my country by acquiring startups and developing our local community" }
                                        ].map((item, index) => (
                                            <div className="custom_radio1_itm" key={item.id}>
                                                <div className="custom_radio1_lables">{String.fromCharCode(97 + index)}.</div>
                                                <label htmlFor={item.id}>{item.label}</label>
                                                <Field type="radio" name="businessActivity" id={item.id} value={item.label} as={Form.Check} />
                                            </div>
                                        ))}
                                    </div>
                                    <ErrorMessage name="businessActivity" component="div" className="text-danger mt-2" />
                                </div>
                                <div className="step_footer">
                                    <button className="btn btn_primary ms-auto" onClick={handleSubmit}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default Step1;
