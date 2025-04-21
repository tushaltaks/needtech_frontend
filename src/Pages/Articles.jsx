import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DOMPurify from 'dompurify';

import BlogImg1 from "../assets/blog_img1.jpg"

import RightArrow from "../assets/right_arrow.svg"
import { Link } from 'react-router-dom';
import { GetFunction, handleimageUrl } from '../utils/ApiFunctions';
import { baseURL } from '../utils/AxiosInstance';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const Articles = () => {
    const [page, setPage] = React.useState(1);
    const [limit] = React.useState(10);
    const [pagination, setPagination] = useState('')

    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("categoryId");


    const getBlogs = async () => {
        const res = await GetFunction(`${baseURL}/getArticle?page=${page}&limit=${10}&category=${category || ''}`);
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
        queryKey: ['blogs', page, category],
        queryFn: getBlogs,
        onError: (error) => {
            toast.error(error.message);
        },


    })

    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in'><h1 className='heading_type1'>Articles</h1></div>
                </Container>
            </div>
            <section className='article_sec'>
                <Container>
                    <div className='article_sec_in'>
                        <Row className='article_sec_dlt'>
                            {data?.[0] && <Col md={6}>
                                <div className='article_sec_itm'>
                                    <div className='article_sec_img'><img src={data?.[0]?.image ? handleimageUrl(data?.[0]?.image) : ''} /></div>
                                    <div className='article_sec_con'>
                                        <h2 className='heading_type2'><Link to={`/article-detail/${data?.[0]?.slug}`}>{data?.[0]?.title}</Link></h2>

                                        <p>
                                            {DOMPurify.sanitize(data?.[0]?.description)
                                                .replace(/<[^>]+>/g, '') // Remove HTML tags
                                                .substring(0, 100)}
                                            {data?.[0]?.description?.replace(/<[^>]+>/g, '').length > 100 ? '...' : ''}
                                        </p>

                                        <Link to={`/article-detail/${data?.[0]?.slug}`} className='readmore_btn'>Read article <img src={RightArrow} /></Link>
                                    </div>
                                </div>
                            </Col>}
                            <Col md={6}>
                                {
                                    data?.length > 0 &&
                                    data?.slice(1, 4).map((item, index) => (
                                        <div className='article_sec_itm' key={index}>
                                            <div className='article_sec_img_main'><div className='article_sec_img'><img src={handleimageUrl(item?.image)} /></div></div>
                                            <div className='article_sec_con'>
                                                <h2 className='heading_type2'><Link to={`/article-detail/${item.slug}`}>{item?.title}</Link></h2>


                                                <p>
                                                    {DOMPurify.sanitize(item?.description)
                                                        .replace(/<[^>]+>/g, '') // Remove HTML tags
                                                        .substring(0, 100)}
                                                    {item?.description?.replace(/<[^>]+>/g, '').length > 100 ? '...' : ''}
                                                </p>
                                                <Link to={`/article-detail/${item.slug}`} className='readmore_btn'>Read article <img src={RightArrow} /></Link>
                                            </div>
                                        </div>
                                    ))
                                }

                            </Col>
                        </Row>
                        <Row className='article_sec_list'>

                            {
                                data?.length > 4 &&
                                data?.slice(4).map((item, index) => (
                                    <Col md={4} key={index}>

                                        <div className='article_sec_itm' >
                                            <div className='article_sec_img_main'><div className='article_sec_img'><img src={handleimageUrl(item?.image)} /></div></div>
                                            <div className='article_sec_con'>
                                                <h2 className='heading_type2'><Link to={`/article-detail/${item.slug}`}>{item?.title}</Link></h2>


                                                <p>
                                                    {DOMPurify.sanitize(item?.description)
                                                        .replace(/<[^>]+>/g, '') // Remove HTML tags
                                                        .substring(0, 100)}
                                                    {item?.description?.replace(/<[^>]+>/g, '').length > 100 ? '...' : ''}
                                                </p>
                                                <Link to={`/article-detail/${item.slug}`} className='readmore_btn'>Read article <img src={RightArrow} /></Link>
                                            </div>
                                        </div>
                                    </Col>

                                ))
                            }

                        </Row>
                        <center>
                            <Col>
                            <h3>No Blogs Found!</h3>
                            </Col>
                        </center>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Articles;
