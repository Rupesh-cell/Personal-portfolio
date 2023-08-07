import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../Scss/profile.scss";
import { Link } from "react-router-dom";
import Pic from "../Assets/rup.jpg"

const Profile = () => {
  return (
    <>
      <div className="main-container">
        <div className="profile-contents">
          <Col>
            <Row>
              <div className="profile-discription">
                <h1>I create faces for digital products</h1>
                <h2>by changing your dreams into reality .. </h2>
                <div className="button-section">
                  <Button>Book A Meeting</Button>
                  <Link to="/cv">Watch my CV</Link>
                </div>
              </div>
            </Row>
            <Row>
              <img className="profile-pic" src={Pic} alt="" />
              <div className="time-content">
                <h1>Current Location:</h1>
                <h2>Pune "9:09PM"</h2>
                <div className="green-box">
                  <div className="green"></div>
                  <h1>At office now</h1>

                </div>
              </div>
            </Row>
          </Col>
        </div>
      </div>
    </>
  );
};

export default Profile;
