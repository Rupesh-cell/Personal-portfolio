import React from 'react';
import '../Scss/techs.scss';

const TechSkills = () => {
  const skills = [
    { name: 'HTML', progress: 90 },
    { name: 'CSS', progress: 85 },
    { name: 'JavaScript', progress: 80 },
    { name: 'React.js', progress: 75 },
    // Add more skills with their progress values
  ];
  const radius = 50; // Adjust the radius of the circular progress bar

  return (
    <div className="circular-tech-skills">
      <h2>Tech Skills</h2>
      <div className="progress-circles">
        {skills.map((skill, index) => (
          <div className="progress-circle" key={index}>
            <svg width={radius * 2} height={radius * 2}>
              <circle
                className="background-circle"
                cx={radius}
                cy={radius}
                r={radius - 5}
              />
              <circle
                className="progress-circle"
                cx={radius}
                cy={radius}
                r={radius - 5}
                stroke="#007bff" // Filled color
                strokeWidth="10"
                strokeDasharray={`${(skill.progress / 100) * 2 * Math.PI * (radius - 5)}, ${2 * Math.PI * (radius - 5)}`}
                fill="transparent"
              />
            </svg>
            <div className="label">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;