import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import vectorLogo from '../../assets/img/Vector-logo.png';

import './footer.css';

export default function Footer() {
  return (
    <div className="container-footer section-padding">
      <div className="footer_logo">
        <div className="footer_logo-brand">
          <img src={vectorLogo} alt="SUXZ logo" />
          <h3>SUXZ</h3>
        </div>
        <p className="footer_logo-brand-paragraph teks-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div className="footer_company">
        <h3 className="footer_title">Company</h3>
        <a href="#" className="footer_links">
          Home
        </a>
        <a href="#" className="footer_links">
          Blogs
        </a>
        <a href="#" className="footer_links">
          Careers
        </a>
        <a href="#" className="footer_links">
          Portfolios
        </a>
      </div>
      <div className="footer_links">
        <h3 className="footer_title">Links</h3>
        <a href="#" className="footer_links">
          Privacy & policy
        </a>
        <a href="#" className="footer_links">
          Github
        </a>
        <a href="#" className="footer_links">
          Supports
        </a>
        <a href="#" className="footer_links">
          FAQs
        </a>
      </div>
      <div className="footer_contact">
        <h3 className="footer_title">Contact</h3>
        <div className="footer_contact-phone">
          <BsTelephoneFill />
          <p>(021) 31048184</p>
        </div>
        <div className="footer_contact-email">
          <MdEmail />
          <p>irham@suxz.com</p>
        </div>
        <p className="footer_contact-address">
          Jl. Narogong. Perum Cileungsi Elok Blok A No.5. Jakarta Selatan.
          12240.
        </p>
      </div>
    </div>
  );
}
