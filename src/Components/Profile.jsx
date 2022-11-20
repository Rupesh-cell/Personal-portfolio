import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../Scss/profile.scss";
import { Link } from "react-router-dom";

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
          </Col>
        </div>
      </div>
    </>
  );
};

export default Profile;
