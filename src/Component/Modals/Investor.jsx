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
                        <div className='enterpre_img'><img src={'https://content.app-sources.com/s/358380726827620521/uploads/Descargado/pfrm_expl_unsplsh-376KN_ISplE-8679187.webp?format=webp'} /></div>
                        <div className='enterpre_con'>
                            <h2>For Investors/VC</h2>
                            <p>Invest in Impact. Access to a pipeline of IP-secured startups primed for disruptive innovation, ensuring a fast, safe, and significant-returns portfolio.</p>
                            <div className='home2_btn'>
                                <Link to="/the-company" className='btn btn_primary'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Investor;
