import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import Profile from "../assets/profilePhoto.jpg"
import { Link, useNavigate } from "react-router-dom";
import BackIc from "../assets/backIc.svg";
import { ErrorMessage, Field, Formik } from 'formik';
import { countries, updateProfile } from '../utils/Utils';
import { handleimageUrl, SubmitResponse } from '../utils/ApiFunctions';
import { baseURL } from '../utils/AxiosInstance';
import toast from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';


const EditProfile = () => {
    const navigate = useNavigate();
    const [profilePhoto, setProfilePhoto] = React.useState('');
    const [userData] = React.useState(JSON.parse(localStorage.getItem("userDetails")));
    const [userId, setUserId] = React.useState(localStorage.getItem("userId"));
    const handleSubmit = async (values) => {
        console.log(values);
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
            if (values[key]) {

                formData.append(key, values[key]);
            }
        });

        const res = await SubmitResponse(`${baseURL}/updateUserDetails/${userId}`, formData);
        if (res.data?.status == 200) {
            toast.dismiss()
            toast.success(res?.data?.message);
            localStorage.setItem('name', res?.data?.data?.name);;
            localStorage.setItem("userDetails", JSON.stringify(res?.data?.data));
            navigate("/my-profile");
        }
        else {
            toast.dismiss()
            toast.error(res?.message);
        }

    };

    const PhoneField = ({ field, form }) => {
        return (
            <PhoneInput
                country={"us"} // Default country
                value={field.value} // Bind value from Formik


                onChange={(value, country, e, formattedValue) => {
                    let DialCode = country?.dialCode;
                    let valueLength = value?.length;
                    let result = value?.substr(
                        DialCode?.length,
                        valueLength - DialCode?.length
                    );

                    form.setFieldValue(
                        "mobile",
                        `+${DialCode}` + " " + result
                    );
                }}
                inputClass="form-input w-full form-control"
                containerClass="w-full"
            />
        );
    };
    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in backbtn_s'><Link to="/my-profile"><img src={BackIc} /> My Profile</Link></div>
                </Container>
            </div>
            <section className='prodile_sec'>
                <Container>
                    <div className='prodile_sec_in'>
                        <h1 className='heading_type1 heading_color'>Edit Profile</h1>
                        <Row>
                            <Col md={12}>
                                <Formik
                                    initialValues={{
                                        profileImage: '',
                                        name: userData?.name || '',
                                        email: userData?.email || '',
                                        mobile: userData?.mobile || '',
                                        businessName: userData?.businessName || '',
                                        website: userData?.website || '',
                                        position: userData?.position || '',
                                        businessType: userData?.businessType || '',
                                        buisnessCountry: userData?.buisnessCountry || '',
                                        buisnessState: userData?.buisnessState || '',
                                        buisnessCity: userData?.buisnessCity || '',
                                    }}
                                    enableReinitialize={true}
                                    validationSchema={updateProfile}
                                    onSubmit={handleSubmit}
                                >
                                    {({ setFieldValue, handleSubmit }) => (
                                        <Form className='prodile_sec_s' onSubmit={handleSubmit}>
                                            <div className='prodile_sec_img'>
                                                <div className='prodile_sec_img_in'><img src={profilePhoto ? profilePhoto : userData?.profileImage ? handleimageUrl(userData?.profileImage) : Profile } /></div>
                                                <div className='rditpic_btn'><span className='btn btn_outline'>Upload Photo</span><Form.Control

                                                    onChange={(e) => {
                                                        const file = e.currentTarget.files[0];
                                                        setFieldValue('profileImage', file);
                                                        setProfilePhoto(URL.createObjectURL(file));
                                                    }}
                                                    type="file" placeholder="Enter Name" /></div>
                                            </div>
                                            <div className='editprofile_info'>
                                                <h2 className='heading_type2'>Personal Info</h2>
                                                <div className='edit_itms'>
                                                    <Row>
                                                        <Col md="6">
                                                            <Form.Group className="form-group">
                                                                <Form.Label>Full Name</Form.Label>
                                                                <Field type="text" name="name" className="form-control" placeholder="Enter Name" />
                                                                <ErrorMessage name="name" component="div" className="text-danger" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md="6">
                                                            <Form.Group className="form-group">
                                                                <Form.Label>Email Address</Form.Label>
                                                                <Field disabled type="email" name="email" className="form-control" placeholder="You@example.com" />
                                                                <ErrorMessage name="email" component="div" className="text-danger" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md='12'>
                                                            <Form.Group className='form-group'>
                                                                <Form.Label>Phone Number</Form.Label>
                                                                <Field name="mobile" component={PhoneField
                                                                } />
                                                                <ErrorMessage name='mobile' component='div' className='text-danger' />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <h2 className='heading_type2'>Business Info</h2>
                                                <div className='edit_itms'>
                                                    <Row>



                                                        <Row>
                                                            <Col md="6">
                                                                <Form.Group className="form-group">
                                                                    <Form.Label>Business Name</Form.Label>
                                                                    <Field type="text" name="businessName" className="form-control" placeholder="Enter business name" />
                                                                    <ErrorMessage name="businessName" component="div" className="text-danger" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md="6">
                                                                <Form.Group className="form-group">
                                                                    <Form.Label>Website</Form.Label>
                                                                    <Field type="text" name="website" className="form-control" placeholder="Enter website" />
                                                                    <ErrorMessage name="website" component="div" className="text-danger" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md="6">
                                                                <Form.Group className="form-group">
                                                                    <Form.Label>Position</Form.Label>
                                                                    <Field as="select" name="position" className="form-control">
                                                                        <option value="">Select Position</option>
                                                                        <option value="Chairman">Chairman</option>
                                                                        <option value="CEO">CEO</option>
                                                                        <option value="Manager">Manager</option>
                                                                    </Field>
                                                                    <ErrorMessage name="position" component="div" className="text-danger" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md="6">
                                                                <Form.Group className="form-group">
                                                                    <Form.Label>Type of Business</Form.Label>
                                                                    <Field as="select" name="businessType" className="form-control">
                                                                        <option value="">Select Type</option>
                                                                        <option value="Entrepreneur">Entrepreneur</option>
                                                                        <option value="Startup">Startup</option>
                                                                        <option value="Corporation">Corporation</option>
                                                                    </Field>
                                                                    <ErrorMessage name="businessType" component="div" className="text-danger" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md="12">
                                                                <Form.Group className="form-group">
                                                                    <Form.Label>Country</Form.Label>
                                                                    <Field as="select" name="buisnessCountry" className="form-control">
                                                                        <option value="">Select Country</option>

                                                                        {countries.map((country) => (
                                                                            <option key={country} value={country}>
                                                                                {country}
                                                                            </option>
                                                                        ))}
                                                                    </Field>
                                                                    <ErrorMessage name="buisnessCountry" component="div" className="text-danger" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md="6">
                                                                <Form.Group className="form-group">
                                                                    <Form.Label>State</Form.Label>
                                                                    <Field type="text" name="buisnessState" className="form-control" placeholder="Enter state name" />
                                                                    <ErrorMessage name="buisnessState" component="div" className="text-danger" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md="6">
                                                                <Form.Group className="form-group">
                                                                    <Form.Label>City</Form.Label>
                                                                    <Field type="text" name="buisnessCity" className="form-control" placeholder="Enter city name" />
                                                                    <ErrorMessage name="buisnessCity" component="div" className="text-danger" />
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                        <Col md="12">
                                                            <div className='btn_sec btn_sec_itms'>
                                                                <Button type='submit' className='btn btn_primary'>Save Changes</Button>
                                                                <Button as={Link} to="/" className='btn btn_outline'>Cancel</Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default EditProfile;
