import styled from 'styled-components';
import bgnImage from '../img/bgmain.png';
// import { colors } from 'themes/const';

export const SharedDiv = styled.div`
  width: 100%;
  height: 100vh;

  background-image: linear-gradient(#0a0a0a73, #0a0a0a73), url(${bgnImage});
  position: relative;
  /* outline: 4px solid #ec0101c8; */
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
