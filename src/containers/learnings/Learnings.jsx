import React from 'react';
import { Card } from '../../components';
import learnings1 from '../../assets/img/learnings1.png';
import learnings2 from '../../assets/img/learnings2.png';
import learnings3 from '../../assets/img/learnings3.png';
import learnings4 from '../../assets/img/learnings4.png';

import './learnings.css';

export default function Learnings() {
  return (
    <div className="container-learnings section-padding">
      <div className="learnings_title">
        <p className="teks-tagline">LEARNINGS</p>
        <h2 className="learnings_title-heading teks-heading">
          Online Learning Platform International Curriculum
        </h2>
        <p className="learnings_title-paragraph teks-paragraph">
          Study and understand the material class is more relaxed without time
          limit.
        </p>
      </div>
      <div className="learnings_card">
        <Card
          img={learnings1}
          title="Starter"
          paragraph="Free class access for that start learning code and design"
          button="See Class"
        />
        <Card
          img={learnings2}
          title="Premium"
          paragraph="Advanced material from the Starter & learn to build projects"
          button="See Class"
        />
        <Card
          img={learnings3}
          title="Superstar"
          paragraph="Materials for experts who have completed the premium package"
          button="See Class"
        />
        <Card
          img={learnings4}
          title="Bootcamp"
          paragraph="Informatics science training program with the latest material"
          button="See Class"
        />
      </div>
    </div>
  );
}
