import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import CheckIc from '../../assets/checkic.svg';
import { Link } from 'react-router-dom';

const Step8 = ({ prev }) => {
    return (
        <>
            <div className="step_body">
                <div className="step_form modal_sec_in">
                        <div className='modal_ic'><img src={CheckIc}/></div>
                        <h2 className='text-center heading_type2'>Congratulations!</h2>
                        <p>You have finished the Onboarding process. Now, in order to unlock our unique Marketplace. Please activate your membership for $99/month</p>
                        <div className='modal_flx'>
                            <Button as={Link} to="/buy-plan" className="btn btn_primary">Activate Membership</Button>
                            <small>Unlock Startups Now!</small>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Step8;
