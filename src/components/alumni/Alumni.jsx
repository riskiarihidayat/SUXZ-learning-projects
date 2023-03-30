import React from 'react';

import './alumni.css';

export default function Alumni({ img, name, job, reviews }) {
  return (
    <div className="container-alumni">
      <img src={img} alt="Profile Photo" className="alumni_image" />
      <div className="alumni_card_content">
        <p className="alumni_name text-heading">{name}</p>
        <p className="alumni_job">{job}</p>
        <p className="alumni_reviews text-paragraph">{reviews}</p>
      </div>
    </div>
  );
}
