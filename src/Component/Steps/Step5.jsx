import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { stepFive } from '../../utils/Utils';

const Step5 = ({ next, prev, setValues, oldValues, updateDetails }) => {
    const budgetOptions = [
        { id: "50", label: "Under $50K", value: "Under $50K" },
        { id: "50-100", label: "$50K - $100K", value: "$50K - $100K" },
        { id: "100-250", label: "$100K - $250K", value: "$100K - $250K" },
        { id: "250-400", label: "$250K - $400K", value: "$250K - $400K" },
        { id: "400", label: "Over $400K", value: "Over $400K" },
    ];
    return (
        <>


            <Formik
                initialValues={{ budgetRange: oldValues?.budgetRange || [] }}
                validationSchema={stepFive}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    setValues({ ...oldValues, ...values });
                    updateDetails({ ...oldValues, ...values, LastStep: 5 });

                    // next();
                    setSubmitting(false);
                }}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="step_body">
                            <div className="step_form">
                                <p>5. What is the budget range you intend to invest per startup at pre-seed stage?</p>


                                <div className='custom_radio2 form-group'>
                                    {budgetOptions.map((option) => (
                                        <div className='custom_radio2_itm' key={option.id}>
                                            <Field
                                                type="checkbox"
                                                name="budgetRange"
                                                id={option.id}
                                                value={option.value} // Ensure unique values
                                                as={Form.Check}
                                                label={option.label}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <ErrorMessage name="budgetRange" component="div" className="text-danger mt-2" />


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

export default Step5;
