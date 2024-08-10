import styled from 'styled-components';
import { colors } from 'themes/const';

export const DIVHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;

  & h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin: 0;
    padding: 15px;
  }

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    margin-bottom: 20px;
    color: ${colors.acent};
  }

  & img {
    display: block;
    width: 90%;
    box-shadow: 0px 0px 20px 5px rgba(240, 202, 10, 0.18);
  }
`;
