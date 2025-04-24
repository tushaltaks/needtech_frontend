import React from 'react';
import { Modal } from 'react-bootstrap';
import DewberryLogo from "../../assets/dewberry_logo.jpg"
import { handleimageUrl } from '../../utils/ApiFunctions';

const ProviderDetails = (props) => {
    console.log('props?.showdata', props)
    return (
        <>
            <Modal {...props} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className={props?.showdata ? "modal_sec_in " :"locked_data modal_sec_in"}>
                        <center>
                            <div className=''>
                                <div className='service_provider_logo-new'><img src={props?.provider?.companyLogo ?
                                    handleimageUrl(props?.provider?.companyLogo)
                                    : DewberryLogo} />
                                </div>
                            </div>
                            </center>
                        <hr />
                        <div className='provider_d_itm provider_d_itm_bor'>
                            <h2>{props?.provider?.name}</h2>
                            <h4>{props?.provider?.jobTitle}</h4>
                            <p>{props?.provider?.companyName}</p>

                        </div>
                        <div className='provider_d_itm1 provider_d_itm'>

                            <p>Phone: {props?.provider?.phone}</p>
                            <p>Email: {props?.provider?.email}</p>
                        </div>
                        <div className='provider_d_itm2 provider_d_itm'>

                            <p>{props?.provider?.aboutCompany }</p>
                            <p>{props?.provider?.city}, {props?.provider?.country}</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProviderDetails;
