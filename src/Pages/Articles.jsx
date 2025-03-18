import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogImg1 from "../assets/blog_img1.jpg"
import BlogImg2 from "../assets/blog_img2.jpg"
import BlogImg3 from "../assets/blog_img3.jpg"
import BlogImg4 from "../assets/blog_img4.jpg"
import BlogImg5 from "../assets/blog_img5.jpg"
import BlogImg6 from "../assets/blog_img6.jpg"
import BlogImg7 from "../assets/blog_img7.jpg"
import RightArrow from "../assets/right_arrow.svg"
import { Link } from 'react-router-dom';

const Articles = () => {
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
                            <Col md={6}>
                                <div className='article_sec_itm'>
                                    <div className='article_sec_img'><img src={BlogImg1} /></div>
                                    <div className='article_sec_con'>
                                        <h2 className='heading_type2'><Link to="/article-detail">How to Use Business Listings</Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        <Link to="/article-detail" className='readmore_btn'>Read article <img src={RightArrow} /></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='article_sec_itm'>
                                    <div className='article_sec_img_main'><div className='article_sec_img'><img src={BlogImg2} /></div></div>
                                    <div className='article_sec_con'>
                                        <h2 className='heading_type2'><Link to="/article-detail">How to Use Business Listings</Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        <Link to="/article-detail" className='readmore_btn'>Read article <img src={RightArrow} /></Link>
                                    </div>
                                </div>
                                <div className='article_sec_itm'>
                                <div className='article_sec_img_main'><div className='article_sec_img'><img src={BlogImg3} /></div></div>
                                    <div className='article_sec_con'>
                                        <h2 className='heading_type2'><Link to="/article-detail">How to Use Business Listings</Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        <Link to="/article-detail" className='readmore_btn'>Read article <img src={RightArrow} /></Link>
                                    </div>
                                </div>
                                <div className='article_sec_itm'>
                                <div className='article_sec_img_main'><div className='article_sec_img'><img src={BlogImg4} /></div></div>
                                    <div className='article_sec_con'>
                                        <h2 className='heading_type2'><Link to="/article-detail">How to Use Business Listings</Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        <Link to="/article-detail" className='readmore_btn'>Read article <img src={RightArrow} /></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='article_sec_list'>
                            <Col md={4}>
                                <div className='article_sec_itm'>
                                    <div className='article_sec_img'><img src={BlogImg5} /></div>
                                    <div className='article_sec_con'>
                                        <h2 className='heading_type2'><Link to="/article-detail">How to Use Business Listings</Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        <Link to="/article-detail" className='readmore_btn'>Read article <img src={RightArrow} /></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='article_sec_itm'>
                                    <div className='article_sec_img'><img src={BlogImg6} /></div>
                                    <div className='article_sec_con'>
                                        <h2 className='heading_type2'><Link to="/article-detail">How to Use Business Listings</Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        <Link to="/article-detail" className='readmore_btn'>Read article <img src={RightArrow} /></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='article_sec_itm'>
                                    <div className='article_sec_img'><img src={BlogImg7} /></div>
                                    <div className='article_sec_con'>
                                        <h2 className='heading_type2'><Link to="/article-detail">How to Use Business Listings</Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        <Link to="/article-detail" className='readmore_btn'>Read article <img src={RightArrow} /></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='article_sec_itm'>
                                    <div className='article_sec_img'><img src={BlogImg5} /></div>
                                    <div className='article_sec_con'>
                                        <h2 className='heading_type2'><Link to="/article-detail">How to Use Business Listings</Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        <Link to="/article-detail" className='readmore_btn'>Read article <img src={RightArrow} /></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='article_sec_itm'>
                                    <div className='article_sec_img'><img src={BlogImg6} /></div>
                                    <div className='article_sec_con'>
                                        <h2 className='heading_type2'><Link to="/article-detail">How to Use Business Listings</Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        <Link to="/article-detail" className='readmore_btn'>Read article <img src={RightArrow} /></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='article_sec_itm'>
                                    <div className='article_sec_img'><img src={BlogImg7} /></div>
                                    <div className='article_sec_con'>
                                        <h2 className='heading_type2'><Link to="/article-detail">How to Use Business Listings</Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        <Link to="/article-detail" className='readmore_btn'>Read article <img src={RightArrow} /></Link>
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

export default Articles;
