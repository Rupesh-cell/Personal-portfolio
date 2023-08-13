import React, { useState } from "react";
import "../Scss/cards.scss";
import axios from "axios";
import { Container, Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Cards = () => {
  const [projects, setProjects] = useState([]);

  const options = { method: "GET", url: "http://localhost:5000/api/projects" };

  axios
    .request(options)
    .then(function (response) {
      setProjects(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <>
      <div className="cards-container">
        <Container>
          <div className="cards-items">
            <h1>Projects</h1>
            <Row xs={2} md={3} lg={4} className="g-2">
              {projects?.map((items, index) => (
                <Col key={index}>
                  <Link to="">
                    <Card>
                      <Card.Img variant="top" src={items.image} />
                      <Card.Body>
                        <Card.Title>{items.title}</Card.Title>
                        <Card.Text>
                          Rs:
                          {items.price}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cards;
