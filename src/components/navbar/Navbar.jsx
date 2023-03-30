import React from 'react';
import { FiBarChart } from 'react-icons/fi';

import './navbar.css';

import vectorLogo from '../../assets/img/Vector-logo.png';

export default function Navbar() {
  return (
    <nav className="container-navbar section-padding">
      <div className="navbar-logo">
        <img src={vectorLogo} alt="Logo" />
        <h3>SUXZ</h3>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Learnings</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
      </ul>
      <div className="navbar-extra">
        <a href="#" className="navbar-extra_log-in">
          Log in
        </a>
        <a href="#" className="navbar-extra_sign-up">
          Sign up
        </a>
      </div>
      <div className="navbar-resposive">
        <FiBarChart className="navbar-responsive-menu-icon" />
      </div>
    </nav>
  );
}
