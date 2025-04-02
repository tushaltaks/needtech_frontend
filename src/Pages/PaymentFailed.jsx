import React, { useEffect } from 'react'

function PaymentFailed() {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/";
        }, 50000);
    }, [])
    return (
        <div>PaymentFailed</div>
    )
}

export default PaymentFailed