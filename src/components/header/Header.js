import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Navbar,
  NavDropdown,
  NavItem,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import {
  BrowserRouter as Routes,
  Route,
  Redirect,
  Router,
  useNavigate,
} from "react-router-dom";
import ombc_brand_logo from "../../assets/ombc_brand_logo.png";
import ombc_daily_button from "../../assets/ombc-daily-button.png";

import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  return (
      <div className="container">
        <Navbar
          bg="light"
          variant="light"
          fixed="top"
          className="header_nav_top "
          expand="lg"
          collapseOnSelect
        >
          <Navbar.Brand>
            <Link to="/">
              <img
                src={ombc_brand_logo}
                width="100%"
                height="70px"
                alt="ombc"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-center nav-content">
              <div className="menus">
                <Link to="/Story" className="header-menu">
                  Our Story
                </Link>

                <Link to="/product" className="header-menu">
                  Our Products
                </Link>

                <Link to="/weighing" className="header-menu">
                  Store Locator
                </Link>

                <Link to="/contact" className="header-menu">
                  Contact Us
                </Link>

                <Link to="/faq" className="header-menu">
                  FAQ
                </Link>

                <Link to="/comp" className="header-menu">
                  Blog
                </Link>

                <Link to="/comp" className="header-menu">
                  My Account
                </Link>
              </div>
              <div className="">
                <Link to="/">
                  <img
                    src={ombc_daily_button}
                    width="100%"
                    height="50px"
                    alt="ombc"
                  />
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
};

export default Header;
