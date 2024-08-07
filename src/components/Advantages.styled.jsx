import styled from 'styled-components';
import { colors } from 'themes/const';

export const DivAdv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 50px;

  width: 100%;
  padding-bottom: 50px;
  margin: 0 auto;
  gap: 30px;

  background-color: ${colors.fluid};

  & h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 45px;
    width: 100%;
    max-width: 669px;

    color: ${colors.primary};
    text-align: center;
    margin: 0;
  }

  & ul {
    display: flex;
    justify-items: stretch;
    align-items: stretch;
    color: ${colors.acent};
    gap: 10px;
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    height: auto;
  }
  & li {
    border-radius: 0;
    list-style-type: none;
    text-align: center;
    padding: 20px;
    width: 300px;
    min-width: 300px;
    min-height: 100%;
    padding-top: 30px;
    background-color: ${colors.secondary_tr};
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-3px);
    }

    & .react-icons {
      color: ${colors.acent};
      width: 80px;
      height: 80px;
      margin-bottom: 30px;
    }
    & h3 {
      font-size: 24px;
      color: ${colors.primary};
      border-bottom: 1px solid ${colors.success};
      padding-bottom: 20px;
    }
  }
`;
