import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <header>
      <div>
        <Link to="/" className="overlay-title-link">
          <h3 className="overlay-title">Dasarathan T</h3>
        </Link>
      </div>
     
      <nav className={isNavExpanded ? "expanded" : ""}>
        <ul>
          <li><a href="about-me">About Me</a></li>
          <li><a href="projects">Portfolio</a></li>
          <li><a href="contact">Contact Me</a></li>
          <li><a href="resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;