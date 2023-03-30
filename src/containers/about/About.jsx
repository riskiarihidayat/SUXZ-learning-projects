import React from 'react';
import aboutimage from '../../assets/img/about_img.png';
import check from '../../assets/img/check.svg';

import './about.css';

export default function About() {
  return (
    <div className="container-about section-padding">
      <div className="about_image">
        <img src={aboutimage} alt="About Image" />
      </div>
      <div className="about_content">
        <p className="teks-tagline">ABOUT US</p>
        <h2 className="about_content-heading teks-heading">
          We Help Improve Your Work Experience
        </h2>
        <p className="about_content-paragraph teks-paragraph">
          We help you to increase self-confidence and train yourself in a
          direction.
        </p>
        <div className="about_content-list">
          <div className="about_content-list_first">
            <img src={check} alt="Ceklist Icon" />
            <p className="teks-paragraph">
              Study and produce creation to get a job
            </p>
          </div>
          <div className="about_content-list_second">
            <img src={check} alt="Ceklist Icon" />
            <p className="teks-paragraph">
              Up to date material and created by expert creators
            </p>
          </div>
          <div className="about_content-list_third">
            <img src={check} alt="Ceklist Icon" />
            <p className="teks-paragraph">
              Complete classes and projects and get a certificate from us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
