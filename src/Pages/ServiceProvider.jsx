import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import HeartIcon from "../assets/heartIc.png";
import DOMPurify from "dompurify";

import VerifiedIc from "../assets/verifiedIc.svg";
import Lokedic from "../assets/lokedic.svg";
import ProfilePhoto from "../assets/profilePhoto.jpg";
import DewberryLogo from "../assets/dewberry_logo.jpg";
import SearchIc from "../assets/searchIc.svg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import HeartIconFilled from "../assets/heartFilledIc.png";

import {
  GetFunction,
  handleErrorImage,
  handleimageUrl,
  SubmitResponse,
} from "../utils/ApiFunctions";
import { baseURL } from "../utils/AxiosInstance";
import Pagination from "../Component/Pagination";
import Loader from "../Component/Loader";

const ServiceProvider = () => {
  const navigate = useNavigate();
  const validSubscriptionId = localStorage.getItem("subscriptionId");
  const subscriptionId =
    validSubscriptionId && validSubscriptionId !== "null"
      ? validSubscriptionId
      : "";
  const [loader, setLoader] = useState(true);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [page, setPage] = useState(1);
  const [categoryId, setcategoryId] = useState("");
  const [paginatio, setPagination] = useState({});
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const handleToggle = () => {
    document.body.classList.toggle("active_search");
  };
  const getBusinessList = async () => {
    const res = await GetFunction(
      `${baseURL}/serviceProviderList?userId=${
        token && userId ? userId : ""
      }&page=${page}&limit=10&search=${search}&categoryId=${categoryId}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
    if (res?.status == 200) {
      setLoader(false);
      setPagination({
        totalRecords: res?.data?.totalRecords,
        totalPages: res?.data?.totalPages,
      });
      setList(res?.data?.data);
    } else {
      setLoader(false);

      toast.error(res?.data?.message);
    }
  };

  const getServiceCategoryList = async () => {
    const res = await GetFunction(
      `${baseURL}/getServiceCategoryList?pages=all`
    );
    if (res?.status == 200) {
      setCategoryList(res?.data);
    } else {
      toast.error(res?.data?.message);
    }
  };
  useEffect(() => {
    getBusinessList();
    getServiceCategoryList();
    return () => {
      document.body.classList.remove("active_search");
    };
  }, [page]);

  const addToWishList = async (id) => {
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
  };

  const handlePagination = (page) => {
    setPage(page);
  };
  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <div className="inner_head">
        <Container>
          <div className="inner_head_in">
            <h1 className="heading_type1">Service Providers</h1>
          </div>
        </Container>
      </div>
      <div className="mobile_search">
        <Container>
          <div
            className="mobile_search_in btn btn_outline"
            onClick={handleToggle}
          >
            Search <img src={SearchIc} />
          </div>
        </Container>
      </div>
      <div className="innner_search servidersearch">
        <Container>
          <Form>
            <div className="innner_search_form">
              <div className="innner_search_itm">
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setcategoryId(e.target.value);
                  }}
                >
                  <option value={""}>Select a Professional Service</option>
                  {categoryList &&
                    categoryList?.map((val, i) => (
                      <option value={val?._id}> {val?.title}</option>
                    ))}
                </Form.Select>
              </div>
              <div className="innner_search_itm innner_search_itm_btn">
                <Button
                  className="btn btn_primary"
                  onClick={() => {
                    getBusinessList();
                  }}
                >
                  Search
                </Button>
              </div>
            </div>
          </Form>
        </Container>
      </div>

      <section className="market_list">
        <Container>
          <div className="market_list_in">
            <div className="market_list_itms serviceprovider_list">
              {list?.length > 0 ? (
                list?.map((val, i) => (
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
                          <p className={subscriptionId ? "" : "locked_data"}>
                            {DOMPurify.sanitize(val?.description)
                              .replace(/<[^>]+>/g, "") // Remove HTML tags
                              .substring(0, 100)}
                            {val?.description?.replace(/<[^>]+>/g, "").length >
                            100
                              ? "..."
                              : ""}
                          </p>
                          {subscriptionId ? (
                            ""
                          ) : (
                            <div className="locked_btn">
                              <Link to="/buy-plan" className="btn btn_outline">
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
                          {val?.wishlist ? (
                            <img src={HeartIconFilled} />
                          ) : (
                            <img src={HeartIcon} />
                          )}
                        </div>
                      </div>
                      <div className="service_provider_s service_provider_s_lg">
                        <div
                          className={
                            subscriptionId
                              ? "service_provider_logo"
                              : "service_provider_logo locked_data"
                          }
                        >
                          <img
                            src={
                              val?.companyLogo
                                ? handleimageUrl(val?.companyLogo)
                                : DewberryLogo
                            }
                            onError={handleErrorImage}
                          />
                        </div>
                        <div className="service_provider_d">
                          <p className={subscriptionId ? "" : "locked_data"}>
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
                <h3 className="nodata">
                  <center>No Service Provider Found!</center>
                </h3>
              )}
            </div>
            {list?.length > 0 && paginatio?.totalPages > 1 && (
              <Pagination
                current={page}
                total={paginatio?.totalPages}
                pagination={handlePagination}
              />
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServiceProvider;
