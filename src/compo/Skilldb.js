import HTML from '../assets/skills/html-5.svg';
import CSS from '../assets/skills/css3.svg';
import boot from '../assets/skills/bootstrap-4.svg';
import git from '../assets/skills/git-icon.svg';
import tailwind from '../assets/skills/tailwindcss-icon.svg';
import redux from '../assets/skills/redux.svg';
import react from '../assets/skills/react.svg';
import js from '../assets/skills/javascript.svg';
import nodejs from '../assets/skills/nodejs.svg';
import expressjs from '../assets/skills/expressjs-ar21.svg';
import Docker from '../assets/skills/docker.svg';
import mongoDB from '../assets/skills/mongodb-ar21.svg';

const Skilldb = {
    frontend: [
        { imgAltText: "HTML 5", imgSrc: HTML, skillName: "HTML5" },
        { imgAltText: "CSS 3", imgSrc: CSS, skillName: "CSS3" },
        { imgAltText: "JavaScript", imgSrc: js, skillName: "JavaScript" },
        { imgAltText: "React JS", imgSrc: react, skillName: "React JS" },
        { imgAltText: "Redux", imgSrc: redux, skillName: "Redux" },
    ],
    frameworks: [
        { imgAltText: "Bootstrap", imgSrc: boot, skillName: "Bootstrap" },
        { imgAltText: "Tailwind CSS", imgSrc: tailwind, skillName: "Tailwind CSS" },
    ],
    databases: [
      { imgAltText: "nodejs", imgSrc: nodejs , skillName: "NodeJs" },
      { imgAltText: "expressjs", imgSrc: expressjs , skillName: "expressjs" },
      { imgAltText: "mongoDB", imgSrc: mongoDB , skillName: "mongoDB" }
    ],
    versionControl: [
        { imgAltText: "GIT", imgSrc: git, skillName: "GIT" },
        { imgAltText: "Docker", imgSrc: Docker, skillName: "Docker" },
    ],
};

export default Skilldb;
