import React, { useState, useEffect } from "react";
import "../Scss/techs.scss";
import { Container } from "react-bootstrap";
import axios from "axios";


const TechnologyProgressBar = () => {
  const [tech, setTech] = useState([]);

  const options = {
    method: "GET",
    url: "http://localhost:5000/api/techs",
    headers: { "Content-Type": "application/json" },
  };

  axios
    .request(options)
    .then(function (response) {
      setTech(response.data)
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

    useEffect(() => {
    
    
    }, [])
    


  return (
    <Container>
      <div className="technology-progress">
        <div className="technology-logo">
          <img src={} alt={`${} Logo`} />
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </Container>
  );
};

const FrontendPortfolio = () => {
  const technologies = [
    { name: "HTML", progress: 90, logoUrl: "html-logo.png" },
    { name: "CSS", progress: 85, logoUrl: "css-logo.png" },
    { name: "JavaScript", progress: 80, logoUrl: "javascript-logo.png" },
    // Add more technologies and progress values here
  ];

  return (
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
  );
};

export default FrontendPortfolio;
