import React from "react";

import Logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";
import "../Scss/nav.scss";

const Bar = () => {
  return (
    <>
      <div className="container-link">
        <div className="link-contents">
          <div className="nav-logo">
            <Link to="/home">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="Link">
            <Link to="/">Menu+</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bar;
