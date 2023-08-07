import React from "react";
import { Link } from "react-router-dom";
import "../Scss/cool.scss";

const CoolNav = () => {
  return (
    <>
      <div className="link-content">
        <div className="Link">
          <Link to="/home">Home</Link>
          <Link to="/works">Works</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" download>
          link
          </a>
        </div>
      </div>
    </>
  );
};

export default CoolNav;
