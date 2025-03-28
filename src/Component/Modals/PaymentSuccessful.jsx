import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import CheckIc from '../../assets/checkic.svg';
import { Link } from 'react-router-dom';

const PaymentSuccessful = (props) => {
    return (
        <>
           <Modal {...props} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className='modal_sec_in'>
                        <div className='modal_ic'><img src={CheckIc}/></div>
                        <h2 className='text-center heading_type2'>Thank You!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <Button as={Link} type='button' to="/marketplace" className="btn btn_primary">Explore Business</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default PaymentSuccessful;
