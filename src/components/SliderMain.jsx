import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderMain = () => {
   
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
        fade: true,
        pauseOnHover: true

      };
      return (
        <Slider {...settings}>
          <div>
            <h3>We're Group Of Certified Law Professionals</h3>
            <p>we have helped countless maritime workers and their families go up against the largest offshore companies and win.</p>
            <button>Joy</button>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      );
}
