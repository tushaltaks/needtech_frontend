import React from 'react';
import { Modal } from 'react-bootstrap';
import DewberryLogo from "../../assets/dewberry_logo.jpg"
import { handleimageUrl } from '../../utils/ApiFunctions';
import Enterpre from "../../assets/enterpre.webp"
import { Link } from 'react-router-dom';

const Investor = (props) => {

    return (
        <>
            <Modal {...props} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className='modal_sec_in'>
                        <div className='enterpre_img'><img src={Enterpre} /></div>
                        <div className='enterpre_con'>
                            <h2>For Entrepreneurs</h2>
                            <p>At NeedTech Labs, Entrepreneurs take advantage of empowerment through Innovation.<br></br>
                                We deliver business-ready, IP-protected startups that solve real-world needs, creating impactful solutions for untapped markets.</p>
                            <div className='home2_btn'>
                                <Link to="/" className='btn btn_primary'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Investor;
