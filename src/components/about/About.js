import React, { useEffect, useRef } from "react";
import "./about.css";
import yasimage from "../../assets/images/yasimage.jpeg";
import yasmineLogo from "../../assets/images/yasmineLogo1.svg";
import SocialContact from "../SocialContact";
import Header from "../Header";
import Transition from "../Transition";
import gsap from "gsap";
import { Power4 } from "gsap";
const About = () => {
  let about = new gsap.timeline();

  const title = useRef(null);
  useEffect(() => {
    about.to(".about", {
      duration: 1,
      x: 0,
      ease: Power4.easeOut,
    });
  });

  const onButtonClick = () => {
    fetch("Resume-YasmineIsmail.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const fileURL = URL.createObjectURL(blob);
        window.open(fileURL, "_blank");
      });
  };
  return (
    <>
      <Header />
      <div className="about">
        <div className="container">
          <div className="main-title">
            <h2 ref={title}>About Me</h2>
          </div>
          <div className="content">
            <div className="inter">
              <p>
                {" "}
                Hi! My name is Yasmine Ismail, a Junior Full Stack web developer
                from Tunisia, currently residing in the UAE.{" "}
                <span className="inbox">
                  I hold a master's degree in software engineering and have a
                  year of experience in web development
                </span>
                , covering front-end and back-end technologies. I have developed
                a strong passion for learning new technologies and collaborating
                with teams to create user-friendly web applications. I am
                actively searching for new opportunities and welcome any
                inquiries you may have.{" "}
                <span className="inbox">
                  Please don't hesitate to reach out
                </span>{" "}
                if you have any questions or just want to say hello - my{" "}
                <a href="mailto:yasmineiismail@gmail.com">
                  <span className="inbox">inbox</span>
                </a>{" "}
                is always open and I would be happy to connect with you.
              </p>

              <button className="btn" onClick={onButtonClick}>
                Resume
              </button>
            </div>
            <div className="image">
              <svg xmlns="http://www.w3.org/2000/svg">
                <filter id="svgTint">
                  <feColorMatrix
                    type="matrix"
                    values="0.47058823529411764 0.47058823529411764 0.47058823529411764  0 0 0.20392156862745098 0.20392156862745098 0.20392156862745098  0 0 0.7372549019607844 0.7372549019607844 0.7372549019607844  0 0  0 0 0 1 0"
                  />
                </filter>
              </svg>
              <img src={yasimage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="social-about">
        <SocialContact />
      </div>
    </>
  );
};

export default About;
