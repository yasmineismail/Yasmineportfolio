import React, { useEffect, useRef } from "react";
import "./experience.css";
import { TagCloud } from "react-tagcloud";
import Header from "../Header";
import gsap from "gsap";
import { Power4 } from "gsap";
const data = [
  { value: "jQuery", count: 25 },
  { value: "MongoDB", count: 18 },
  { value: "JavaScript", count: 38 },
  { value: "React", count: 30 },
  { value: "Nodejs", count: 28 },
  { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 },
  { value: "CSS3", count: 20 },
  { value: "Webpack", count: 22 },
  { value: "Babel.js", count: 7 },
  { value: "ECMAScript", count: 25 },
  { value: "Jest", count: 15 },
  { value: "Mocha", count: 17 },
  { value: "React Native", count: 27 },
  { value: "Angular.js", count: 30 },
  { value: "TypeScript", count: 15 },
  { value: "Flow", count: 30 },
  { value: "NPM", count: 11 },
];

const Experience = () => {
  let experience = new gsap.timeline();

  const title = useRef(null);
  useEffect(() => {
    experience.to(".skills", {
      duration: 1,
      x: 0,
      ease: Power4.easeOut,
    });
  });
  return (
    <>
      <Header />
      <div class="skills">
        <div class="container">
          <div class="main-title">
            <h2>Skills and Experience</h2>
          </div>
          <div class="skills-inter">
            <div class="skills-details">
              <div class="experience-row">
                <div class="experience-box">
                  <h3>Full Stack developer</h3>
                  <span>Freelance</span>
                  <span>2020-2021</span>
                  <p>comptabilte socity</p>
                </div>
                <div class="experience-box">
                  <h3>Full Stack developer</h3>
                  <span>Freelance</span>
                  <span>2020-2021</span>
                  <p>comptabilte socity</p>
                </div>
              </div>
              <div class="chart">
                <span>Frontend</span>
                <footer>
                  <div data-width="75%" style={{ width: "75%" }}></div>{" "}
                </footer>
              </div>
              <div class="chart">
                <span>Backend</span>
                <footer>
                  <div
                    data-width="75%"
                    style={{ backgroundColor: "#08fdd8", width: "75%" }}
                  ></div>
                </footer>
              </div>
              <div class="chart">
                <span>React</span>
                <footer>
                  <div data-width="70%" style={{ width: "70%" }}></div>{" "}
                </footer>
              </div>
              <div class="chart">
                <span>Django</span>
                <footer>
                  <div
                    data-width="95%"
                    style={{ backgroundColor: "#08fdd8", width: "95%" }}
                  ></div>
                </footer>
              </div>
            </div>
            <div class="contents">
              <TagCloud
                minSize={12}
                maxSize={35}
                tags={data}
                style={{ width: 300, textAlign: "left" }}
                className="myTagCloud"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
