import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { bidpopup } from '../../utils/Utils';

const UnloackRequestPopup = (props) => {
    const navigate = useNavigate()
    return (
        <>
            <Modal {...props} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="modal_sec_in">
                        <h2 className="text-center heading_type2">Premium Membership </h2>
                        <p>Become a premium member to purchase or bid on our innovative startups</p>

                        <Button

                            onClick={() => navigate('/buy-plan')}
                            className='btn btn_primary'
                        >
                            Activate your monthly membership now
                        </Button>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default UnloackRequestPopup;
