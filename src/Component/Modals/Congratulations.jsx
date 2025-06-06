import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import CheckIc from '../../assets/checkic.svg';
import { Link } from 'react-router-dom';

const Congratulations = (props) => {
    return (
        <>
           <Modal {...props} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className='modal_sec_in'>
                        <div className='modal_ic'><img src={CheckIc}/></div>
                        <h2 className='text-center heading_type2'>Congratulations!</h2>
                        <p> Now, in order to unlock our unique Marketplace. Please activate your membership for $99/month</p>
                        <div className='modal_flx'>
                            <Button as={Link} to="/buy-plan" className="btn btn_primary">Activate Membership</Button>
                            <small>Unlock Startups Now!</small>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Congratulations;
