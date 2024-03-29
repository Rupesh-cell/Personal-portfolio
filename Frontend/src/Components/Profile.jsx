import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "../Scss/profile.scss";
import { Link } from "react-router-dom";
import Pic from "../Assets/rup.jpg";
import CurrentTime from "./Time";

const Profile = () => {
  return (
    <>
      
        <div className="profile-contents">
        <Container>
          <Row>
            <div className="rows">
              <Col>
                <div className="profile-discription">
                  <h1>I create faces for digital products</h1>
                  <h2>by changing your dreams into reality .. </h2>
                  <div className="button-section">
                    <Button>Book A Meeting</Button>
                    <Link to="/cv">Watch my CV</Link>
                  </div>
                </div>
              </Col>
              <Col className="col2">
                <img className="profile-pic" src={Pic} alt="" />
                <div className="time-content">
                  <CurrentTime/>
                  
                </div>
              </Col>
            </div>
          </Row>
          </Container>
        </div>
      
    </>
  );
};

export default Profile;
