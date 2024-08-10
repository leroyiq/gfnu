import React from 'react';
import certificate from '../img/sertificat.png';
import idCard from '../img/id_card.png';
import qrCode from '../img/qr.png';
import { DIVHome } from './HomeStyled.styled';
export const Home = () => {
  return (
    <DIVHome>
      <span>
        <img src={certificate} alt="сертифікат" />
        Свідоцтво учасника ГФНУ
      </span>
      <span>
        <img src={idCard} alt="посвідчення" />
        Посвідчення учасника ГФНУ
      </span>
      <span>
        <img src={qrCode} alt="QR-code" />
        Персональний QR-code
      </span>
    </DIVHome>
  );
};
