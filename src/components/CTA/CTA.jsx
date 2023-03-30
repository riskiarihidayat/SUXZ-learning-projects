import React from 'react';

import './cta.css';

export default function CTA() {
  return (
    <div className="container-cta">
      <div className="cta_content">
        <h2 className="cta_content-heading teks-heading">
          So? What Are You Waiting For
        </h2>
        <p className="cta_content-paragraph teks-paragraph">
          It's time to build your career, study in a relaxed and purposeful
          manner
        </p>
        <div className="cta_content_btn">
          <a href="#" className="cta_content_btn-started teks-paragraph">
            Get Started
          </a>
          <a href="#" className="cta_content_btn-contact teks-paragraph">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
