
import React from 'react';

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map((technology, index) => (
          <span key={index}>{technology.name}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
