import styled from 'styled-components';
import { colors } from 'themes/const';

export const MemberForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 20px;

  max-width: 400px;
  background-color: ${colors.dark};
  padding: 20px 15px;

  & img {
    display: block;
    width: 300px;
    height: auto;
    object-fit: cover;
    align-self: center;
  }

  & label {
    display: flex;
    text-align: left;
    justify-content: space-between;
    font-size: 14px;

    & input {
      text-align: center;
      color: ${colors.acent};
      font-size: 12px;
      background-color: ${colors.darkGray};

      &.active {
        color: ${colors.success};
      }
    }
  }
`;

export const MemberDiv = styled.div`
  display: flex;
  width: auto;
  /* margin: 0 auto; */
`;
