import React from 'react';
import './Carousel.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear", 
  };
 
  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className="carouselImageOne"></div>
        <div className="carouselImageTwo"></div>
        <div className="carouselImageThree"></div>
      </Slider>
    </div>
  );
};
