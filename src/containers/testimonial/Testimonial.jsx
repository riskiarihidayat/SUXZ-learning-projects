import React from 'react';

import testimonial1 from '../../assets/img/testimonial1.png';
import testimonial2 from '../../assets/img/testimonial2.png';
import testimonial3 from '../../assets/img/testimonial3.png';
import testimonial4 from '../../assets/img/testimonial4.png';

import './testimonial.css';
import { Alumni } from '../../components';

export default function Testimonial() {
  return (
    <div className="container-testimonial section-padding">
      <div className="testimonial_title">
        <p className="teks-tagline">TESTIMONIAL</p>
        <h2 className="testimonial_title_heading teks-heading">
          Our Alumni Say
        </h2>
        <p className="testimonial_title_paragarph teks-paragraph">
          These are the words of people who have taken our class
        </p>
      </div>
      <div className="testimonial_card">
        <Alumni
          img={testimonial1}
          name="Jason Todd"
          job="Entrepreneur"
          reviews="“The mentor is cool, how to convey each material is also detailed and easy to understand..”"
        />
        <Alumni
          img={testimonial2}
          name="Cassandra K"
          job="Web Developer"
          reviews="“The mentor is cool, how to convey each material is also detailed and easy to understand..”"
        />
        <Alumni
          img={testimonial3}
          name="Peter Parker"
          job="PHP Enthusiast"
          reviews="“The mentor is cool, how to convey each material is also detailed and easy to understand..”"
        />
        <Alumni
          img={testimonial4}
          name="Jean Gray"
          job="Designer"
          reviews="“The mentor is cool, how to convey each material is also detailed and easy to understand..”"
        />
      </div>
    </div>
  );
}
