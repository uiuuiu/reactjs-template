import React from "react";
import { Link } from "react-router-dom";
import { Image, Button } from 'react-bootstrap';
import logo from "../assets/images/logo.png";
import './Header.scss';

const Header = () => {

  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          <Image className="header-logo-image" src={logo} width={183.5} height={38} />
        </div>
        <div className="header-tabs">
          <Link className="header-tab-item active">Home</Link>
          <Link className="header-tab-item">Why Join</Link>
          <Link className="header-tab-item">Our Mission</Link>
          <Link className="header-tab-item">Ventures</Link>
          <Link className="header-tab-item">Pricing</Link>
        </div>
        <div className="header-buttons">
          <Link className="header-button-login">Log In</Link>
          <Button className="header-button-join">Join Now</Button>
        </div>
      </div>
    </div>
  )
};

export default Header;
