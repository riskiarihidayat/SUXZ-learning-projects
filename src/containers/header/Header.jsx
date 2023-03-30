import React from 'react';

import headerImage from '../../assets/img/header_img.png';
import './header.css';

export default function Header() {
  return (
    <div className="container-header section-padding">
      <div className="header-content">
        <div className="header-content_title">
          <p className="teks-tagline">S U X Z M A K E I T E A S Y</p>
          <h1 className="header-content_title_heading teks-heading">
            Find Your Way Of Success
          </h1>
          <p className="header-content_title_paragraph teks-paragraph">
            We help you to increase self-confidence and train yourself in a
            direction, and make you more creative in developing a work
          </p>
        </div>
        <div className="header-content_cta">
          <a href="#" className="header-content_cta_started">
            Get Started
          </a>
          <a href="#" className="header-content_cta_services">
            Our Service
          </a>
        </div>
      </div>
      <div className="header-image">
        <img src={headerImage} alt="Header Image" />
      </div>
    </div>
  );
}
