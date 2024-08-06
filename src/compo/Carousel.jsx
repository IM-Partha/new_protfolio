import React from 'react';
import image1 from '../assets/image/slide1.webp';
import image2 from '../assets/image/slide2.webp';
import image3 from '../assets/image/slide3.webp';
import Titlemessage from './Titlemessage';
import './Carouse.css' //css
const Carousel = () => {
  return (
    <div className="carousel-container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000" 
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
      </div>
      <div className="title-message">
        <Titlemessage />
      </div>
    </div>
  );
};

export default Carousel;
