import React from "react";
import "./experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <section id="exp">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container exp__container">
        <div className="exp__frontend">
          <h3>Frontend Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <FontAwesomeIcon icon={faCheckCircle} className="exp__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp__details">
              <FontAwesomeIcon icon={faCheckCircle} className="exp__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <FontAwesomeIcon icon={faCheckCircle} className="exp__icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <FontAwesomeIcon icon={faCheckCircle} className="exp__icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <FontAwesomeIcon icon={faCheckCircle} className="exp__icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exp__backend">
          <h3>Backend Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <FontAwesomeIcon icon={faCheckCircle} className="exp__icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <FontAwesomeIcon icon={faCheckCircle} className="exp__icon" />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp__details">
              <FontAwesomeIcon icon={faCheckCircle} className="exp__icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <FontAwesomeIcon icon={faCheckCircle} className="exp__icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="exp__details">
              <FontAwesomeIcon icon={faCheckCircle} className="exp__icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
