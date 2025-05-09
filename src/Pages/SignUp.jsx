import React, { useEffect, useRef, useState } from "react"; // Import useState
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import BackIc from "../assets/backIc.svg";

import GoogleIcon from "../assets/google_icon.svg";
import FacebookIcon from "../assets/facebook_icon.svg";
import Logoimg from "../assets/logo.png";
import Loginmetaic1 from "../assets/loginmetaic1.svg";
import Loginmetaic2 from "../assets/loginmetaic2.svg";
import Loginmetaic3 from "../assets/loginmetaic3.svg";
import OTP from "../Component/Modals/OTP";
import { ErrorMessage, Field, Formik } from "formik";
import { signupSchema } from "../utils/Utils";
import PhoneInput from "react-phone-input-2";
import { SubmitResponse } from "../utils/ApiFunctions";
import { LoginbaseURL } from "../utils/AxiosInstance";
import toast from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";

import PopupSignDocument from "../Component/Modals/PopupSignDocument";
import axios from "axios";

const PhoneField = ({ field, form }) => {
  return (
    <PhoneInput
      country={"us"} // Default country
      value={field.value} // Bind value from Formik
      onChange={(value, country, e, formattedValue) => {
        let DialCode = country?.dialCode;
        let valueLength = value?.length;
        let result = value?.substr(
          DialCode?.length,
          valueLength - DialCode?.length
        );

        form.setFieldValue("mobile", `+${DialCode}` + " " + result);
      }}
      inputClass="form-input w-full form-control"
      containerClass="w-full"
    />
  );
};

const SignUp = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [soicalLogin, setIsSocialLogin] = useState(false);
  const [formState, setFormValues] = useState("");

  const [show, setShow] = useState(false);
  const [NdaSigned, setNdaSignedTrue] = useState(false);
  const [popup, setPopup] = useState(false);
  const [docmentSent, setDodumentSent] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [passwordVisible1, setPasswordVisible1] = useState(false);

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const sendOtp = async (values) => {
    setFormValues({ ...values });
    // setEmail(values.email)
    if (!NdaSigned) {
      const res = await SubmitResponse(
        `${LoginbaseURL}/doumentSignedMailSend`,
        values
      );

      if (res?.data?.status == 200) {
        if (res?.data?.data?.documentSigned) {
          handleShow();
          setNdaSignedTrue(true);
        } else {
          setDodumentSent(true);
          window.open(res?.data?.data?.url, "_blank");
        }
      } else {
        toast.dismiss();
        toast.error(res?.message);
      }
    } else {
      setLoader(true);
      const res = await SubmitResponse(`${LoginbaseURL}/register`, values);

      if (res?.data?.status == 200) {
        toast.success(res?.data?.message);
        handleShow();
        setLoader(false);
      } else {
        toast.dismiss();
        toast.error(res?.message);
        setLoader(false);
      }
    }
  };

  const sendSocialNda = async (values) => {
    if (!NdaSigned) {
      const res = await SubmitResponse(
        `${LoginbaseURL}/doumentSignedSocialMailSend`,
        values
      );

      if (res?.data?.status == 200) {
        window.open(res?.data?.data?.url, "_blank");
      } else {
        toast.dismiss();
        toast.error(res?.message);
      }
    }
  };

  const checkUserDocuemntSigned = async () => {
    const res = await SubmitResponse(
      `${LoginbaseURL}/CheckUserSignedDocument`,
      { email: formState.email }
    );
    if (res?.data?.status == 200) {
      if (res?.data?.data) {
        {
          setNdaSignedTrue(true);
        }
      }
    }
  };

  const intervalIdRef = useRef(null); // Use a ref to persist the interval ID
  const runCountRef = useRef(0);

  useEffect(() => {

    if (docmentSent && !NdaSigned) {
      intervalIdRef.current = setInterval(() => {
        checkUserDocuemntSigned();
      }, 3000);
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [docmentSent, NdaSigned]);

  // useEffect(() => {
  //     if (docmentSent && !NdaSigned) {
  //         runCountRef.current = 0; // Reset on new start

  //         intervalIdRef.current = setInterval(() => {
  //             runCountRef.current += 1;
  //             checkUserDocuemntSigned();

  //             if (runCountRef.current >= 5) {
  //                 clearInterval(intervalIdRef.current);
  //             }
  //         }, 3000);
  //     }

  //     return () => {
  //         if (intervalIdRef.current) {
  //             clearInterval(intervalIdRef.current);
  //         }
  //     };
  // }, [docmentSent, NdaSigned]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ""; // Show browser's default confirmation dialog
    };
    if (docmentSent) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    }
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const login = useGoogleLogin({
    scope: "email",
    onSuccess: async (tokenResponse) => {
      const { access_token } = tokenResponse; // now I have valid access_token
      let userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      let formdata = new FormData();
      formdata.append("socialId", userInfo?.data?.sub);
      formdata.append("name", userInfo?.data?.given_name);
      formdata.append("email", userInfo?.data?.email);
      formdata.append("password", "password");
      const res = await SubmitResponse(`${LoginbaseURL}/socialLogin`, formdata);
      if (res?.data?.status == 200) {
        console.log("res--->", res?.data);
        if (res?.data?.data?.LastStep == 7) {
          localStorage.setItem("name", res?.data?.data?.name);
          localStorage.setItem("email", res?.data?.data?.email);
          localStorage.setItem("token", res?.data?.token);
          localStorage.setItem("userId", res?.data?.data?._id);
          localStorage.setItem("userDetails", JSON.stringify(res?.data?.data));

          navigate("/marketplace");
        } else {
          localStorage.setItem("userDetails", JSON.stringify(res?.data?.data));
          localStorage.setItem("userId", res?.data?.data?._id);
          navigate(
            "/complete-profile?lastStep=" +
              parseInt(res?.data?.data?.LastStep + 1)
          );
        }
      }
    },
    onError: (errorResponse) => {
      setLoader(false);
    },
    error_callback: (error) => {
      setLoader(false);
    },
  });

  return (
    <>
      <div className="inner_head">
        <Container>
          <div className="inner_head_in backbtn_s">
            <Link
              to="/marketplace"
              //     onClick={() => {
              //     const from = location.state?.from?.pathname?.toString();
              //     console.log('locatioaaan', typeof (from));
              //     if (from === undefined) {
              //         console.log('ddddddddd', navigate(-1))
              //        // fallback if no previous route
              //     } else {
              //         navigate(from);

              //     }
              // }}

              // onClick={() => {
              //     navigate('/marketplace');
              // }}
            >
              <img src={BackIc} /> Back
            </Link>
          </div>
        </Container>
      </div>
      <section className="login_page">
        <Container>
          <div className="login_page_in">
            <div className="mobile_logo">
              <div className="login_logo">
                <Link to="/">
                  <img src={Logoimg} />
                </Link>
              </div>
            </div>
            <Row className="login_row">
              <Col md={6} className="col_login">
                <div className="login_form">
                  <div className="login_form_head">
                    <h2 className="heading_type2">Get Started</h2>
                  </div>
                  <Formik
                    initialValues={{
                      name: formState?.name ?? "",
                      email: formState?.email ?? "",

                      registrationType: "web",
                      mobile: formState?.mobile ?? "",
                      password: formState?.password ?? "",
                      confirmPassword: formState?.confirmPassword ?? "",
                      reviewterms_conditions:
                        formState?.reviewterms_conditions ?? false,
                      reviewNdaSigned: NdaSigned ?? false,
                    }}
                    enableReinitialize
                    validationSchema={signupSchema}
                    onSubmit={sendOtp}
                  >
                    {({
                      handleSubmit,
                      setFieldTouched,
                      isSubmitting,
                      values,
                      validateField,
                      validateForm,
                    }) => (
                      <Form onSubmit={handleSubmit}>
                        <div className="login_form_in">
                          <Row>
                            <Col xl="12">
                              <Form.Group className="form-group">
                                <Form.Label>Full Name</Form.Label>
                                <Field
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="Enter Name"
                                />
                                <ErrorMessage
                                  name="name"
                                  component="div"
                                  className="text-danger"
                                />
                              </Form.Group>
                            </Col>
                            <Col xl="12">
                              <Form.Group className="form-group">
                                <Form.Label>Email Address</Form.Label>
                                <Field
                                  disabled={NdaSigned}
                                  type="email"
                                  name="email"
                                  className="form-control"
                                  placeholder="You@example.com"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className="text-danger"
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>Phone Number</Form.Label>
                                <Field name="mobile" component={PhoneField} />
                                <ErrorMessage
                                  name="mobile"
                                  component="div"
                                  className="text-danger"
                                />
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group position-relative">
                                <Form.Label>Password</Form.Label>
                                <div className="eye_password">
                                  <Field
                                    type={passwordVisible ? "text" : "password"}
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                  />
                                  <div
                                    className="password_eye"
                                    onClick={togglePasswordVisibility}
                                  >
                                    {passwordVisible ? (
                                      <EyeOff size={20} />
                                    ) : (
                                      <Eye size={20} />
                                    )}
                                  </div>
                                </div>
                                <ErrorMessage
                                  name="password"
                                  component="div"
                                  className="text-danger"
                                />
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group position-relative">
                                <Form.Label>Confirm Password</Form.Label>
                                <div className="eye_password">
                                  <Field
                                    type={
                                      passwordVisible1 ? "text" : "password"
                                    }
                                    name="confirmPassword"
                                    className="form-control"
                                    placeholder="Enter password"
                                  />
                                  <div
                                    className="password_eye"
                                    onClick={togglePasswordVisibility1}
                                  >
                                    {passwordVisible1 ? (
                                      <EyeOff size={20} />
                                    ) : (
                                      <Eye size={20} />
                                    )}
                                  </div>
                                </div>
                                <ErrorMessage
                                  name="confirmPassword"
                                  component="div"
                                  className="text-danger"
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Check
                                  type="checkbox"
                                  // disabled={true}
                                  checked={values?.reviewNdaSigned}
                                  onChange={async (e) => {
                                    toast.dismiss();
                                    e.preventDefault();

                                    if (values?.email && values?.mobile) {
                                      const fields = [
                                        "name",
                                        "email",
                                        "password",
                                        "confirmPassword",
                                        "mobile",
                                        "reviewterms_conditions",
                                      ];

                                      // Mark fields as touched
                                      for (const field of fields) {
                                        await setFieldTouched(field, true);
                                      }

                                      // Validate the whole form
                                      const formErrors = await validateForm();

                                      if (
                                        Object.keys(formErrors).length === 0
                                      ) {
                                        // All validations passed
                                        setFormValues({ ...values });
                                        setPopup(true);
                                      }
                                    } else {
                                      const fields = [
                                        "name",
                                        "email",
                                        "password",
                                        "confirmPassword",
                                        "mobile",
                                        "reviewterms_conditions",
                                      ];

                                      // Mark fields as touched
                                      for (const field of fields) {
                                        await setFieldTouched(field, true);
                                      }
                                    }
                                  }}
                                  id="reviewNdaSigned"
                                  className="mb-2"
                                  label={
                                    <>
                                      Review and digitally{" "}
                                      <span
                                        className="link-sapn"
                                        onClick={
                                          async (e) => {
                                            toast.dismiss();
                                            e.preventDefault();

                                            if (
                                              values?.email &&
                                              values?.mobile
                                            ) {
                                              const fields = [
                                                "name",
                                                "email",
                                                "password",
                                                "confirmPassword",
                                                "mobile",
                                                "reviewterms_conditions",
                                              ];

                                              // Mark fields as touched
                                              for (const field of fields) {
                                                await setFieldTouched(
                                                  field,
                                                  true
                                                );
                                              }

                                              // Validate the whole form
                                              const formErrors =
                                                await validateForm();

                                              if (
                                                Object.keys(formErrors)
                                                  .length === 0
                                              ) {
                                                // All validations passed
                                                setFormValues({
                                                  ...values,
                                                });
                                                setPopup(true);
                                              }
                                            } else {
                                              const fields = [
                                                "name",
                                                "email",
                                                "password",
                                                "confirmPassword",
                                                "mobile",
                                                "reviewterms_conditions",
                                              ];

                                              // Mark fields as touched
                                              for (const field of fields) {
                                                await setFieldTouched(
                                                  field,
                                                  true
                                                );
                                              }
                                            }
                                          }
                                          // !NdaSigned && handleSubmit(values)
                                        }
                                        rel="noopener noreferrer"
                                      >
                                        sign our NDA
                                      </span>{" "}
                                      before you proceed
                                    </>
                                  }
                                  as={Field}
                                  // name="reviewNdaSigned"
                                />
                                <ErrorMessage
                                  name="reviewNdaSigned"
                                  component="div"
                                  className="text-danger"
                                />
                              </Form.Group>

                              <Form.Group className="form-group">
                                <Form.Check
                                  type="checkbox"
                                  id="reviewterms_conditions"
                                  className="mb-2"
                                  label={
                                    <>
                                      I have read and agree to the{" "}
                                      <a
                                        href="/reviewterms_conditions-conditions"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Terms and Conditions
                                      </a>
                                      ,{" "}
                                      <a
                                        href="/privacy-policy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Privacy Policy
                                      </a>{" "}
                                      and have digitally signed the
                                      reviewNdaSigned
                                    </>
                                  }
                                  as={Field}
                                  name="reviewterms_conditions"
                                />
                                <ErrorMessage
                                  name="reviewterms_conditions"
                                  component="div"
                                  className="text-danger"
                                />
                              </Form.Group>
                            </Col>

                            <Col md="12">
                              <Button
                                type="submit"
                                disabled={NdaSigned == false || loader}
                                className="btn btn_primary w-100"
                              >
                                {loader ? "Please Wait..." : "Continue"}
                              </Button>
                            </Col>
                          </Row>
                          <div className="login_with">
                            <span>Or Signup With</span>
                          </div>
                          <div className="login_social">
                            <Link
                              to="#"
                              onClick={() => {
                                setIsSocialLogin(true);
                                login();
                              }}
                            >
                              <img src={GoogleIcon} alt="Google" />
                            </Link>
                            <Link to="#">
                              <img src={FacebookIcon} alt="Facebook" />
                            </Link>
                          </div>
                        </div>
                        <div className="login_para">
                          <p>
                            Already have an account?{" "}
                            <Link to="/login" className="login_a">
                              Login
                            </Link>
                          </p>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </Col>
              <Col md={6} className="col_login">
                <div className="login_con">
                  <div className="login_logo">
                    <Link to="/">
                      <img src={Logoimg} />
                    </Link>
                  </div>
                  <div className="why_tech">
                    <h2 className="heading_type2">Why NeedTech</h2>
                    <ul className="list_type1">
                      <li>Patent-pending status</li>
                      <li>Freedom to Operate certificate</li>
                      <li>Comprehensive Business Plan</li>
                      <li>Executive Summary</li>
                      <li>Third-Party Valuation</li>
                      <li>And all other relevant due diligence documents.</li>
                    </ul>
                  </div>
                  <div className="login_meta why_need_meta">
                    <Row>
                      <Col className="col-4">
                        <div className="login_meta_itm">
                          <div className="login_meta_ic">
                            <img src={Loginmetaic1} />
                          </div>
                          <div className="login_meta_con">
                            <p className="heading_t">First Ever</p>
                            <p>
                              Startup Innovation Machine For Business Generation
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col className="col-4">
                        <div className="login_meta_itm">
                          <div className="login_meta_ic">
                            <img src={Loginmetaic2} />
                          </div>
                          <div className="login_meta_con">
                            <p className="heading_t">10,000+</p>
                            <p>Investment-Ready Startups Marketplace</p>
                          </div>
                        </div>
                      </Col>
                      <Col className="col-4">
                        <div className="login_meta_itm">
                          <div className="login_meta_ic">
                            <img src={Loginmetaic3} />
                          </div>
                          <div className="login_meta_con">
                            <p className="heading_t">Empowering</p>
                            <p>Bright Minds From All Walks Of Life</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <OTP show={show} onHide={handleClose} formValue={formState} />
      <PopupSignDocument
        show={popup}
        onHide={() => setPopup(false)}
        callback={() => {
          if (soicalLogin) {
            sendSocialNda(formState);
          } else {
            sendOtp(formState);
          }
          setPopup(false);
        }}
      />
    </>
  );
};

export default SignUp;
