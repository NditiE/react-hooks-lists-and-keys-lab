
import React from 'react';
import NavBar from './NavBar';
import ProjectList from './ProjectList';

const App = () => {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'Description of Project 1',
      technologies: [{ name: 'Tech A' }, { name: 'Tech B' }],
    },
    // Add more projects
  ];

  return (
    <div className="app">
      <NavBar />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
