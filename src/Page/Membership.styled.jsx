import styled from 'styled-components';
import { colors } from 'themes/const';

export const MemberDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  font-size: 16px;
  gap: 20px;

  & a {
    text-decoration: none;
    color: ${colors.acent};

    &.active {
      border-bottom: 2px solid ${colors.acent};
    }
  }

  & ul {
    width: 90%;
    list-style-type: circle;
  }

  & li {
    margin-bottom: 10px;
    font-family: 'Comfortaa', sans-serif;

    line-height: 1.5;

    &.contactsItem {
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
    & .contactIcon {
      width: 30px;
      height: 30px;

      fill: ${colors.acent};
    }
  }

  & span {
    /* text-align: center; */

    font-family: 'Comfortaa', sans-serif;
    margin-left: 10px;
    margin-right: 10px;
    line-height: 1.5;
  }

  & p {
    width: 90%;
    /* text-align: justify; */
    font-size: 14px;
    font-family: 'Comfortaa', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 10px;
    line-height: 1.5;
  }
`;
