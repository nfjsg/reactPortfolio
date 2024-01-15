import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Add text or icon links to your GitHub, LinkedIn, and other platforms */}
        <a href="https://github.com/nfjsg" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {/* Add more links as needed */}
      </div>
    </footer>
  );
};

export default Footer;