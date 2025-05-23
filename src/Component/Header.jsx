import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logoimg from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileUser from "../assets/profileUser.svg";
import { Dropdown } from "react-bootstrap";
import Downarrow from "../assets/downarrow.svg";
import { handleimageUrl } from "../utils/ApiFunctions";
import Swal from "sweetalert2";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogut = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Please confirm that you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5FD1FA",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setUserDetails(null);
        setToken(null);
        setShow(true);
        localStorage.removeItem("subscriptionId");
        localStorage.removeItem("name");
        localStorage.removeItem("subscritpionEndDate");
        localStorage.removeItem("subscritpionStartDate");
        localStorage.removeItem("token");
        localStorage.removeItem("userDetails");
        localStorage.removeItem("userId");
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
    setToken(localStorage.getItem("token"));
  }, [token, pathname]);

  const collapseRef = useRef(null);
  const togglerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        collapseRef.current &&
        !collapseRef.current.contains(event.target) &&
        togglerRef.current &&
        !togglerRef.current.contains(event.target)
      ) {
        if (collapseRef.current.classList.contains("show")) {
          togglerRef.current.click(); // Programmatically collapse
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (
      collapseRef.current &&
      collapseRef.current.classList.contains("show") &&
      togglerRef.current
    ) {
      togglerRef.current.click(); // Collapse on route change
    }
  }, [pathname]);

  return (
    <header className="header-sec">
      <Navbar expand="lg" className="header_sec">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logoimg} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" ref={togglerRef} />
          <Navbar.Collapse id="navbarScroll" ref={collapseRef}>
            <div className="navbar-collapse_in">
              <Nav className="header_nav">
                <Nav.Link as={Link} to="/marketplace">
                  Marketplace
                </Nav.Link>
                <Nav.Link as={Link} to="/service-providers">
                  Service Providers
                </Nav.Link>
                <Nav.Link as={Link} to="/about-us">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/the-company">
                  Company
                </Nav.Link>
              </Nav>
              {!token ? (
                <Nav className="header_nav_right">
                  <Nav.Link as={Link} to="/login">
                    Sign In
                  </Nav.Link>{" "}
                  <span className="nav_seprator">|</span>
                  <Nav.Link as={Link} to="/signup">
                    Sign Up
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav className="header_nav_right">
                  {/* <Nav.Link href="" className='notification_sec'><img className='notification_ic' src={NotificationIc}/></Nav.Link> */}
                  <Dropdown className="menu_dropdown">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <div className="profile_user_img">
                        <img
                          src={
                            userDetails?.profileImage != "" &&
                            userDetails?.profileImage !== null
                              ? handleimageUrl(userDetails?.profileImage)
                              : ProfileUser
                          }
                          onError={(e) => {
                            e.target.src = ProfileUser;
                          }}
                        />
                      </div>{" "}
                      <span>{userDetails?.name}</span>{" "}
                      <img className="dropdown_ic" src={Downarrow} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/my-profile">
                        My Profile
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/my-wishlist">
                        My Wishlist
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/my-bids">
                        My Bids
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/my-business">
                        My Startups
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleLogut}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
