import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ForgotPasswordImg from '../../assets/forgotPassword.svg';

const SendEmail = (props) => {
    return (
        <>
        <Modal {...props} centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <div className='modal_sec_in'>
                    <div className='modal_ic'><img src={ForgotPasswordImg}/></div>
                    <h2 className='text-center heading_type2'>Forgot Password</h2>
                    <p>We have sent you an email to reset your password to:</p>
                    <p>“you@example.com”</p>  
                    <Button type='button' className="btn btn_primary">OK</Button>   
                </div>
            </Modal.Body>
        </Modal>
            
        </>
    );
}

export default SendEmail;
