import React from "react";

import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>NORTH FORTBERRY</h3>
          <p>123 Anywhere St.</p>
          <p>Any City, ST 12345</p>
          <p>(123) 456-7890</p>
          <p>hello@reallygreatsite.com</p>
          <p>@reallygreatsite</p>
        </div>
        <div className="footer-section">
          <h3>CLUB HOURS</h3>
          <p>Tuesday to Saturday</p>
          <p>6:00 am to 10:00 pm</p>
          <p>Sunday</p>
          <p>8:00 am to 9:00 pm</p>
          <p>Closed on Mondays</p>
        </div>
        <div className="footer-section">
          <h3>STAY CONNECTED</h3>
          <div className="social-icons">
            <FaFacebook className="icons" />
            <FaTwitter className="icons" />
            <FaInstagram className="icons" />
          </div>
        </div>
      </div>
    </footer>
  );
}
