import React, { useState } from "react";
import "./mode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Mode = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clickHandler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      {/* <div className="container mode__container">
        <FontAwesomeIcon
          icon={darkMode ? faMoon : faSun}
          className="mode__icon"
          onClick={clickHandler}
        />
      </div> */}
    </div>
  );
};

export default Mode;
