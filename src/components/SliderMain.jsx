import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BTN } from './Navigation.styled';
import manImg from '../img/man.png';
import { DIV, DivSlide, IMG } from './SliderMain.styled';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',

        marginRight: '50px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        marginLeft: '50px',
        zIndex: '9999',
      }}
      onClick={onClick}
    />
  );
}

export const SliderMain = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: true,
    fade: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      <DIV>
        <IMG src={manImg} alt="men" />
        <DivSlide>
          <h3>Ми — група сертифікованих професіоналів у сфері нерухомості </h3>
          <p>Ми допомогли незліченній кількості сімей знайти свій дім.</p>
          <BTN>Приєднуйся</BTN>
        </DivSlide>
      </DIV>
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
};
