import React from 'react';
import { useState } from "react";
import '../../Carousel.css';
import Slider from "react-slick";
// import Hightlight1 from '../../../assets/Highlight1.png';
import Hightlight2 from '../../../assets/Highlight2.png';
import Hightlight3 from '../../../assets/Highlight3.png';
import Hightlight4 from '../../../assets/Highlight4.png';
import Hightlight5 from '../../../assets/Highlight5.png';
// import Hightlight6 from '../../../assets/Highlight6.png';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [ Hightlight2, Hightlight3, Hightlight4, Hightlight5];

function AlphaWebsite() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="AlphaWebsite">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AlphaWebsite;