import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Joel
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#exp">Experience</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/jcr.aile">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/urriooooo/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.tiktok.com/@oooooir.rio">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Joel Rioflorido. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
