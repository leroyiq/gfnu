import React from 'react';
import futuresPic from '../img/preimushchestvo.jpg';
import fresca2 from '../img/freska2.png';
import { DF, DF_TEXT } from './Futures.styled';

export const Futures = () => {
  return (
    <DF>
      <img src={futuresPic} alt="futures" />
      <DF_TEXT>
        <h2>Що вам дає членство ГФНУ?</h2>
        <img src={fresca2} alt="fresca" />
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
        </ul>
      </DF_TEXT>
    </DF>
  );
};
