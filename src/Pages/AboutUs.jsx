import React from 'react';
import DanielPic from "../assets/Daniel-pic.webp"
import ShalomPic from "../assets/Shalom-pic.webp"
import ZipiPic from "../assets/Zipi-pic.webp"
import Linkedinic from "../assets/linkedinic.svg"
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
            <section className='about_sec'>
                <Container>
                    <div className='about_sec_in'>
                        <h1 className='heading_type1'>Get to know us...</h1>
                    </div>
                </Container>
            </section>
            <section className='abt_con'>
                <Container>
                    <div className='abt_con_in'>
                        <p>Our team comprises visionary experts committed to transforming the entrepreneurial landscape. With diverse backgrounds in technology, innovation, and marketing, our founders share a unified mission: to develop startups that address real needs while driving meaningful global change.</p>
                        <p>Their combined expertise empowers our ventures to not only solve real-world problems but also create a substantial impact in underserved markets. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </Container>
            </section>
            <section className='team_sec'>
                <Container>
                    <div className='team_sec_in'>
                        <Row>
                            <Col md="4">
                                <div className='team_sec_itm'>
                                    <div className='team_sec_itm_in'>
                                        <div className='team_sec_img'><img src={DanielPic} /></div>
                                        <div className='team_sec_con'>
                                            <h3 className='heading_type2'>Daniel Katz</h3>
                                            <p className='team_designation'>Chief Executive Officer</p>
                                            <div className='team_sec_info'>
                                                <p>With over 25 years of expertise as an online marketer, entrepreneur, and business consultant. Daniel is skilled at developing effective business strategies. His diverse experience spans business generation, leadership, and out-of-the-box thinking.</p>
                                            </div>                                        
                                        </div>
                                    </div>
                                    <div className='team_sec_ic'><Link to="/"><img src={Linkedinic} /></Link></div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className='team_sec_itm'>
                                    <div className='team_sec_itm_in'>
                                        <div className='team_sec_img'><img src={ZipiPic} /></div>
                                        <div className='team_sec_con'>
                                            <h3 className='heading_type2'>Zipi Weinreich</h3>
                                            <p className='team_designation'>Chief Business Officer</p>
                                            <div className='team_sec_info'>
                                                <p>Zipi has a robust background in sensitive roles at leading hi-tech and real estate firms. Her goal-oriented mindset highlights her managerial abilities. She is an invaluable asset in driving innovation and achieving business success.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='team_sec_ic'><Link to="/"><img src={Linkedinic} /></Link></div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className='team_sec_itm'>
                                    <div className='team_sec_itm_in'>
                                        <div className='team_sec_img'><img src={ShalomPic} /></div>
                                        <div className='team_sec_con'>
                                            <h3 className='heading_type2'>Shalom Daskal</h3>
                                            <p className='team_designation'>Chairman of the Board</p>
                                            <div className='team_sec_info'>
                                                <p>A seasoned executive with exceptional leadership abilities, a proven track record in business success, and deep technical expertise. Specializing in software products, Shalom excels in guiding teams to drive innovation and achieve strategic goals.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='team_sec_ic'><Link to="/"><img src={Linkedinic} /></Link></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className=''></section>
        </>
    );
}

export default AboutUs;
