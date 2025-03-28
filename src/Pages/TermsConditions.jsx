import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { GetFunction, SubmitResponse } from '../utils/ApiFunctions';
import { baseURL } from '../utils/AxiosInstance';
import toast from 'react-hot-toast';

const TermsConditions = () => {

    const [cmsData, setCmsData] = useState('')

    const getCmsData = async () => {

        const res = await GetFunction(`${baseURL}/getCms/terms`);
        if (res?.status == 200) {
            setCmsData(res?.data[0])
        }
        else {
            toast.error(res?.data?.message)
        }
    };
    useEffect(() => {
        getCmsData()
    }, [])


    return (
        <>
            <section className='static_con'>
                <Container>
                    <div className='static_con_in'
                        dangerouslySetInnerHTML={{
                            __html: cmsData?.description
                        }}>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default TermsConditions;
