import React, { useState, useEffect } from "react";
import "../Scss/techs.scss";
import { Container } from "react-bootstrap";
import axios from "axios";

const TechnologyProgressBar = ({ technology, progress, logoUrl }) => {
  return (
    <Container>
      <div className="technology-progress">
        <div className="technology-logo">
          <img src={logoUrl} alt={`${technology} Logo`} />
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </Container>
  );
};

const FrontendPortfolio = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const fetchTechData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/techs");
        setTechnologies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTechData();
  }, []);

  return (
    <Container>
      <div className="frontend-portfolio">
        <h2>Frontend Technologies</h2>
        {technologies.map((tech, index) => (
          <TechnologyProgressBar
            key={index}
            technology={tech.name}
            progress={tech.progress}
            logoUrl={tech.logoUrl}
          />
        ))}
      </div>
    </Container>
  );
};

export default FrontendPortfolio;
