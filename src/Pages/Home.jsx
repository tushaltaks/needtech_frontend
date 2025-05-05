import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import DashboardImg from "../assets/dashboard_img.png";
import Partnerlogo1 from "../assets/partnerlogo1.png";
import Partnerlogo2 from "../assets/partnerlogo2.png";
import Partnerlogo3 from "../assets/partnerlogo3.png";
import Partnerlogo4 from "../assets/partnerlogo4.png";
import VideoIimg from "../assets/video_img.jpg";
import VideoPlay from "../assets/video_play.svg";
import HomeImg1 from "../assets/home_img1.png";
import HomeImg2 from "../assets/home_img2.png";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../utils/AxiosInstance";
import { GetFunction, handleimageUrl } from "../utils/ApiFunctions";
import toast from "react-hot-toast";
import { innovaOptions } from "../utils/Utils";

const renderVideo = (videoUrl) => {
  const videoRef = useRef(null);

  const lower = videoUrl.toLowerCase();

  if (lower.includes("youtube.com") || lower.includes("youtu.be")) {
    // Extract YouTube video ID
    // const videoId = lower.includes("youtu.be")
    //     ? lower.split("youtu.be/")[1]
    //     : new URLSearchParams(new URL(videoUrl)?.search)?.get("v");

    const videoId = videoUrl.split("/").pop(); // returns 'LBC16jhiwak'

    return (
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-md shadow-md"
      />
    );
  } else if (lower.includes("facebook.com")) {
    return (
      <iframe
        src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
          videoUrl
        )}&show_text=false&autoplay=0`}
        width="100%"
        height="400"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-md shadow-md"
      ></iframe>
    );
  } else if (lower.endsWith(".mp4")) {
    return (
      <div className="home_unlck_sec_video">
        <div class="rwd-media">
          <iframe
            src={videoUrl}
            width="448"
            height="252"
            frameborder="0"
            webkitAllowFullScreen
            mozallowfullscreen
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  } else {
    return <p className="text-red-500">Unsupported video format or link</p>;
  }
};

function Home() {
  const navigate = useNavigate();
  const [cmsData, setCmsData] = useState("");
  const [showPlayIcon, setShowPlayIcon] = useState(true);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [innova, setInnova] = React.useState("");
  const [categoryList, setCategoryList] = React.useState([]);
  const getCategoryList = async () => {
    const res = await GetFunction(`${baseURL}/getCategoryList`);

    if (res?.status == 200) {
      setCategoryList(res?.data);
    } else {
      toast.error(res?.data?.message);
    }
  };

  const getCmsData = async () => {
    const res = await GetFunction(`${baseURL}/getCms/Home VideoURL`);
    if (res?.status == 200) {
      setCmsData(res?.data?.[0]?.homeVideoUrl);
    } else {
      toast.error(res?.data?.message);
    }
  };

  useEffect(() => {
    getCmsData();
    getCategoryList();
  }, []);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayIcon(false);
    }
  };

  return (
    <>
      <section className="sec_type1 bg_gray">
        <Container>
          <div className="sec_type1_in">
            <Row>
              <Col lg={6}>
                <div className="sec_type1_con content_gap">
                  <h1 className="heading_type1">
                    Own Patent-Secured Startups:{" "}
                    <span className="d_block">
                      Pre-Vetted Startup-in-a-Box<sup>TM</sup>
                    </span>
                  </h1>
                  <p>
                    Invest in innovative startups, secured by rigorous due
                    diligence and solving real-world challenges, to minimize
                    risk and maximize scaling potential.
                  </p>
                  <div className="btn_sec btn_sec_itms">
                    <Link to="/marketplace" className="btn btn_primary">
                      Startup Now
                    </Link>
                    <Link to="/the-company" className="btn btn_info">
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="sec_type1_img">
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
              <div className="home_search_form">
                <div className="home_search_itm">
                  <Form.Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    aria-label="Default select example"
                  >
                    <option>Pick a Category</option>
                    {categoryList &&
                      categoryList?.map((val, i) => (
                        <option value={val?._id} key={i}>
                          {val?.title}
                        </option>
                      ))}
                  </Form.Select>
                </div>
                <div className="home_search_itm">
                  <Form.Select
                    value={innova}
                    onChange={(e) => setInnova(e.target.value)}
                    aria-label="Default select example"
                  >
                    <option value={""}>
                      InnovaRate<sup>™</sup>
                    </option>
                    {innovaOptions &&
                      innovaOptions?.map((val, i) => (
                        <option value={val?.value} key={i}>
                          {val?.label}
                        </option>
                      ))}
                  </Form.Select>
                </div>
                <div className="home_search_itm home_search_itm_btn">
                  <Button
                    className="btn btn_primary"
                    onClick={() =>
                      navigate(
                        `/marketplace?category=${selectedCategory}&innovaRate=${innova}`
                      )
                    }
                  >
                    Search
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </Container>
      </section>
      <section className="partner_sec">
        <Container>
          <div className="partner_sec_in">
            <p>Our Partners:</p>
            <div className="partner_sec_itms">
              <div className="partner_sec_itm">
                <img src={Partnerlogo1} />
              </div>
              <div className="partner_sec_itm">
                <img src={Partnerlogo2} />
              </div>
              <div className="partner_sec_itm">
                <img src={Partnerlogo3} />
              </div>
              <div className="partner_sec_itm">
                <img src={Partnerlogo4} />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="sec_type2">
        <Container>
          <div className="sec_type2_in">
            <Row>
              <Col md={6}>
                <div className="sec_type2_con content_gap">
                  <h2 className="heading_type2">
                    VCs & Entrepreneurs:{" "}
                    <span className="d_block">
                      Unlock Rapid Growth with Our
                    </span>{" "}
                    Startup-in-a-Box Technology<sup>TM</sup>
                  </h2>
                  <p>
                    Be part of the paradigm shift reshaping the startup
                    landscape. Watch this exclusive video and discover how our
                    bold philosophy rewrites the rules.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="sec_type2_img">
                  {renderVideo(cmsData)}
                  {/* <video
                                        src={handleimageUrl(cmsData)}
                                        controls
                                        className=""
                                        ref={videoRef}
                                        onPlay={() => setShowPlayIcon(false)}
                                        onPause={() => setShowPlayIcon(true)}

                                    /> */}
                  {/* {showPlayIcon&& <div
                                        onClick={playVideo}
                                        className='video_play_ic'>
                                        <img src={VideoPlay} />
                                    </div>} */}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="quote_sec">
        <Container>
          <div className="quote_sec_in">
            <h2>
              "A paradigm-shift in startup innovation{" "}
              <span className="d_block">is happening here, now."</span>
            </h2>
            <p>- Daniel Katz</p>
          </div>
        </Container>
      </section>
      <section className="sec_type2">
        <Container>
          <div className="sec_type2_in">
            <Row>
              <Col md={6}>
                <div className="sec_type2_con content_gap">
                  <h2 className="heading_type2">
                    Your Portfolio's Next Level:{" "}
                    <span className="d_block">Discover Our Marketplace.</span>
                  </h2>
                  <p>
                    Quickly browse thousands of pre-vetted, <br />
                    necessity-driven startup opportunities, precisely
                    categorized across 12 core industries.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="sec_type2_img img_radius">
                  <img src={HomeImg1} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sec_type2 sec_type2_right">
        <Container>
          <div className="sec_type2_in">
            <Row>
              <Col md={6}>
                <div className="sec_type2_con content_gap">
                  <p>
                    Each Startup-in-a-Box<sup>TM</sup>  provides a complete{" "}
                    <span className="d_block">
                      business suite, ensuring you have everything
                    </span>{" "}
                    needed to succeed:
                  </p>
                  <ul className="list_type1">
                    <li>Patent-pending status</li>
                    <li>Freedom to Operate certificate</li>
                    <li>Comprehensive Business Plan</li>
                    <li>Executive Summary</li>
                    <li>Third-Party Valuation</li>
                    <li>And all other relevant due diligence documents.</li>
                  </ul>
                  <div className="btn_sec btn_sec_itms">
                    <Link to="/marketplace" className="btn btn_primary">
                      Startup Now
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="sec_type2_img img_radius">
                  <img src={HomeImg2} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
