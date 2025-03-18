import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BackIc from "../assets/backIc.svg"
import BlogDetailimg from "../assets/blogDetailimg.jpg"
import Calanderic from "../assets/calanderic.svg"
import { Link } from 'react-router-dom';

const ArticleDetail = () => {
    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in'>
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
                                    <div className='article_detail_img'><img src={BlogDetailimg} /></div>
                                    <div className='article_meta'>
                                        <div className='article_meta_nm'>By Robert Aguilar</div>
                                        <div className='article_meta_time'><img src={Calanderic} /> 24-12-2025</div>
                                    </div>
                                    <div className='article_info'>
                                        <h1>Quickly reconceptualize strategic e-tailers</h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='article_right'>
                                    <div className='article_right_itm'>
                                        <h2 className='heading_type2'>Categories</h2>
                                        <ul className='cat_list'>
                                            <li className='cat_list_itm'><Link to="/">Retail <span>(12)</span></Link></li>
                                            <li className='cat_list_itm'><Link to="/">Finance Consulting <span>(12)</span></Link></li>
                                            <li className='cat_list_itm'><Link to="/">Fashion & Beauty <span>(12)</span></Link></li>
                                            <li className='cat_list_itm'><Link to="/">Food & Beverage <span>(12)</span></Link></li>
                                            <li className='cat_list_itm'><Link to="/">Health & Wellness <span>(12)</span></Link></li>
                                            <li className='cat_list_itm'><Link to="/">Home Services <span>(12)</span></Link></li>
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
