import React, { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { useParams } from "react-router-dom";
import close from "../../assets/images/close.svg";
import Arrowright from "../../assets/images/arrow-rightt.svg";
import { Link } from "react-router-dom";

import Data from "./Data";
const PortfolioPopup = () => {
  const imgRef = useRef(null);
  const { id } = useParams();
  const [current, setCurrent] = useState(0);

  const [data, setData] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [lengthImgs, setLength] = useState(0);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    const dataWithId = Data.filter((item) => item.id == id);
    setData(dataWithId);
    setImgs(dataWithId[0].images);
    setLength(dataWithId[0].images.length);
  }, [id]);
  console.log(lengthImgs);

  const nextSlide = () => {
    setCurrent(current == lengthImgs - 1 ? 0 : current + 1);
    setLoaded(false);
  };
  const prevSlide = () => {
    setCurrent(current == 0 ? lengthImgs - 1 : current - 1);
    setLoaded(false);
  };
  console.log(data);

  return (
    <div class="portfolio-popup  popup-work2">
      <div className="pp-content">
        <Link to={`/Portfolio`}>
          {" "}
          <div className="pp-header">
            <img src={close} alt="" />
          </div>
        </Link>
        <div className="carousel-track-container">
          <ul ref={imgRef} className="carousel-track">
            {imgs.map((imgWork, index) => {
              return (
                <li key={index} className="carousel-slide current-slide">
                  {current == index && (
                    <img className="carousel-image" src={imgWork} alt="" />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="carousel-button left " onClick={prevSlide}>
            <svg
              viewBox="0 0 26 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.854 47.707L25.561 24L1.854 0.292999L0.438995 1.707L22.732 24L0.438995 46.293L1.854 47.707Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="carousel-button right" onClick={nextSlide}>
            <svg
              viewBox="0 0 26 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.854 47.707L25.561 24L1.854 0.292999L0.438995 1.707L22.732 24L0.438995 46.293L1.854 47.707Z"
                fill="black"
              />
            </svg>
          </div>

          <div className="carousel-nav">
            {imgs.map((imgWork, index) => {
              return (
                <span
                  key={index}
                  className={
                    current === index
                      ? "carousel-indicator current-slide"
                      : "carousel-indicator"
                  }
                  onClick={() => setCurrent(index)}
                ></span>
              );
            })}

            <div></div>
          </div>
        </div>

        <h2>ecommerce</h2>
      </div>
    </div>
  );
};

export default PortfolioPopup;
