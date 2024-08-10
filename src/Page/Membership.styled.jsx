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
  }

  & li {
    margin-bottom: 10px;
    font-family: 'Comfortaa', sans-serif;

    line-height: 20px;

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
    border: 1px solid ${colors.acentry};
    font-weight: bold;
    color: ${colors.warning};
    font-size: 16px;
    text-align: center;
    padding: 5px 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-left: 10px;
    margin-right: 10px;
  }

  & p {
    width: 90%;
    /* text-align: justify; */
    font-size: 14px;
    font-family: 'Comfortaa', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 10px;
  }
`;
