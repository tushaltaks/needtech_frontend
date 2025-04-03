import React, { use, useEffect, useState } from 'react'
import { SubmitResponse } from '../utils/ApiFunctions'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../utils/AxiosInstance';
import toast from 'react-hot-toast';

function PaymentSuccess() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get("session_id");
    const buisnessId = queryParams.get("buisnessId");
    const callAPI = async () => {
        const data = {
            sessionId: sessionId,
            buisnessId: buisnessId
        }
        const res = await SubmitResponse(`${baseURL}/paymentSuccess`, data)

        if (res?.data?.status == 200 || res?.status == 200) {
            navigate('/my-business')
            toast.success(res?.data?.message)
        }
        else {
            navigate('/')
            toast.error(res?.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        callAPI()
    }, [])

    return (
        <div>

            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card text-center shadow-lg p-4 success-card">
                    <div className="check-icon">
                        <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <h2 className="text-success fw-bold">Payment Successful!</h2>
                    <p className="text-muted">Your order has been placed successfully.</p>
                    <p className="text-muted">You will be automatically redirected from here please wait.</p>

                    <div className="d-flex justify-content-center gap-3 mt-4">
                     {   loading &&
                        <div className="spinner-border text-success" role="status">
                        </div>}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default PaymentSuccess