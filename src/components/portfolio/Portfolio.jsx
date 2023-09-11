import React from "react";
import "./portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import youth from "../../assets/youth.png";
import dr from "../../assets/dr.png";

const data = [
  {
    id: 1,
    image: youth,
    title: "Youth Profiling",
    github: "https://github.com",
    demo: "https://pydcprofiling.online",
  },
  {
    id: 2,
    image: dr,
    title: "Sample",
    github: "https://github.com",
    demo: "https://dribbble.com/shots",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio-img">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
