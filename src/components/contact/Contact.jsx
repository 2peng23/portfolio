import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookMessenger,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

// For Sending an email
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_pwopqke",
      "template_hg5lyzc",
      form.current,
      "4ejb0gcA-Lom8yJBd"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FontAwesomeIcon icon={faEnvelope} className="contact__icon" />
            <h4>Email</h4>
            <h5>aryayouh@gmail.com</h5>
            <a href="mailto:aryayouh@gmail.com" target="_blank">
              Send an Email
            </a>
          </article>

          <article className="contact__option">
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              className="contact__icon"
            />
            <h4>Messenger</h4>
            <h5>Joel Rioflorido</h5>
            <a href="https://m.me/jcr.aile" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <FontAwesomeIcon icon={faTiktok} className="contact__icon" />
            <h4>Tiktok</h4>
            <h5>@rioooo</h5>
            <a href="https://www.tiktok.com/@oooooir.rio" target="_blank">
              Send an Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Message{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
