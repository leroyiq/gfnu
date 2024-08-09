import React from 'react';
import logo from '../img/logo.png';
import {
  BTN,
  DIVLOGO,
  DIVNAV,
  NAV,
  NavLinkStyled,
  UL,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <NAV>
      <DIVNAV>
        <DIVLOGO>
          <img src={logo} alt="Logo" />
          <span>ГІЛЬДІЯ ФАХІВЦІВ З НЕРУХОМОСТІ УКРАЇНИ</span>
        </DIVLOGO>
        {/* <BTN>Заявка на вступ</BTN> */}
      </DIVNAV>
      <UL>
        <NavLinkStyled
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Домашня
        </NavLinkStyled>
        <NavLinkStyled
          to="/news"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Новини
        </NavLinkStyled>
        <NavLinkStyled
          to="/membership"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Членство ГФНУ
        </NavLinkStyled>
        <NavLinkStyled
          to="/contacts"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Контакти
        </NavLinkStyled>
        <NavLinkStyled
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Про Нас
        </NavLinkStyled>
      </UL>
    </NAV>
  );
};
