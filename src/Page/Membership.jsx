import React from 'react';
// import member from '../img/preimushchestvo.jpg';
import { MemberDiv } from './Membership.styled';
import { NavLink, Outlet } from 'react-router-dom';

export const Membership = () => {
  return (
    <>
      <MemberDiv>
        <NavLink
          to="membershipReg"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Як вступити в ГФНУ?
        </NavLink>
        <NavLink
          to="qrsecurity"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Навіщо потрібен QR код?
        </NavLink>
      </MemberDiv>
      <Outlet />
    </>
  );
};
