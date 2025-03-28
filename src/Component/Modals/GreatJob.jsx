import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ThmbJob from '../../assets/thmbJob.svg';
import { Link } from 'react-router-dom';

const GreatJob = (props) => {
    return (
        <>
            <Modal {...props} keyboard={false} backdrop="static" centered>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    <div className='modal_sec_in'>
                        <div className='modal_ic'><img src={ThmbJob}/></div>
                        <h2 className='text-center heading_type2'>Good Job!</h2>
                        <p>Your email has been successfully validated.</p>
                        <p>Now let's proceed with our short Onboarding Process.</p>
                        <Button as={Link} to="/complete-profile" className="btn btn_primary">Click Here to Start</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default GreatJob;
