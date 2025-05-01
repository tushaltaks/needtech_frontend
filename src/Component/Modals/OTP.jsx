import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GreatJob from './GreatJob';
import { SubmitResponse } from '../../utils/ApiFunctions';
import { LoginbaseURL } from '../../utils/AxiosInstance';
import toast from 'react-hot-toast';

const OTP = (props) => {
    const [show, setShow] = useState(false);
    const [loader, setLoader] = useState(false);
    const [otp, setOtp] = useState(["", "", "", ""]); // Array for 4 OTP inputs

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [timer, setTimer] = useState(6); // 1-minute countdown
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const inputsRef = useRef([])

    useEffect(() => {

        if (timer > 0 && props.show) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setIsResendDisabled(false); // Enable Resend OTP
        }
    }, [timer, props.show]);


    const handleResendOTP = async () => {
        setIsResendDisabled(true);
        setTimer(60); // Restart the timer to 60 seconds
        const res = await SubmitResponse(`${LoginbaseURL}/register`, props?.formValue);
        if (res?.data?.status == 200) {
            toast.success(res?.data?.message);
        }
        else {
            toast.error()
            toast.error(res?.data?.message);
        }
    };




    const handleInputChange = (index, value) => {
        if (value.length > 1) return;
        if (/^\d*$/.test(value)) {
            // Allow only numeric values
            const updatedOtp = [...otp];
            updatedOtp[index] = value;
            setOtp(updatedOtp);

            // Move to the next input field
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && otp[index] === "") {
            if (index > 0) {
                document.getElementById(`otp-input-${index - 1}`).focus();
                const updatedOtp = [...otp];
                updatedOtp[index - 1] = ""; // Clear previous field
                setOtp(updatedOtp);
            }
        }
    };


    const handlePaste = (e) => {
        e.preventDefault(); // Prevent the default paste behavior
        const pastedData = e.clipboardData.getData("Text").slice(0, otp.length); // Get pasted data and slice it to OTP length
        const newOtp = [...otp];

        // Set the digits into the OTP array
        for (let i = 0; i < pastedData.length; i++) {
            newOtp[i] = pastedData[i];
        }
        setOtp(newOtp);
    };




    const OtpVerify = async (otp) => {
        if (otp.length === 4) {
            setLoader(true)
            const res = await SubmitResponse(`${LoginbaseURL}/verifyOtp`, { otp: otp, ...props?.formValue });
            if (res?.data?.status == 200) {

                localStorage.setItem('userId', res?.data?.data?._id);
                toast.success(res?.data?.message);
                props.onHide();
                handleShow();
            }
            else {
                setLoader(false)

                toast.dismiss()
                toast.error(res?.message);
            }

        }
    }


    return (
        <>
            <Modal {...props} centered backdrop="static" >
                <Modal.Header ></Modal.Header>
                <Modal.Body>
                    <div className='modal_sec_in'>
                        <h2 className='text-center heading_type2'>Email Verification</h2>
                        <p>
                            We've emailed a 4-digit code. Please find it in your inbox (or spam folder) and enter it here
                        </p>

                        <Form>
                            <div className="login_form_in">
                                <Form.Group className="form-group mt-4">


                                    <Row className="g-2">
                                        {otp.map((digit, index) => (
                                            <Col key={index} className="text-center">
                                                <Form.Control
                                                    ref={(el) => (inputsRef.current[index] = el)}
                                                    id={`otp-input-${index}`}
                                                    type="tel"
                                                    inputMode="numeric"
                                                    className="otp-input text-center"
                                                    required
                                                    onPaste={handlePaste}
                                                    value={digit}
                                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                                    maxLength={1}
                                                    autoComplete="off"
                                                    placeholder="-"
                                                />
                                            </Col>
                                        ))}
                                    </Row>


                                </Form.Group>
                                <Button
                                    className="btn btn_primary w-100"
                                    onClick={() => OtpVerify(otp.join(""))}
                                    disabled={otp.includes("")}
                                >
                                    Verify
                                </Button>
                            </div>
                            <div className='login_para cursor-pointer' >

                                <p>Haven't received the code? <span onClick={() => {
                                    if (!isResendDisabled) {
                                        handleResendOTP()
                                    }
                                }} className='login_a'>                                {isResendDisabled ? `Resend in ${timer}s` : "Resend"}
                                </span></p></div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
            <GreatJob
                show={show}
                onHide={handleClose}
            />
        </>
    );
}

export default OTP;
