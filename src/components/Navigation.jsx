import React from 'react';
import logo from '../img/logo.png';
import { BTN, DIVLOGO, DIVNAV, NAV, UL } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NAV>
      <DIVNAV>
        <DIVLOGO>
          <img src={logo} alt="Logo" />
          <span>ГІЛЬДІЯ ФАХІВЦІВ З НЕРУХОМОСТІ УКРАЇНИ</span>
        </DIVLOGO>

        <UL>
          <li>Домашня</li>
          <li>Новини</li>
          <li>Членство ГФНУ</li>
          <li>Контакти</li>
          <li>Про Нас</li>
        </UL>
      </DIVNAV>

      <BTN>Заявка на вступ</BTN>
    </NAV>
  );
};
