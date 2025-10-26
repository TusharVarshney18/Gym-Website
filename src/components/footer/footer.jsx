import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"; // add this

export default function Footer() {
  return (
    <footer className="footer-container" aria-label="Site footer">
      <div className="footer-content">
        <section className="footer-section" aria-labelledby="footer-branch">
          <h3 id="footer-branch">NORTH FORTBERRY</h3>
          <p>123 Anywhere St.</p>
          <p>Any City, ST 12345</p>
          <p>(123) 456-7890</p>
          <p>hello@reallygreatsite.com</p>
          <p>@reallygreatsite</p>
        </section>

        <section className="footer-section" aria-labelledby="footer-hours">
          <h3 id="footer-hours">CLUB HOURS</h3>
          <p>Tuesday to Saturday</p>
          <p>6:00 am to 10:00 pm</p>
          <p>Sunday</p>
          <p>8:00 am to 9:00 pm</p>
          <p>Closed on Mondays</p>
        </section>

        <section className="footer-section" aria-labelledby="footer-legal">
          <h3 id="footer-legal">LEGAL</h3>
          <p>
            <Link to="/disclaimer" className="footer-link">
              Disclaimer
            </Link>
          </p>
        </section>

        <section className="footer-section" aria-labelledby="footer-social">
          <h3 id="footer-social">STAY CONNECTED</h3>
          <div className="social-icons" role="list">
            <a
              href="#"
              aria-label="Facebook"
              role="listitem"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook
                className="icons"
                aria-hidden="true"
                focusable="false"
              />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              role="listitem"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter
                className="icons"
                aria-hidden="true"
                focusable="false"
              />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              role="listitem"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                className="icons"
                aria-hidden="true"
                focusable="false"
              />
            </a>
          </div>
        </section>
      </div>

      {/* Optional bottom bar */}
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Astraeus Fitness. All rights reserved.
        </span>
        <span>Made with passion and heavy lifts.</span>
      </div>
    </footer>
  );
}
