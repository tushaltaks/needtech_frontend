import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import CheckIc from '../../assets/checkic.svg';
import { Link } from 'react-router-dom';
import { baseURL } from '../../utils/AxiosInstance';
import { GetFunction } from '../../utils/ApiFunctions';

const Step8 = ({ prev }) => {
    const [subscription, setSubscription] = useState('')

    const getPlan = async () => {
        const res = await GetFunction(`${baseURL}/getSubscriptionList`)
        if (res?.status == 200) {
            setSubscription(res?.data?.data[0])
        }
    };

    useEffect(() => {
        getPlan()
    }, [])


    return (
        <>
            <div className="step_body">
                <div className="step_form modal_sec_in">
                    <div className='modal_ic'><img src={CheckIc} /></div>
                    <h2 className='text-center heading_type2'>Congratulations!</h2>
                    <p>
                        You have finished the Onboarding Process successfully! :)
                    </p>
                    <p> Now, in order to unlock our unique Marketplace. Please activate your membership for ${subscription?.price}/month</p>
                    <div className='btn-flex'>
                        <div className='modal_flx'>
                            <Button as={Link} to="/buy-plan" className="btn btn_primary">Activate Membership Now</Button>

                        </div>

                        <div className='modal_flx'>
                            <Button as={Link} to="/marketplace" className="btn btn_primary">Continue With No Membership</Button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step8;
