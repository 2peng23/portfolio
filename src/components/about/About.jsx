import React from "react";
import "../about/about.css";
import Me from "../../assets/riorio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faUserFriends,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="Joel" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FontAwesomeIcon icon={faAward} className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FontAwesomeIcon icon={faUserFriends} className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Clients</small>
            </article>
            <article className="about__card">
              <FontAwesomeIcon icon={faFolder} className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, justo sed fringilla fringilla, tellus sapien varius
            lectus, a fermentum tortor libero non libero. Vivamus lobortis
            varius tortor, id tincidunt nulla fermentum nec. Vestibulum non
            tincidunt tellus. Donec scelerisque, sem et vestibulum fringilla, mi
            libero eleifend ipsum, sit amet cursus urna nisl a enim.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
