import React, { useEffect, useRef } from "react";
import "./contact.css";
import mapabudhabi from "../../assets/images/mapabudhabi.png";
import Header from "../Header";
import SocialContact from "../SocialContact";

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
    <div className="sec-contact">
      <Header />
      <div class="contact">
        <div class="container">
          <div class="main-title">
            <h2>Contact</h2>
          </div>
          <div class="inter-contact">
            {/*  <div class="form">
              <form action="">
                <p>Dont hesiste to get in touch</p>
                <div class="row">
                  <div class="input-group">
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    id="subject"
                    placeholder="Your Subject"
                    required
                  />
                </div>
                <div class="input-group">
                  <textarea
                    type="text"
                    id="message"
                    rows="8"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button class="btn">Submit</button>
              </form>
            </div>*/}
            <div className="content">
              <h1>Get In Touch👋</h1>
              <div className="email">
                <h2>Email: </h2>
                <p>yasmineiismail@gmail.com</p>
                <h2>Phone Number: </h2>
                <p>+971 50 146 1058</p>
              </div>
            </div>
            <div class="contact-map">
              <img src={mapabudhabi} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="contac-social">
        <SocialContact />
      </div>
    </div>
  );
};

export default Contact;
