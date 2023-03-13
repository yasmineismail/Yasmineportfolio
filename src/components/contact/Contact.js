import React, { useEffect, useRef } from "react";
import "./contact.css";
import mapabudhabi from "../../assets/images/mapabudhabi.png";
import Header from "../Header";

import gsap from "gsap";
import { Power4 } from "gsap";
const Contact = () => {
  let contact = new gsap.timeline();

  const title = useRef(null);
  useEffect(() => {
    contact.to(".contact", {
      duration: 1,
      x: 0,
      ease: Power4.easeOut,
    });
  });
  return (
    <>
      <Header />
      <div class="contact">
        <div class="container">
          <div class="main-title">
            <h2>Contact</h2>
          </div>
          <div class="inter-contact">
            <div class="form">
              <form action="">
                <p>Dont hesiste to get in touch</p>
                <div class="row">
                  <div class="input-group">
                    <input type="text" id="name" required />
                    <label for="name">Your name</label>
                  </div>
                  <div class="input-group">
                    <input type="email" id="email" required />
                    <label for="email">Your Email</label>
                  </div>
                </div>
                <div class="input-group">
                  <input type="text" id="subject" required />
                  <label for="subject">Your subject</label>
                </div>
                <div class="input-group">
                  <textarea
                    type="text"
                    id="message"
                    rows="8"
                    required
                  ></textarea>
                  <label for="name">Your Message</label>
                </div>
                <button class="btn">Submit</button>
              </form>
            </div>
            <div class="contact-map">
              <img src={mapabudhabi} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
