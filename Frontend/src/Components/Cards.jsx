import React, { useState, useEffect } from "react";
import "../Scss/cards.scss";
import axios from "axios";
import { Container, Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="cards-container">
        <Container>
          <div className="cards-items">
            <h1>Projects</h1>
            <Row xs={1} md={3} lg={4} className="g-2">
              {projects?.map((items, index) => (
                <Col>
                  <Link to="">
                    <Card>
                      <Card.Img variant="top" src={items.image} />
                      <Card.Body>
                        <Card.Title>{items.title}</Card.Title>
                        <Card.Text>{items.description}</Card.Text>
                        <div className="links">
                          <Link>
                            <button>
                              <img
                                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                                alt="GitHub Logo"
                                width="29"
                                height="29"
                              />
                              GitHub
                            </button>
                          </Link>
                          <Link>
                            <button>
                              <img
                                src="https://img.freepik.com/premium-vector/blue-square-with-globe-icon-it_876006-15.jpg"
                                alt="Web"
                                width="29"
                                height="29"
                              />
                              Web Link
                            </button>
                          </Link>
                        </div>
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
