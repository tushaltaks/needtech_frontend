import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import ProfilePhoto from "../assets/profilePhoto.jpg"
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { GetFunction, handleimageUrl, SubmitResponse } from '../utils/ApiFunctions';
import { baseURL } from '../utils/AxiosInstance';

const MyProfile = () => {



    const getUserProfile = async () => {
        const res = await GetFunction(`${baseURL}/userDetail`);
        if (res?.status == 200) {

            return res?.data
        }
        else {
            toast.error(res?.data?.message)
        }
    };



    const { data, isLoading, refetch } = useQuery({
        queryKey: ['userDetails'],
        queryFn: getUserProfile,
        onError: (error) => {
            toast.error(error.message);
        },


    })

    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in'><h1 className='heading_type1'>My Profile</h1></div>
                </Container>
            </div>
            <section className='prodile_sec'>
                <Container>
                    <div className='prodile_sec_in'>
                        <Row className='row_space'>
                            <Col lg={8}>
                                <div className='prodile_sec_s'>
                                    <div className='prodile_sec_img'><div className='prodile_sec_img_in'><img src={

                                        data?.profileImage ? handleimageUrl(data?.profileImage) : ProfilePhoto
                                    } /></div></div>
                                    <div className='prodile_sec_info'>
                                        <h2 className='heading_type2'>Personal Info</h2>
                                        <div className='prodile_sec_itms'>
                                            <div className='prodile_sec_itm market_list_rate'>
                                                <p>Name</p>
                                                <h4>{data?.name}</h4>
                                            </div>
                                            <div className='prodile_sec_itm market_list_rate'>
                                                <p>Email</p>
                                                <h4>{data?.email} </h4>
                                            </div>
                                            <div className='prodile_sec_itm market_list_rate'>
                                                <p>Mobile Number</p>
                                                <h4>{data?.mobile}</h4>
                                            </div>
                                        </div>
                                        <div className='btn_sec btn_sec_itms'>
                                            <Button as={Link} to="/edit-profile" className='btn btn_primary'>Edit Profile</Button>
                                            <Button as={Link} to="/change-password" className='btn btn_outline'>Change Password</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='prodile_sec_info prodile_sec_right'>
                                    <h2 className='heading_type2'>Business Info</h2>
                                    <div className='prodile_sec_itms'>
                                        <div className='prodile_sec_itm market_list_rate'>
                                            <p>Business Name</p>
                                            <h4>{data?.buisnessName ? data?.buisnessName : 'N/A'}</h4>
                                        </div>
                                        <div className='prodile_sec_itm market_list_rate'>
                                            <p>Position</p>
                                            <h4>{data?.position ? data?.position : 'N/A'}</h4>
                                        </div>
                                        <div className='prodile_sec_itm market_list_rate'>
                                            <p>Type of business</p>
                                            <h4>{data?.businessType ? data?.businessType : 'N/A'}</h4>
                                        </div>
                                        <div className='prodile_sec_itm market_list_rate'>
                                            <p>Address</p>
                                            <h4>{data?.buisnessCity ? `${data?.buisnessCity}, ${data?.buisnessState}, ${data?.buisnessCountry}` : 'N/A'}</h4>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default MyProfile;
