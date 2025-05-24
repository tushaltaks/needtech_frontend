import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button, Tabs, Tab } from "react-bootstrap";
import HeartIcon from "../assets/heartIc.png";
import Startupim1 from "../assets/startupim1.jpg";
import DewberryLogo from "../assets/dewberry_logo.jpg";
import HeartIconFilled from "../assets/heartFilledIc.png";
import DOMPurify from "dompurify";
import BusinessImg1 from "../assets/business_img1.jpg";
import VerifiedIc from "../assets/verifiedIc.svg";
import NewIc from "../assets/newIc.svg";
import GrowIc from "../assets/grow_ic.svg";
import Agric1 from "../assets/agric1.svg";
import Agric2 from "../assets/agric2.svg";
import Agric3 from "../assets/agric3.svg";
import Lokedic from "../assets/lokedic.svg";
import { Link } from "react-router-dom";
import {
  GetFunction,
  handleErrorImage,
  handleimageUrl,
  SubmitResponse,
} from "../utils/ApiFunctions";
import { baseURL } from "../utils/AxiosInstance";
import toast from "react-hot-toast";
import Loader from "../Component/Loader";

const MyWishlist = () => {
  const validSubscriptionId = localStorage.getItem("subscriptionId");
  const subscriptionId =
    validSubscriptionId && validSubscriptionId !== "null"
      ? validSubscriptionId
      : "";
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [key, setKey] = useState("startup");
  const [loader, setLoader] = useState(true);

  const [page, setPage] = useState(1);

  const [paginatio, setPagination] = useState({});
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const getBusinessList = async () => {
    const res = await GetFunction(
      `${baseURL}/userWishList?page=${page}&limit=10&search=${search}&type=${key}`
    );
    setLoader(false);

    if (res?.status == 200) {
      setPagination({
        totalRecords: res?.total,
        totalPages: res?.totalPages,
      });
      setList(res?.data?.data);
    } else {
      toast.error(res?.data?.message);
    }
  };

  useEffect(() => {
    getBusinessList();
  }, [key,page]);

  const addToWishList = async (id, type) => {
    if (type == "buisness") {
      const res = await SubmitResponse(`${baseURL}/AddtowishList`, {
        businessId: id,
      });
      if (res?.status == 200) {
        toast.dismiss();
        toast.success(res?.data?.message);
        getBusinessList();
      } else {
        toast.dismiss();
        toast.error(res?.data?.message);
      }
    } else {
      const res = await SubmitResponse(`${baseURL}/AddtowishList`, {
        proivider: id,
      });
      if (res?.status == 200) {
        toast.dismiss();
        toast.success(res?.data?.message);
        getBusinessList();
      } else {
        toast.dismiss();
        toast.error(res?.data?.message);
      }
    }
  };

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <div className="inner_head mb-2">
        <Container>
          <div className="inner_head_in">
            <h1 className="heading_type1 mb-0">My Wishlist</h1>
          </div>
        </Container>
      </div>
      <section className="market_list">
        <Container>
          <Tabs
            id="Tabs-List"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="startup" title="Startups">
              <div className="market_list_itms">
                {list?.[0]?.businessData?.length > 0 ? (
                  list?.[0]?.businessData?.map((val, i) => (
                    <div className="market_list_itm" key={i}>
                      <div className="market_list_img">
                        <div className="market_list_img_in">
                          <img
                            src={
                              val?.image
                                ? handleimageUrl(val?.image)
                                : Startupim1
                            }
                            onError={handleErrorImage}
                          />
                        </div>
                      </div>
                      <div className="market_list_con">
                        <div className="market_list_con_in">
                          <div className="market_meta">
                            <div className="market_meta_itm">
                              <div className="market_meta_itm_ic">
                                <img src={VerifiedIc} />
                              </div>
                              <span>Verified</span>
                            </div>
                            <div className="market_meta_itm">
                              <div className="market_meta_itm_ic">
                                <img src={NewIc} />
                              </div>
                              <span>New Startup</span>
                            </div>
                            <div className="market_meta_itm market_meta_itm_data">
                              <span>
                                {val?.businessCategory?.[0]?.title}
                                {val?.businessCategory?.length > 1 &&
                                  ` & ${val.businessCategory.length - 1} more`}
                              </span>
                            </div>
                          </div>
                          <div className="market_list_info">
                            <h3 className="heading_type2">{val?.title}</h3>
                            <p className={token ? "" : "locked_data"}>
                              {DOMPurify.sanitize(val?.shortDescription)
                                .replace(/<[^>]+>/g, "") // Remove HTML tags
                                .substring(0, 100)}
                              {val?.shortDescription?.replace(/<[^>]+>/g, "")
                                .length > 100
                                ? "..."
                                : ""}
                            </p>
                            {/* <div className=''>
                                                            <Link to="/" className='btn btn_outline'><img src={Lokedic} /> Unlock Startup</Link>
                                                        </div> */}
                          </div>
                        </div>
                        <div className="market_list_rates">
                          <div className="market_list_rate">
                            <p>InnovaRate:</p>
                            <h4>{val?.innovaRate || 0} %</h4>
                          </div>
                          <div className="market_list_rate">
                            <p>Market Readiness Rate:</p>
                            <h4 className={subscriptionId ? "" : "locked_data"}>
                              {val?.marketReadiness || 0} %
                            </h4>
                          </div>
                          <div className="market_list_rate">
                            <p>Market Growth:</p>
                            <h4 className={subscriptionId ? "" : "locked_data"}>
                              <img src={GrowIc} /> {val?.marketGrowth} %
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="market_list_right">
                        <div className="market_list_right_con">
                          <div className="market_list_right_con_in">
                            <p>Asking price:</p>
                            <h4>$ {val?.price}</h4>
                          </div>
                          <div
                            className="heart_ic cursor-pointer"
                            onClick={() => {
                              addToWishList(val?._id, "buisness");
                            }}
                          >
                            <img src={HeartIconFilled} />
                          </div>
                        </div>
                        <div className="market_list_right_meta">
                          <div className="market_list_right_meta_ic">
                            <img src={Agric1} />
                          </div>
                          <div className="market_list_right_meta_ic">
                            <img src={Agric2} />
                          </div>
                          <div className="market_list_right_meta_ic">
                            <img src={Agric3} />
                          </div>
                        </div>
                        <div className="market_list_btn">
                          <Link
                            to={`/market-detail/${val?.slug}`}
                            className="btn btn_primary"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <center className="nodata">
                    <h3>No Startups Found!</h3>
                  </center>
                )}
              </div>
            </Tab>
            <Tab eventKey="providers" title="Service Providers">
              <div className="market_list_in">
                <div className="market_list_itms serviceprovider_list">
                  {list?.[0]?.serviceProviderData?.length > 0 ? (
                    list?.[0]?.serviceProviderData?.map((val, i) => (
                      <div className="market_list_itm" key={i}>
                        <div className="market_list_img">
                          <div className="market_list_img_in">
                            <img
                              onError={handleErrorImage}
                              src={handleimageUrl(val?.image)}
                            />
                          </div>
                        </div>
                        <div className="market_list_con">
                          <div className="market_list_con_in">
                            <div className="market_meta">
                              <div className="market_meta_itm">
                                <div className="market_meta_itm_ic">
                                  <img src={VerifiedIc} />
                                </div>
                                <span>Verified</span>
                              </div>
                            </div>
                            <div className="market_list_info">
                              <div className="user_detail">
                                <h3
                                  className={
                                    subscriptionId
                                      ? "heading_type2"
                                      : " heading_type2 locked_data"
                                  }
                                >
                                  {val?.name}
                                </h3>
                                <h4>{val?.jobTitle}</h4>
                              </div>
                              <p
                                className={subscriptionId ? "" : "locked_data"}
                              >
                                {DOMPurify.sanitize(val?.description)
                                  .replace(/<[^>]+>/g, "") // Remove HTML tags
                                  .substring(0, 100)}
                                {val?.description?.replace(/<[^>]+>/g, "")
                                  .length > 100
                                  ? "..."
                                  : ""}
                              </p>
                              {subscriptionId ? (
                                ""
                              ) : (
                                <div className="locked_btn">
                                  <Link
                                    to="/buy-plan"
                                    className="btn btn_outline"
                                  >
                                    <img src={Lokedic} /> Unlock Professional
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="market_list_right">
                          <div className="market_list_right_con">
                            <div
                              className="heart_ic"
                              onClick={() => {
                                if (!token) {
                                  navigate("/login");
                                } else {
                                  addToWishList(val?._id);
                                }
                              }}
                            >
                              {/* {val?.wishlist ? (
                                <img src={HeartIconFilled} />
                              ) : (
                                <img src={HeartIcon} />
                              )} */}
                              <img src={HeartIconFilled} />

                            </div>
                          </div>
                          <div className="service_provider_s">
                            <div
                              className={
                                subscriptionId
                                  ? "service_provider_logo"
                                  : "service_provider_logo locked_data"
                              }
                            >
                              <img
                                onError={handleErrorImage}
                                src={
                                  val?.companyLogo
                                    ? handleimageUrl(val?.companyLogo)
                                    : DewberryLogo
                                }
                              />
                            </div>
                            <div className="service_provider_d">
                              <p
                                className={subscriptionId ? "" : "locked_data"}
                              >
                                {val?.companyName}.
                              </p>
                              <p>{val?.aboutCompany}</p>
                              <p>
                                {val?.city}, {val?.country}
                              </p>
                            </div>
                          </div>
                          <div className="market_list_btn">
                            <Link
                              to={`/service-providers-detail/${val?.slug}`}
                              className="btn btn_primary"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <center className="nodata">
                      <h3>No Service Provider Found!</h3>
                    </center>
                  )}
                </div>
              </div>
            </Tab>
          </Tabs>
        </Container>
      </section>
    </>
  );
};

export default MyWishlist;
