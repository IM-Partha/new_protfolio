import React from 'react';
import { Link } from 'react-scroll'; //install react-scroll libary
import './Navbar.css';

const Navbar = () => {
  return (
//Navbar

<nav className="navbar navbar-expand-lg bg-light fixed-top nav-them">
<div className="container-fluid">
  <a className="navbar-brand logo" href="#">
    Partha Debnath
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ms-auto p-2">
      <Link 
        className="nav-link me-3" 
        to="/" 
        spy={true} 
        smooth={true} 
        offset={50} 
        duration={500}
      >
        Home
      </Link>
      <Link 
        className="nav-link me-3" 
        to="about" 
        spy={true} 
        smooth={true} 
        offset={50} 
        duration={500}
      >
        About
      </Link>
      <Link 
        className="nav-link me-3" 
        to="skills" 
        spy={true} 
        smooth={true} 
        offset={50} 
        duration={500}
      >
        Skill
      </Link>
      <Link 
        className="nav-link" 
        to="projects" 
        spy={true} 
        smooth={true} 
        offset={50} 
        duration={500}
      >
        Projects
      </Link>
    </div>
  </div>
</div>
</nav>

//Navbar
  );
};

export default Navbar;
