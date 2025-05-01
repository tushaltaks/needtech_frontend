import React from 'react';
import { Modal } from 'react-bootstrap';
import DewberryLogo from "../../assets/dewberry_logo.jpg"
import { handleimageUrl } from '../../utils/ApiFunctions';
import Enterpre from "../../assets/enterpre.webp"
import { Link } from 'react-router-dom';

const Goverment = (props) => {

    return (
        <>
            <Modal {...props} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className='modal_sec_in'>
                        <div className='enterpre_img'><img src={'https://content.app-sources.com/s/358380726827620521/uploads/Descargado/pfrm_expl_unsplsh-ezY6rc65mUE-8678461.webp?format=webp'} /></div>
                        <div className='enterpre_con'>
                            <h2>For Governments</h2>
                            <p>NeedTech Labs is a disruptive catalyst for growth.
                                Providing applicable rapid-growth business opportunities, we help enhance community welfare and drive sustainable economic development.</p>
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

export default Goverment;
