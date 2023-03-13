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
                I am Yasmine Ismail, Junior Full Stack web developer from
                Tunisia, based in UAE. I have one year of experience in web
                development, including front-end and back-end technologies and
                I'm passionate for learning new technologies and working with
                teams to create user-friendly web applications
              </p>

              <button className="btn">Resume</button>
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
      <SocialContact />
    </>
  );
};

export default About;
