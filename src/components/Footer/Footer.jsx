import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>dribble</h2>
          <p>Your company description goes here.</p>
        </div>
        <div className="footer-section">
          <h5 className='footer-h5'>For designers</h5>
          <ul>
            <li><a href="/">Go pro!</a></li>
            <li><a href="/about">Explore design work</a></li>
            <li><a href="/contact">Design blog</a></li>
            <li><a href="/">Overtime podcast</a></li>
            <li><a href="/about">Playoffs</a></li>
            <li><a href="/contact">Weekly Warm-Up</a></li>
            <li><a href="/">Refer a Friend</a></li>
            <li><a href="/about">Code of conduct</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className='footer-h5'>Hire designers</h5>
          <ul>
            <li><a href="/">Post a job opening</a></li>
            <li><a href="/about">Post a freelance project</a></li>
            <li><a href="/contact">Search for designers</a></li>
          </ul>
          <h5>Brands</h5>
          <ul>
            <li><a href='/'>Advertise with us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className='footer-h5'>Company</h5>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/about">Careers</a></li>
            <li><a href="/contact">Support</a></li>
            <li><a href="/">Media kit</a></li>
            <li><a href="/about">Testimonials</a></li>
            <li><a href="/contact">API</a></li>
            <li><a href="/">Terms of service</a></li>
            <li><a href="/about">Privacy policy</a></li>
            <li><a href="/contact">Cookie policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className='footer-h5'>Directories</h5>
          <ul>
            <li><a href="/">Design jobs</a></li>
            <li><a href="/about">Designers for hire</a></li>
            <li><a href="/contact">Freelance designers for hire</a></li>
            <li><a href="/about">Tags</a></li>
            <li><a href="/contact">Places</a></li>
          </ul>
          <h5 className='footer-h5'>Design assets</h5>
          <ul>
            <li><a href="/">Dribble Marketplace</a></li>
            <li><a href="/about">Creative Market</a></li>
            <li><a href="/contact">Fontspring</a></li>
            <li><a href="/about">Font Squirrel</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className='footer-h5'>Design Resources</h5>
          <ul>
            <li><a href="/">Freelancing</a></li>
            <li><a href="/about">Design Hiring</a></li>
            <li><a href="/contact">Design Portfolio</a></li>
            <li><a href="/">Design Education</a></li>
            <li><a href="/about">Creative Process</a></li>
            <li><a href="/contact">Design Industry Trends</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p id='copyright'>&copy; 2024 Your Company. All rights reserved.</p>
        <div><span className='footer-h5' id='number'>20,501,853</span><span id='shorts'> shorts dribbled</span></div>
       

        
      </div>
    </footer>
  );
};

export default Footer;
