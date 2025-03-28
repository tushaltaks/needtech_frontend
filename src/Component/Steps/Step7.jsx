import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import ImageUpload from "../../assets/imageUpload.svg"
import { ErrorMessage, Field, Formik } from 'formik';
import { stepSeven } from '../../utils/Utils';


const Step7 = ({ prev, next, setValues, oldValues, updateDetails }) => {

    const [preview, setPreview] = useState(oldValues?.profileImage || null);

    const initialValues = {
        profileImage: oldValues?.profileImage || null,
        aboutyourSelf: oldValues?.aboutyourSelf || "",
    };


    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={stepSeven}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    setValues({ ...oldValues, ...values });
                    updateDetails({ ...oldValues, ...values, LastStep: 7 });
                    setSubmitting(false);
                }}
            >
                {({ setFieldValue, handleSubmit }) => (
                    <Form onSubmit={(event) => { event.preventDefault(); handleSubmit(); }}>
                        <div className="step_body">
                            <div className="step_form">
                                <p>7. It’s time to know about you</p>

                                {/* File Upload Section */}

                                <Form.Group className="form-group file-upload-group" controlId="formFile">
                                    <div className="file-upload-icon">
                                        <div className='file-upload_img'>
                                            <img src={preview ? preview : ImageUpload} alt="Upload" />
                                        </div>
                                        <div className='file-upload_cross'
                                            onClick={() => {
                                                setPreview(null);
                                                setFieldValue("profileImage", null);
                                            }}
                                        >✖</div>
                                    </div>
                                    <Form.Label>Upload a clear face photo</Form.Label>

                                    {/* Input type file with Browse button */}
                                    <div className="file-upload-input">
                                        <Form.Control
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            onChange={(event) => {
                                                const file = event.target.files[0];
                                                if (file) {
                                                    setPreview(URL.createObjectURL(file));
                                                    setFieldValue("profileImage", file);
                                                }
                                            }}
                                            placeholder="Choose a file"
                                            className="file-input"
                                        />
                                        <span>Browse</span>
                                    </div>

                                </Form.Group>




                                <ErrorMessage name="profileImage" component="div" className="text-danger mt-2" />

                                {/* About Yourself Section */}
                                <div className="form-group">
                                    <label>Tell us briefly about yourself</label>
                                    <Field
                                        as="textarea"
                                        name="aboutyourSelf"
                                        rows={5}
                                        placeholder="Write here..."
                                        className="form-control"
                                    />
                                    <ErrorMessage name="aboutyourSelf" component="div" className="text-danger mt-2" />
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="step_footer">
                                <Button className="btn_info" type="button" onClick={prev}>
                                    Back
                                </Button>
                                <Button className="btn_primary ms-auto" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default Step7;


