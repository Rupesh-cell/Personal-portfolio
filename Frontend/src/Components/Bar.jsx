import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Scss/nav.scss";
import CoolNav from "./CoolNav";

const Bar = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <>
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand>
            <Link to="/home">
              <img src={Logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Button onClick={handleButtonClick}>{showComponent}</Button>
          {showComponent && <CoolNav />}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
          <Navbar.Collapse id="basic-navbar-nav">
            
          
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Bar;
