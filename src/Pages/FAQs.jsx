import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { baseURL } from '../utils/AxiosInstance';
import { GetFunction } from '../utils/ApiFunctions';
import toast from 'react-hot-toast';

const FAQs = () => {
    const [page, setPage] = React.useState(1);
    const [limit] = React.useState(10);

    const [paginatio, setPagination] = useState({})



    const getBlogs = async () => {
        const res = await GetFunction(`${baseURL}/getFaqList?page=${page}&limit=${10}`);
        // console.log('res', res)
        if (res?.status == 200) {
            setPagination({
                currentPage: res?.data?.currentPage,
                totalPages: res?.data?.totalPages,
                totalRecords: res?.data?.totalRecords,
            });
            return res?.data?.data
        }
        else {
            toast.dismiss()
            toast.error(res?.data?.message)
        }
    };


    const { data, isLoading, refetch } = useQuery({
        queryKey: ['faqa', page],
        queryFn: getBlogs,
        onError: (error) => {
            toast.error(error.message);
        },


    })


    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in'>
                        <h1 className='heading_type1'>Frequently Asked Questions</h1>
                    </div>
                </Container>
            </div>
            <section className='faq_sec'>
                <Container>
                    <div className='faq_sec_in'>
                        <Accordion>
                            {
                                data && data?.map((val, i) => (
                                    <Accordion.Item eventKey={i}>
                                        <Accordion.Header>{val?.question}</Accordion.Header>
                                        <Accordion.Body>
                                            {val?.answer}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                            }


                        </Accordion>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default FAQs;
