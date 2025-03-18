import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BackIc from "../assets/backIc.svg"
import HeartIcon from "../assets/heartIc.png"
import Startupimg11 from "../assets/startupimg11.jpg"
import VerifiedIc from "../assets/verifiedIc.svg"
import NewIc from "../assets/newIc.svg"
import GrowIc from "../assets/grow_ic.svg"
import Agric1 from "../assets/agric1.svg"
import Agric2 from "../assets/agric2.svg"
import Agric3 from "../assets/agric3.svg"
import Logo_approved from "../assets/logo_approved.png"
import OfferBid from '../Component/Modals/OfferBid';
import Businessic from "../assets/businessic.svg"
import DownloadIc from "../assets/downloadIc.svg"

const MarketDetailLogin = () => {
    const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return (
        <>
            <div className='inner_head'>
                <Container>
                    <div className='inner_head_in'>
                        <Link to="/my-business"><img src={BackIc} /> Back to Startups</Link>
                    </div>
                </Container>
            </div>
            <section className='market_detail'>
                <Container>
                    <div className='market_detail_in'>
                        <div className='market_meta'>
                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={VerifiedIc} /></div><span>Verified</span></div>
                            <div className='market_meta_itm'><div className='market_meta_itm_ic'><img src={NewIc} /></div><span>New Startup</span></div>
                            <div className='market_meta_itm market_meta_itm_data'><span>Health & 2 more</span></div>
                        </div>
                        <div className='market_detail_heading'>
                            <h1 className='heading_type1'>Novel Fat Formulation</h1>
                        </div>
                        <div className='market_detail_s'>
                            <Row>
                                <Col md={8}>
                                    <div className='market_detail_s_in'>
                                        <div className='market_detail_img'>
                                            <div className='market_detail_img_in'>
                                                <img src={Startupimg11} />
                                            </div>
                                        </div>
                                        <div className='market_detail_info'>
                                            <div className='market_list_right_meta'>
                                                <div className='market_list_right_meta_ic'><img src={Agric1} /></div>
                                                <div className='market_list_right_meta_ic'><img src={Agric2} /></div>
                                                <div className='market_list_right_meta_ic'><img src={Agric3} /></div>
                                            </div>
                                            <div className='market_list_rate'>
                                                <p>InnovaRate:</p>
                                                <h4>79%</h4>
                                            </div>
                                            <div className='market_list_rate'>
                                                <p>Market Readiness Rate:</p>
                                                <h4>83%</h4>
                                            </div>
                                            <div className='market_list_rate'>
                                                <p>Market Growth:</p>
                                                <h4>9.3% <img src={GrowIc} /></h4>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='market_detail_right'>
                                        <div className='market_detail_right_con'>
                                            <div className='market_detail_right_in'>
                                                <div className='market_detail_logo'><img src={Logo_approved} /></div>
                                                {/* <div className='market_detail_time'>
                                                    <p>Business Started</p>
                                                    <h4>(13 years 1 month old)</h4>
                                                </div> */}
                                            </div>
                                            <div className='heart_ic'><img src={HeartIcon} /></div>
                                        </div>
                                        <div className='acquired_sec'>
                                            <div className='acquired_sec_img'><img src={Businessic}/></div>
                                            <h2 className='acquired_heading'>Acquired</h2>
                                            <p className='acquired_date'>January 23rd, 2025</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='product_detail'>
                            <Row>
                                <Col md={8}>
                                    <div className='product_detail_in content_gap'>
                                        <h2 className='heading_type2'>Product Detail</h2>
                                        <p >A novel fat formulation leverages customizable triglyceride compositions to meet diverse industry requirements. By selecting specific fatty acid chain lengths, this innovation offers enhanced stability and tailored functional properties suitable for food, pharmaceuticals, and cosmetics. Explore the potential for significant health benefits and industry advancements without compromising quality or performance.</p>
                                        <h2 className='heading_type2'>Abstract</h2>
                                        <p >A novel Fat Formulation is introduced, primarily consisting of triglycerides where glycerol is esterified with linear saturated fatty acids. This composition can be formulated as a gapped version that includes the use of exclusively even- or odd-chain length fatty acids, or a mixture of both. The ability to select specific chain lengths allows for customizable functional properties, making the composition suitable for diverse applications such as food, pharmaceuticals, and cosmetics. Enhanced oxidative stability and structured melting behavior characterize this innovative Fat Formulation, offering potential health benefits by avoiding trans fats while meeting desired textural and stability requirements. Advanced lipid processing techniques ensure high purity and precision in fatty acid profiles, catering to industry needs for specific processing and consumption attributes.</p>
                                        <h2 className='heading_type2'>Methodology</h2>
                                        <p >The composition is formulated through precise esterification processes, where glycerol is systematically combined with saturated fatty acids. The choice of even-chain, odd-chain, or mixed chain lengths allows for targeted modifications of the fat's physical properties, such as melting points and stability. This careful selection and combination of fatty acids can tailor the composition to eschew trans fats while maintaining desired textural and functional qualities.</p>
                                        <h2 className='heading_type2'>Technology</h2>
                                        <p >The manufacturing process employs advanced lipid processing techniques to ensure high purity and consistency. Sophisticated analytical technologies, such as gas chromatography and mass spectrometry, are utilized to characterize and control the composition's chemical profile, ensuring each batch meets stringent quality standards.</p>
                                        <h2 className='heading_type2'>Features</h2>
                                        <ul className='list_type1'>
                                            <li>Customizability: The composition can be precisely tailored to contain specific chain lengths of fatty acids, offering flexibility in optimizing functionality for different applications.</li>
                                            <li>Stability: Saturated fatty acids contribute to enhanced oxidative stability, prolonging shelf life and maintaining quality under various storage conditions.</li>
                                            <li>Functionality: The ability to customize the triglyceride structure allows modification of melting behavior, which is advantageous for applications needing specific physical characteristics, such as spreadability or bake stability.</li>
                                        </ul>
                                        <h2 className='heading_type2'>Practical Use</h2>
                                        <ul className='list_type1'>
                                            <li>Food Industry: The composition can serve as a healthier alternative to hydrogenated fats in processed foods, offering similar textural properties without introducing trans fats.</li>
                                            <li>Pharmaceuticals: Its stable nature makes it suitable for use as an excipient in drug formulations, enhancing the delivery and stability of active compounds.</li>
                                            <li>Cosmetics: This composition provides a robust base in skin care and cosmetic products, enhancing product texture and delivering consistent sensory qualities.</li>
                                        </ul>
                                        <p>Overall, this innovative Fat Formulation provides a versatile, stable, and customizable platform suitable for a broad range of applications, addressing both functional needs and health considerations.</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='product_detail_assets'>
                                        <h2 className='heading_type2'>Assets Included</h2>
                                        <ul className='list_type1'>
                                            <li>Business Plan</li>
                                            <div className='download_assets'><Link to="/market-detail-login"><img src={DownloadIc}/> Download Now</Link></div>
                                            <li>Executive Summary</li>
                                            <div className='download_assets'><Link to="/market-detail-login"><img src={DownloadIc}/> Download Now</Link></div>
                                            <li>Provisional Patent</li>
                                            <div className='download_assets'><Link to="/market-detail-login"><img src={DownloadIc}/> Download Now</Link></div>
                                            <li>FTO Certificate</li>
                                            <div className='download_assets'><Link to="/market-detail-login"><img src={DownloadIc}/> Download Now</Link></div>
                                            <li>3rd Party Valuation</li>
                                            <div className='download_assets'><Link to="/market-detail-login"><img src={DownloadIc}/> Download Now</Link></div>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
            <OfferBid
                show={show}
                onHide={handleClose}
            />
        </>
    );
}

export default MarketDetailLogin;
