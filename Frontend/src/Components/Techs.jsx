import React from 'react';
import '../Scss/techs.scss';
import { Container } from 'react-bootstrap';

const TechnologyProgressBar = () => {
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
  const technologies = [
    { name: 'HTML', progress: 90, logoUrl: 'html-logo.png' },
    { name: 'CSS', progress: 85, logoUrl: 'css-logo.png' },
    { name: 'JavaScript', progress: 80, logoUrl: 'javascript-logo.png' },
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
