import { Link } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
  const [close, setClose] = useState(true);

  return (
    <div
      className={
        close === false ? "second-header show-menu" : "second-header hide-menu"
      }
    >
      <div
        className="close-button"
        onClick={() => {
          setClose(!close);
        }}
      >
        <span
          className={close === false ? "label label1" : "label onlabel1"}
        ></span>
        <span className={close === false ? "label2" : "onlabel2"}></span>
        <span
          className={close === false ? "label label3" : "label onlabel3"}
        ></span>
      </div>
      <ul className={close === false ? "menu" : "label2"}>
        <li>
          <Link to={`/`}>Home </Link>
        </li>
        <li>
          <Link to={`/about`}>About </Link>
        </li>
        <li>
          <Link to={`/Portfolio`}>Portfolio </Link>
        </li>
        <li>
          <Link to={`/experience`}>Experience </Link>
        </li>
        <li>
          <Link to={`/contact`}>Contact </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
