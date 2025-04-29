import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BackIc from "../assets/backIc.svg"
import BlogDetailimg from "../assets/blogDetailimg.jpg"
import Calanderic from "../assets/calanderic.svg"
import { Link, useParams } from 'react-router-dom';
import { baseURL } from '../utils/AxiosInstance';
import { GetFunction, handleimageUrl } from '../utils/ApiFunctions';
import toast from 'react-hot-toast';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import Loader from '../Component/Loader';

const ArticleDetail = () => {
    const { id } = useParams();
    const [loader, setLoader] = useState(true)
    const [blogDetail, setBlogDetail] = useState('')
    const [categoryList, setCategoryList] = useState([])

    const getBlogDetails = async () => {
        const res = await GetFunction(`${baseURL}/getArticleDetail/${id}`)

        if (res?.status == 200) {

            setBlogDetail(res?.data)
        }
        else {
            toast.dismiss()
            toast.error(res?.message);
        }
        setLoader(false)
    }

    const getCategoryList = async () => {
        const res = await GetFunction(`${baseURL}/getCategroyForBlog`);

        if (res?.status == 200) {
            setCategoryList(res?.data)
        }
        else {
            toast.error(res?.data?.message)
        }
    };
    useEffect(() => {
        if (id) {
            getBlogDetails()
        }
        getCategoryList()
    }, [id])
    if (loader) {
        return <Loader />;
    }
    return (
        <>
            <Helmet>
                <title>{blogDetail?.title}</title>

            </Helmet>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in backbtn_s'>
                        <Link to="/articles"><img src={BackIc} /> Back to Articles</Link>
                    </div>
                </Container>
            </div>
            <section className='article_detail'>
                <Container>
                    <div className='article_detail_in'>
                        <Row>
                            <Col md={8}>
                                <div className='article_content'>
                                    <div className='article_detail_img'><img src={blogDetail?.image ? handleimageUrl(blogDetail?.image) : BlogDetailimg} /></div>
                                    <div className='article_meta'>
                                        <div className='article_meta_nm'>By {blogDetail?.author}</div>
                                        <div className='article_meta_time'><img src={Calanderic} /> {moment(blogDetail?.createdAt).format('DD-MM-YYYY')}</div>
                                    </div>
                                    <div className='article_info'>
                                        <h1>{blogDetail?.title}</h1>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: blogDetail?.description
                                            }}
                                        >

                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='article_right'>
                                    <div className='article_right_itm'>
                                        <h2 className='heading_type2'>Categories</h2>
                                        <ul className='cat_list'>
                                            {
                                                categoryList && categoryList?.map((val, i) => (
                                                    <li key={i} className='cat_list_itm'><Link to={`/articles?categoryId=${val?._id}`}>{val?.title} <span>({val?.categoryBlogCount || 0})</span></Link></li>

                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default ArticleDetail;
