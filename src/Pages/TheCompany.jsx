import React from 'react';
import CompanyLeft from "../assets/companyLeft.webp"
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TheCompany = () => {
    return (
        <>
            <section className='about_sec company_sec'>
                <Container>
                    <div className='about_sec_in'>
                        <h1 className='heading_type1'>Learn about NeedTech Labs...</h1>
                    </div>
                </Container>
            </section>
            <section className='innovative_startup'>
                <Container>
                    <div className='innovative_startup_in'>
                        <Row>
                            <Col md="4">
                                <div className='innovative_startup_img'><img src={CompanyLeft}/></div>
                            </Col>
                            <Col md="8">
                                <div className='innovative_con'>
                                    <p>It's simple...</p>
                                    <h2>We create <br></br><span>innovative</span> startups <br></br>to solve <span>real-world</span> needs.</h2>
                                </div>                                
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className='abt_con abt_company'>
                <Container>
                    <div className='abt_con_in'>
                        <p>At NeedTech Labs, we are reshaping the future of innovation by creating necessity-driven startups that address the world’s most pressing challenges. Founded on the principles of social inclusion and technological advancement, we leverage cutting-edge generative meta-AI to identify and develop high-potential ventures across sectors such as communications, security, and healthcare.</p>
                        <p>Our robust hybrid-tech platform is capable of producing over 1,000 investment-ready startups each month. These ventures undergo a rigorous validation process, ensuring they meet genuine market needs and drive impactful solutions. Each startup is equipped with a US patent-pending application and a comprehensive business suite, including a business plan, FTO certificate, valuation, executive summary, and investor presentation.</p>
                        <p>To connect these groundbreaking ventures with our carefully selected audience, we have created a comprehensive Startups Marketplace. This platform offers a curated selection of innovative opportunities across diverse industries, streamlining the selection process, enabling investors to build a robust startup portfolio, and saving valuable time. Our marketplace empowers transformative growth and fosters lasting impact.</p>
                        <p>What sets NeedTech Labs apart is our commitment to fostering social inclusion and empowering visionaries. We provide the tools, resources, and marketplace exposure needed to transform innovative ideas into scalable, market-relevant ventures.</p>
                        <p>With a mission to bridge the gap between innovation and necessity, NeedTech Labs is not just creating startups; we’re building a future driven by meaningful disruption and transformative impact.</p>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default TheCompany;
