import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import DashboardImg from "../assets/dashboard_img.png"
import Partnerlogo1 from "../assets/partnerlogo1.png"
import Partnerlogo2 from "../assets/partnerlogo2.png"
import Partnerlogo3 from "../assets/partnerlogo3.png"
import Partnerlogo4 from "../assets/partnerlogo4.png"
import VideoIimg from "../assets/video_img.jpg"
import VideoPlay from "../assets/video_play.svg"
import HomeImg1 from "../assets/home_img1.png"
import HomeImg2 from "../assets/home_img2.png"
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
    <section className='sec_type1 bg_gray'>
        <Container>
            <div className='sec_type1_in'>
                <Row>
                    <Col lg={6}>
                        <div className='sec_type1_con content_gap'>
                            <h1 className='heading_type1'>Own Patent-Secured Startups: <span className='d_block'>Pre-Vetted Startup-in-a-Box<sup>TM</sup></span></h1>
                            <p>Invest in innovative startups, secured by rigorous due diligence and solving real-world challenges, to minimize risk and maximize scaling potential.</p>
                            <div className='btn_sec btn_sec_itms'>
                                <Link to="/signup" className='btn btn_primary'>Startup Now</Link>
                                <Link to="/the-company" className='btn btn_info'>Read More</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='sec_type1_img'>
                            <img src={DashboardImg} />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
    <section className="home_search">
        <Container>
          <div className="home_search_in">
            <Form>
              <div className='home_search_form'>
                <div className='home_search_itm'>
                    <Form.Select aria-label="Default select example">
                        <option>Pick a Category</option>
                        <option value="1">Agriculture</option>
                        <option value="2">Manufacturing</option>
                        <option value="3">Energy</option>
                        <option value="4">Water</option>
                        <option value="5">Wholesale and retail</option>
                        <option value="6">Tourism</option>
                        <option value="7">Food</option>
                        <option value="8">Information Technology and Communication</option>
                        <option value="9">Finance and Insurance</option>
                        <option value="10">Real Estate</option>
                        <option value="11">Professional Services</option>
                        <option value="12">Education</option>
                        <option value="13">Health & Pharma</option>
                        <option value="14">Culture, Arts, Recreation</option>
                        <option value="15">Sports</option>
                        <option value="16">Homeland Security and Defense</option>
                    </Form.Select>
                </div>
                <div className='home_search_itm'>
                    <Form.Select aria-label="Default select example">
                        <option>InnovaRate<sup>™</sup></option>
                        <option value="1">60 - 70</option>
                        <option value="2">71 - 80</option>
                        <option value="3">81 - 90</option>
                        <option value="3">91 - 100</option>
                    </Form.Select>
                </div>
                <div className='home_search_itm home_search_itm_btn'>
                  <Button className="btn btn_primary" type="submit">Search</Button>
                </div>
              </div>
            </Form>
          </div>
        </Container>
      </section>
      <section className='partner_sec'>
        <Container>
            <div className='partner_sec_in'>
                <p>Our Partners:</p>
                <div className='partner_sec_itms'>
                    <div className='partner_sec_itm'><img src={Partnerlogo1} /></div>
                    <div className='partner_sec_itm'><img src={Partnerlogo2} /></div>
                    <div className='partner_sec_itm'><img src={Partnerlogo3} /></div>
                    <div className='partner_sec_itm'><img src={Partnerlogo4} /></div>
                </div>
            </div>
        </Container>
      </section>
      <section className='sec_type2'>
        <Container>
            <div className='sec_type2_in'>
                <Row>
                    <Col md={6}>
                        <div className='sec_type2_con content_gap'>
                            <h2 className='heading_type2'>VCs & Entrepreneurs: <span className='d_block'>Unlock Rapid Growth with Our</span> Startup-in-a-Box Technology<sup>TM</sup></h2>
                            <p>Be part of the paradigm shift reshaping the startup landscape. Watch this exclusive video and discover how our bold philosophy rewrites the rules.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='sec_type2_img'>
                            <img src={VideoIimg} />
                            <div className='video_play_ic'><img src={VideoPlay} /></div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
      </section>
      <section className='quote_sec'>
        <Container>
            <div className='quote_sec_in'>
                <h2>"A paradigm-shift in startup innovation <span className='d_block'>is happening here, now."</span></h2>
                <p>- Daniel Katz</p>
            </div>
        </Container>
      </section>
      <section className='sec_type2'>
        <Container>
            <div className='sec_type2_in'>
                <Row>
                    <Col md={6}>
                        <div className='sec_type2_con content_gap'>
                            <h2 className='heading_type2'>Your Portfolio's Next Level: <span className='d_block'>Discover Our Marketplace.</span></h2>
                            <p>Quickly browse thousands of pre-vetted, <br />necessity-driven startup opportunities, precisely categorized across 12 core industries.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='sec_type2_img img_radius'>
                            <img src={HomeImg1} />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
      </section>
      <section className='sec_type2 sec_type2_right'>
        <Container>
            <div className='sec_type2_in'>
                <Row>
                    <Col md={6}>
                        <div className='sec_type2_con content_gap'>
                            <p>Each Startup-in-a-Box<sup>TM</sup>  provides a complete <span className='d_block'>business suite, ensuring you have everything</span> needed to succeed:</p>
                            <ul className='list_type1'>
                                <li>Patent-pending status</li>
                                <li>Freedom to Operate certificate</li>
                                <li>Comprehensive Business Plan</li>
                                <li>Executive Summary</li>
                                <li>Third-Party Valuation</li>
                                <li>And all other relevant due diligence documents.</li>
                            </ul>
                            <div className='btn_sec btn_sec_itms'>
                                <Link to="/signup" className='btn btn_primary'>Startup Now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='sec_type2_img img_radius'>
                            <img src={HomeImg2} />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
      </section>
    </>
  )
}

export default Home