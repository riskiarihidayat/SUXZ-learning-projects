import React from 'react';
import Github from '../../assets/img/Github.png';
import Microsoft from '../../assets/img/Microsoft.png';
import Redis from '../../assets/img/Redis.png';
import Amazon from '../../assets/img/Amazon.png';
import Paypal from '../../assets/img/Paypal.png';
import Linkedin from '../../assets/img/Linkedin.png';
import Reddit from '../../assets/img/Reddit.png';
import Medium from '../../assets/img/Medium.png';

import './company.css';

export default function Company() {
  return (
    <div className="container-company section-padding">
      <div className="company_title">
        <h2 className="company_title_heading teks-heading">
          Companies That Recruit Our Graduates
        </h2>
        <p className="company_title_paragraph">
          Our graduates have worked in more than 400 companies around the World
        </p>
      </div>
      <div className="company_brand-image">
        <img src={Github} alt="Company Logo" />
        <img src={Microsoft} alt="Company Logo" />
        <img src={Redis} alt="Company Logo" />
        <img src={Amazon} alt="Company Logo" />
        <img src={Paypal} alt="Company Logo" />
        <img src={Linkedin} alt="Company Logo" />
        <img src={Reddit} alt="Company Logo" />
        <img src={Medium} alt="Company Logo" />
      </div>
    </div>
  );
}
