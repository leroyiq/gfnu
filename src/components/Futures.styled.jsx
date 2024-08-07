import styled from 'styled-components';
import { colors } from 'themes/const';

export const DF = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  height: 500px;
  width: 100%;
  gap: 100px;
  padding-bottom: 50px;

  & img {
    max-width: 50%;
  }
  & h2 {
    font-size: 45px;
    font-family: 'Cormorant Garamond', serif;
    margin: 0 auto;
  }
`;

export const DF_TEXT = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  justify-content: start;
  padding-top: 50px;
  margin: auto 0;

  & ul {
    display: flex;
    flex-direction: column;
    list-style-type: square;
    margin: 0;
    padding: 0;
    gap: 50px;
    color: ${colors.acent};
    font-size: 22px;
    flex-grow: 1;
  }

  & img {
    margin: 0 auto;
  }
`;
