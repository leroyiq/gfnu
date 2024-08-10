import React, { useState } from 'react';
import logo from '../img/logo.png';

import {
  BTN,
  BtnMenu,
  DIVLOGO,
  DIVNAV,
  NAV,
  NavLinkStyled,
  UL,
} from './Navigation.styled';
import { MobMenu } from './MobMenu';
import { VscMenu } from 'react-icons/vsc';

export const Navigation = () => {
  const [mob, setMob] = useState(false);
  const toggleMobMenu = () => setMob(!mob);

  return (
    <NAV>
      <DIVNAV>
        <DIVLOGO>
          <img src={logo} alt="Logo" />
          <span>ГІЛЬДІЯ ФАХІВЦІВ З НЕРУХОМОСТІ УКРАЇНИ</span>
        </DIVLOGO>
        <BTN>Заявка на вступ</BTN>
        <BtnMenu className="menu" onClick={toggleMobMenu}>
          <VscMenu />
        </BtnMenu>
        {mob && <MobMenu close={toggleMobMenu} />}
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
