import React, { useEffect, useRef, useState } from "react";

import "./portfolio.css";
import acceuilPage from "../../assets/images/acceuilPage.png";
import CartHome from "../../assets/images/CartHome.png";
import HomeY from "../../assets/images/HomeY.png";
import Data from "./Data";
import PortfolioPopup from "./PortfolioPopup";
import { Link } from "react-router-dom";
import Header from "../Header";
import Transition from "../Transition";
import gsap from "gsap";
import { Power4 } from "gsap";
const Portfolio = () => {
  const [project, setProject] = useState(0);
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState();
  const [info, setInfo] = useState([]);
  const [category, setCategory] = useState();
  const [current, setCurrent] = useState(0);
  const [Lengthg, setLength] = useState(0);
  const [Loaded, setLoaded] = useState(false);
  let portfolio = new gsap.timeline();

  useEffect(() => {
    portfolio.to(".portfolio", {
      duration: 1,
      x: 0,
      ease: Power4.easeOut,
    });
  });
  return (
    <>
      <Header />
      <div className="portfolio">
        <div className="container">
          <div className="main-title">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="portfolio-content">
          {Data.map((ele) => {
            const { id, image, title, description, category } = ele;
            return (
              <div key={id} className="work">
                <Link to={`/work/${id}`}>
                  <img src={image} alt="" />
                  <div class="caption">
                    <h4>{title}</h4>
                    <p>{category}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
