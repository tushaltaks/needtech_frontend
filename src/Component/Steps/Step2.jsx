import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { stepTwo } from '../../utils/Utils';

const Step2 = ({ next, prev, oldValues, setValues, updateDetails }) => {
    const industries = [
        { id: "Business", label: "Business" },
        { id: "e commerce", label: "e commerce" },
        { id: "Fitness", label: "Fitness" },
        { id: "Personal Care", label: "Personal Care" },
        { id: "Food & grocery", label: "Food & grocery" },
        { id: "Beauty & Salon", label: "Beauty & Salon" },
        { id: "Tour & Travel", label: "Tour & Travel" },
        { id: "Taxi Booking", label: "Taxi Booking" }
    ];
    const initialValues = {
        industries: oldValues?.industries || [],
        otherIndustry: oldValues?.otherIndustry || "",
    };

    return (
        <>
            <div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={stepTwo}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true);
                        setValues({ ...oldValues, ...values });
                        updateDetails({ ...oldValues, ...values, LastStep: 2 });
                        // next();
                        setSubmitting(false);
                    }}
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="step_body">
                                <div className="step_form">
                                    <p>2. What are the main industries you are interested in?</p>
                                    <div className='custom_radio2 form-group'>
                                        {industries.map((item) => (
                                            <div className='custom_radio2_itm' key={item.id}>
                                                <Field
                                                    type="checkbox"
                                                    name="industries"
                                                    id={item.id}
                                                    value={item.label}
                                                    as={Form.Check}
                                                    label={item.label}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <ErrorMessage name="industries" component="div" className="text-danger mt-2" />

                                    <Form.Group className="form-group">
                                        <Field
                                            as="textarea"
                                            rows={3}
                                            name="otherIndustry"
                                            placeholder="If you didn’t find the industries that you are looking for, please let us know"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="otherIndustry" component="div" className="text-danger mt-2" />
                                    </Form.Group>
                                </div>
                                <div className="step_footer">
                                    <Button className="btn_info" type="button" onClick={prev}>
                                        Back
                                    </Button>
                                    <button className="btn btn_primary ms-auto" type="submit">
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

export default Step2;
