import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Movie App</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Features</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Streaming Issues</a>
              </li>
              <li>
                <a href="#">Account Management</a>
              </li>
              <li>
                <a href="#">Subscription Status</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Discover</h4>
            <ul>
              <li>
                <a href="#">Latest Releases</a>
              </li>
              <li>
                <a href="#">Top Rated</a>
              </li>
              <li>
                <a href="#">Genres</a>
              </li>
              <li>
                <a href="#">Upcoming</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.LinkedIn.com/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
