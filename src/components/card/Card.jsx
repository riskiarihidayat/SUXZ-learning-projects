import React from 'react';

import './card-learnings.css';

export default function Card({ img, title, paragraph, button }) {
  return (
    <div className="container-card">
      <img src={img} alt="Learnings Illustrations" className="card_image" />
      <h4 className="card_title">{title}</h4>
      <p className="card_paragraph">{paragraph}</p>
      <a href="#" className="card_button">
        {button}
      </a>
    </div>
  );
}
