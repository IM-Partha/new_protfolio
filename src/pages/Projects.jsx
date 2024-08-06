import React from 'react';
import ecom from '../assets/projects/ecommerce.png';
import falvoro from '../assets/projects/falvoro.png';
import movie from '../assets/projects/movi.png';
import './Projects.css'; //  CSS file

const Projects = () => {
  const projects = [
    { 
      img: ecom, 
      text: 'E-commerce Project', 
      description: 'E-commerce project.',
      githubLink: 'https://github.com/IM-Partha/E-Commerce'
    },
    { 
      img: falvoro, 
      text: 'Flavoro Project', 
      description: 'Flavoro Food project.',
      githubLink: 'https://github.com/IM-Partha/Food-App'
    },
    { 
      img: movie, 
      text: 'Movie Project', 
      description: 'Movie Api project.',
      githubLink: 'https://github.com/IM-Partha/Movie-Search-App'
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h1 className='mb-5'>PROJECTS</h1>
      <div className="projects-grid">
        {/* here projects details map */}
        {projects.map((project, index) => (
          <div className="card project-card" style={{ width: '18rem' }} key={index}>
            <img src={project.img} className="card-img-top" alt={project.text} />
            <div className="card-body">
              <h5 className="card-title">{project.text}</h5>
              <p className="card-text">{project.description}</p>
              <a href={project.githubLink} className="btn btn-primary github-link" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
