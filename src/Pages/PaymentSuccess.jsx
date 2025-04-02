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
        const res = await SubmitResponse(`${baseURL}/paymentSuccess`,  data )
        console.log(res)
        if (res?.data?.status == 200) {
            navigate('/my-business')
            toast.success(res?.data?.message)
        }
        else {
            navigate('/')
            toast.error(res?.data?.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        callAPI()
    }, [])

    return (
        <div>
            {loading ? <div>Loading...</div> : <div>Payment Success</div>}
        </div>
    )
}

export default PaymentSuccess