import styled from 'styled-components';
import bgnImage from '../img/bgmain.png';
import { colors } from 'themes/const';

export const DivSlider = styled.div`
  height: auto;
  background-image: linear-gradient(#0a0a0a73, #0a0a0a73), url(${bgnImage});
  position: relative;
  outline: 4px solid #ec0101c8;
  background-position: center;
  background-repeat: no-repeat;
`;

export const IMG = styled.img`
  position: absolute;
  width: 45%;
  height: auto;
  bottom: 0;
  right: 0;
`;

export const DIV = styled.div`
  display: flex;
  height: 100%;
  min-height: 750px;
`;
export const DivSlide = styled.div`
  width: 672px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding-top: 80px;
  padding-left: 100px;

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
