import React, { useState } from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBook,
  faHandshake,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <FontAwesomeIcon icon={faHome} />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <FontAwesomeIcon icon={faUser} />
      </a>
      <a
        href="#exp"
        onClick={() => setActive("#exp")}
        className={active === "#exp" ? "active" : ""}
      >
        <FontAwesomeIcon icon={faBook} />
      </a>
      <a
        href="#service"
        onClick={() => setActive("#service")}
        className={active === "#service" ? "active" : ""}
      >
        <FontAwesomeIcon icon={faHandshake} />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <FontAwesomeIcon icon={faComments} />
      </a>
    </nav>
  );
};

export default Nav;
