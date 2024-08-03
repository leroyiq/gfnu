import styled from 'styled-components';
import { colors } from 'themes/const';

export const DIVLOGO = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 115px;
  border-color: transparent;
  border-bottom: 1px solid ${colors.lightGray};

  & img {
    margin-right: 20px;
    width: 50px;
  }
  & span {
    font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
    font-size: 35px;
    letter-spacing: 0px;
    color: ${colors.primary};
    text-shadow: #2e2e2e 0 4px 5px;

    font-weight: normal;
    text-decoration: none;
    font-style: normal;
    text-transform: none;
    transition: all 0.6s ease;

    &:hover {
      color: ${colors.acent};
    }
  }
`;

export const UL = styled.ul`
  display: flex;
  align-items: center;
  color: ${colors.primary};
  list-style: none;
  gap: 30px;

  padding-top: 20px;

  & li {
    transition: all 0.6s ease;
    padding: 1em 1.5em;
    border-radius: 5px;
  }

  & li:hover {
    background-color: ${colors.lightGray};
    color: ${colors.acent};
  }
`;

export const NAV = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Comfortaa', sans-serif;
  font-optical-sizing: auto;
  border-color: transparent;
  color: ${colors.primary};
`;

export const BTN = styled.button`
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: ${colors.fluid};
  cursor: pointer;

  font-size: 18px;
  font-family: 'Comfortaa', sans-serif;
  margin: 0 20px;
  color: ${colors.primary};
  transition: all 0.6s ease;

  &:hover {
    background-color: ${colors.lightGray};
    color: ${colors.acent};
  }

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 3px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }
  &::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: ${colors.acent};
    border-right-color: ${colors.acent};
  }
  &::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: ${colors.acent};
    border-left-color: ${colors.acent};
  }
  &:hover:after,
  &:hover:before {
    width: 100%;
    height: 100%;
  }
`;

export const DIVNAV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
