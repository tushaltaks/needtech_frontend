import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import HomeMan from "../assets/home-man.webp"
import FaStar from "../assets/fa_star.svg"
import FaBulb from "../assets/fa_bulb.svg"
import FaPeoplegroup from "../assets/fa_peoplegroup.svg"
import Partnerlogo1 from "../assets/partnerlogo1.png"
import Partnerlogo2 from "../assets/partnerlogo2.png"
import Partnerlogo3 from "../assets/partnerlogo3.png"
import Partnerlogo4 from "../assets/partnerlogo4.png"
import Topbg_img from "../assets/asas.svg"
import Bottombg_img from "../assets/ddddd.svg"
import Marketplace_img from "../assets/marketplace_bkgd-2641653.webp"
import { Link, useNavigate } from 'react-router-dom'
import Topbghome11 from "../assets/top_bg_new_home.svg"
import Down_bg from "../assets/down_bg.svg"
import Pfrm_img1 from "../assets/pfrm_img1.webp"
import Pfrm_img from "../assets/pfrm_img.webp"
import Down_bg_arrow from "../assets/down_bg_arrow.svg"
import Describe_bg from "../assets/describe_bg.svg"
import Entrepreneurs from '../Component/Modals/Entrepreneurs'
import Investor from '../Component/Modals/Investor'
import Goverment from '../Component/Modals/Goverment'
import { innovaOptions } from '../utils/Utils'
import { GetFunction } from '../utils/ApiFunctions'
import { baseURL } from '../utils/AxiosInstance'

const Home2 = () => {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [innova, setInnova] = React.useState('');
    const [categoryList, setCategoryList] = React.useState([])
    const navigate = useNavigate()
    const getCategoryList = async () => {

        const res = await GetFunction(`${baseURL}/getCategoryList`);

        if (res?.status == 200) {
            setCategoryList(res?.data)
        }
        else {
            toast.error(res?.data?.message)
        }
    };

    useEffect(() => {
        getCategoryList()
    }, [])
    return (
        <>
            <section className='tech_home2'>
                <Container>
                    <div className='tech_home2_in'>
                        <Row>
                            <Col md="7">
                                <div className='tech_home2_con'>
                                    <h1><span>Converting</span><br></br> Innovation<br></br> <span className='home_intro'>into</span> <div className='home_intro_in'>Reality</div></h1>
                                    <h3>The Next Generation of Necessity-Driven Startups</h3>

                                    <div className='tech_home2_search home_search'>
                                        <div className="home_search_in">
                                            <Form>
                                                {/* <div className="home_search_form">
                                                    <div className="home_search_itm">
                                                        <Form.Select aria-label="Default select example">
                                                            <option>Pick a Category</option>
                                                            <option value="1">Category 1</option>
                                                            <option value="2">Category 2</option>
                                                            <option value="3">Category 3</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="home_search_itm">
                                                        <Form.Select aria-label="Default select example">
                                                            <option value="">InnovaRate<sup>™</sup></option>
                                                            <option value="low">Low</option>
                                                            <option value="medium">Medium</option>
                                                            <option value="high">High</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="home_search_itm home_search_itm_btn">
                                                        <Button
                                                            className="btn btn_primary">
                                                            Search
                                                        </Button>
                                                    </div>
                                                </div> */}


                                                <div className='home_search_form'>
                                                    <div className='home_search_itm'>
                                                        <Form.Select

                                                            value={selectedCategory}

                                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                                            aria-label="Default select example">
                                                            <option>Pick a Category</option>
                                                            {
                                                                categoryList && categoryList?.map((val, i) => (
                                                                    <option
                                                                        value={val?._id} key={i}>{val?.title}</option>
                                                                ))}
                                                        </Form.Select>
                                                    </div>
                                                    <div className='home_search_itm'>
                                                        <Form.Select


                                                            value={innova}

                                                            onChange={(e) => setInnova(e.target.value)}
                                                            aria-label="Default select example">
                                                            <option value={''}>InnovaRate<sup>™</sup></option>
                                                            {
                                                                innovaOptions && innovaOptions?.map((val, i) => (
                                                                    <option
                                                                        value={val?.value} key={i}>{val?.label}</option>
                                                                ))
                                                            }
                                                        </Form.Select>
                                                    </div>
                                                    <div className='home_search_itm home_search_itm_btn'>
                                                        <Button className="btn btn_primary"
                                                            onClick={() => navigate(`/marketplace?category=${selectedCategory}&innovaRate=${innova}`)}
                                                        >Search</Button>
                                                    </div>
                                                </div>
                                            </Form>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="5">
                                <div className='tech_home2_img'>
                                    <img src={HomeMan} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <div className='tech_home2_meta'>
                <Container>
                    <div className='tech_home2_meta_itms'>
                        <div className='tech_home2_meta_itm'>
                            <div className='tech_home2_meta_itm_ic'><img src={FaStar} /></div>
                            <div className='tech_home2_meta_itm_con'>
                                <h3>First Ever</h3>
                                <p>Startup Innovation Machine For Business Generation</p>
                            </div>
                        </div>
                        <div className='tech_home2_meta_itm'>
                            <div className='tech_home2_meta_itm_ic'><img src={FaBulb} /></div>
                            <div className='tech_home2_meta_itm_con'>
                                <h3>10,000+</h3>
                                <p>Investment-Ready Startups Marketplace</p>
                            </div>
                        </div>
                        <div className='tech_home2_meta_itm'>
                            <div className='tech_home2_meta_itm_ic'><img src={FaPeoplegroup} /></div>
                            <div className='tech_home2_meta_itm_con'>
                                <h3>Empowering</h3>
                                <p>Bright Minds From All Walks Of Life</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
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
            <div className="divider-box-top">
                <img src={Topbg_img} />
            </div>
            <section className='home_unlck_sec'>
                <Container>
                    <div className='home_unlck_sec_in'>
                        <Row>
                            <Col lg="5">
                                <div className='home_unlck_sec_con'>
                                    <h2 className='home_2_heading'>Unlock Rapid Growth with Our Startup-in-a-Box Technology</h2>
                                    <div className='home_unlck_sec_con_in'>
                                        <p>Be part of the paradigm shift reshaping the startup landscape.</p>
                                        <p>Watch this exclusive video and discover how our bold philosophy rewrites the rules.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="7">
                                <div className='home_unlck_sec_video'>
                                    <div class="rwd-media">
                                        <iframe src="https://play.gumlet.io/embed/67c9669a9f16a95954e4642a" width="448" height="252" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <div className="divider-box-bottom">
                <img src={Bottombg_img} />
            </div>
            <section className='home_unlck_sec1'>
                <Container>
                    <div className='home_unlck_sec1_in'>
                        <Row>
                            <Col lg="6">
                                <div className='home_unlck_sec_img'>
                                    <img src={Marketplace_img} />
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='home_unlck_sec_con'>
                                    <h2 className='home_2_heading'>Own Patent-Secured Startups:<br></br> Pre-Vetted Startup-in-a-Box</h2>
                                    <div className='home_unlck_sec_con_in'>
                                        <p>Invest in innovative startups meticulously vetted through comprehensive due diligence and designed to tackle real-world needs, minimizing risk and maximizing growth potential.</p>
                                        <p>Each Startup-in-a-Box equips you with all essentials for success:</p>
                                        <p>➜ Patent-pending status<br></br>
                                            ➜ Freedom to Operate certificate<br></br>
                                            ➜ Comprehensive Business Plan<br></br>
                                            ➜ Executive Summary<br></br>
                                            ➜ Third-Party Valuation</p>
                                        <p>And other relevant documents.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className='home2_btn'>
                            <Link to="/marketplace" className='btn btn_primary'>Startup Now!</Link>
                        </div>
                    </div>
                </Container>
            </section>
            <div className="divider-box-top">
                <img src={Topbghome11} />
            </div>
            <section className='challenge-sec'>
                <Container>
                    <div className='challenge-sec-in'>
                        <Row>
                            <Col lg="6">
                                <div className='home_unlck_sec_con'>
                                    <h2 className='home_2_heading'><span>The Challenge:</span> Most Startups fail - It's a Fact</h2>
                                    <p>99% of startups worldwide fail because they try to innovate for the sake of innovation, instead of addressing genuine, real-world needs.</p>
                                    <h2 className='home_2_heading mt-4'><span>The Solution:</span> A Disruptive Paradigm-Shift </h2>
                                    <div className='home_unlck_sec_con_in'>
                                        <p>We invert the concept, identifying urgent, unmet needs and developing business opportunities born from necessity, not guesswork or hunch.</p>
                                        <p>Our unique approach significantly boosts success rates, maximizes value creation, and enhances exit opportunities.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='home_unlck_sec_img'>
                                    <img src={Pfrm_img1} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <div className="divider-box-bottom1">
                <img src={Down_bg_arrow} />
            </div>
            <section className='future-sec'>
                <Container>
                    <div className='future-sec-in'>
                        <Row>
                            <Col lg="6">
                                <div className='home_unlck_sec_img'>
                                    <img src={Pfrm_img} />
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='home_unlck_sec_con'>
                                    <h2 className='home_2_heading'>Let’s build a better future, together</h2>
                                    <div className='home_unlck_sec_con_in'>
                                        <p>If you are looking to transform genuine needs into thriving, successful businesses, NeedTech Labs is your partner of choice.</p>
                                        <p>Whether you are an entrepreneur, investor, or part of a social impact organization, together we can shape the future and drive meaningful innovation.</p>
                                        <p>Explore our marketplace of curated business opportunities and be part of the journey where necessity meets innovation.</p>
                                        <div className='home2_btn'>
                                            <Link to="/marketplace" className='btn btn_primary'>Startup Now!</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className='describe_sec'>
                <Container>
                    <div className='describe_sec_in'>
                        <h2 className='home_2_heading'>What better describes you?</h2>
                        <div className='describe_sec_btns'>
                            <Row>
                                <Col md="4">
                                    <div className='home2_btn'>
                                        <button onClick={() => {
                                            setShow(true)
                                        }} className='btn btn_primary'>Entrepreneur</button>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className='home2_btn'>
                                        <button onClick={() => {
                                            setShow1(true)
                                        }} className='btn btn_primary'>Investor/VC</button>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className='home2_btn'>
                                        <button onClick={() => {
                                            setShow2(true)
                                        }} className='btn btn_primary'>Government</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
            <div className="divider-box-bottom2">
                <img src={Describe_bg} />
            </div>

            <Entrepreneurs
                show={show}
                onHide={() => setShow(false)}
            />

            <Investor
                show={show1}
                onHide={() => setShow1(false)}
            />

            <Goverment
                show={show2}
                onHide={() => setShow2(false)}
            />
        </>
    );
}

export default Home2;
