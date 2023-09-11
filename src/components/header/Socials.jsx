import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.facebook.com/jcr.aile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        href="https://www.facebook.com/jcr.aile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTiktok} />
      </a>
      <a
        href="https://www.facebook.com/jcr.aile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default Socials;
