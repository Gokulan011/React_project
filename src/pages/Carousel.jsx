import React, { useEffect, useRef } from "react";
import { Carousel as BootstrapCarousel } from "bootstrap";
import Mens_Banner from "../assets/Mens_Banner_.jpg"

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = new BootstrapCarousel(carouselRef.current, {
      interval: 3000,  
      ride: "carousel",
      pause: false,
      wrap: true
    });

    return () => carousel.dispose();
  }, []);

  return (
    <div className="container mt-4">
      <div ref={carouselRef} id="demo" className="carousel slide">

        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
             <img src={Mens_Banner} className="d-block w-80" alt="shirt1" />
          </div>
          <div className="carousel-item">
            <img src={Mens_Banner} className="d-block w-80" alt="shirt1" />
          </div>
          <div className="carousel-item">
            <img src={Mens_Banner} className="d-block w-80" alt="shirt1" />
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </div>
  );
};

export default Carousel;