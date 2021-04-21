import React from "react";
// import { Link } from "react-router-dom";
import { Image, FormControl, Button } from 'react-bootstrap';
import logo from "../assets/images/logo.png";
import './Footer.scss';

const Footer = () => {

  return (
    <div className="footer-container">
      <div className="footer-main-content">
        <div className="footer-left-container">
          <Image className="header-logo-image" src={logo} width={193} height={40} />
          <div className="footer-left-social"></div>
        </div>
        <div className="footer-right-container">
          <div className="footer-left-subscribe">
            <p className="footer-left-subscribe-title">Sign up to our Newsletter!</p>
            <div className="footer-left-subscribe-group">
              <FormControl className="footer-left-subscribe-input" placeholder="Enter email" />
              <Button className="footer-left-subscribe-button">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divide"></div>
      <div className="footer-copyright">
        <p className="footer-copyright-content">
          © Let’s Start Up 2020. All Rights Reserved.
        </p>
      </div>
    </div>
  )
};

export default Footer;
