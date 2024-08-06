import React from "react";
import Navbar from "../compo/Navbar";
import Carousel from "../compo/Carousel";
import About from "./About";
import Techskill from "./Techskill";
import Projects from "./Projects";
import Footer from "../compo/Footer";
const Home = () => {
  return (
    <div>
        <div id="/" >
        <Navbar/>
        <Carousel/>
        <About/>
        <Techskill/>
        <Projects/>
        <Footer/>
        </div>
    </div>  
  );
};

export default Home;
