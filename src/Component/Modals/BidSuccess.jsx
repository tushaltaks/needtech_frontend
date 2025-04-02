import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import CheckIc from '../../assets/checkic.svg';

const BidSuccess = (props) => {
    return (
        <>
            <Modal {...props} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className='modal_sec_in'>
                        <div className='modal_ic'><img src={CheckIc} /></div>
                        <h2 className='text-center heading_type2'>Thank You!</h2>
                        <p className='bid_descr'>Your bid has been successfully submitted. You'll be notified whether your bid is accepted or now, via email.</p>
                        <hr />
                        <p className='your_price'>Your bid price is:</p>
                        <p className='text-center'><span className='bid_price'>${props?.bidPrice}</span></p>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default BidSuccess;
