import React,{useState} from "react";
import Logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../Scss/nav.scss";
import CoolNav from "./CoolNav";

const Bar = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
   
    setShowComponent(!showComponent);
  };
  
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
            <Button onClick={handleButtonClick}>{showComponent}</Button>
            {showComponent && <CoolNav />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bar;
