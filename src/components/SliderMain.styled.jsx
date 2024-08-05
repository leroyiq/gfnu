import styled from 'styled-components';
import bgnImage from '../img/bgmain.png';
import { colors } from 'themes/const';

export const DivSlider = styled.div`
  height: auto;
  background-image: linear-gradient(#0a0a0a73, #0a0a0a73), url(${bgnImage});
  position: relative;
  /* outline: 4px solid #ec0101c8; */
  background-position: center;
  background-repeat: no-repeat;
`;

export const IMG = styled.img`
  position: absolute;
  width: 45%;
  height: auto;
  bottom: 0;
  right: 0;
  transition: transform 0.6s ease;

  &.slide2 {
    width: 50%;
    bottom: 50%;
    right: 80px;
    transform: translateY(50%);
    box-shadow: 2px 2px 20px 9px rgba(236, 180, 24, 0.22);
  }

  &.slide3 {
    width: 40%;
    bottom: 50%;
    right: 80px;
    transform: translateY(50%);
    box-shadow: 2px 2px 20px 9px rgba(236, 180, 24, 0.22);
  }
`;

export const DIV = styled.div`
  display: flex;
  height: 100%;
  min-height: 750px;
`;
export const DivSlide = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding-top: 130px;
  padding-left: 130px;

  & h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 35px;
    width: 100%;
    max-width: 669px;
  }

  & p {
    font-size: 18px;

    max-width: 655px;
    width: 100%;
    line-height: 1.6;
    color: ${colors.acent};
  }
`;
