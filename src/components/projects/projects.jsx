import React from 'react';
import './projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      demoLink: 'https://nfjsg.github.io/weather-dashboard/',
      githubLink: 'https://github.com/nfjsg/weather-dashboard.git',
      image: 'src/components/projects/IMG_7306.jpeg', 
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      demoLink: 'https://nfjsg.github.io/CodeQuizGame/',
      githubLink: 'https://github.com/nfjsg/CodeQuizGame.git',
      image: 'src/components/projects/IMG_7237.jpeg',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
      demoLink: 'https://nfjsg.github.io/WorkDayScheduler/',
      githubLink: 'https://github.com/nfjsg/WorkDayScheduler.git',
      image: 'src/components/projects/IMG_7262.jpeg',

    },
    {
      title: 'Project 4',
      description: 'Description for Project 4',
      demoLink: 'https://dry-waters-69396-c33e43ba5835.herokuapp.com/',
      githubLink: 'https://github.com/nfjsg/FlavorFinder.git',
      image: 'src/components/projects/recipes-screenshot.png',

    },
    {
      title: 'Project 5',
      description: 'Description for Project 5',
      demoLink: 'https://demo-link-5.com',
      githubLink: 'https://github.com/project-5',
      image: 'src/components/projects/IMG_7237.jpeg',

    },
    {
      title: 'Project 6',
      description: 'Description for Project 6',
      demoLink: 'https://demo-link-6.com',
      githubLink: 'https://github.com/project-6',
      image: 'src/components/projects/IMG_7237.jpeg',

    },
  ];

  const Project = ({ title, description, demoLink, githubLink, image }) => (
    <div className="project-container">
      <h3 className="project-title">{title}</h3>
      <img src={image} alt={`Project ${title}`} className="project-image" />
      <p className="project-description">{description}</p>
      <div className="project-links">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );

  return (
    <div className="projects-container">
      {projectData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          demoLink={project.demoLink}
          githubLink={project.githubLink}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default Projects;
