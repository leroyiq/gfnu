import React from 'react';
import fresca2 from '../img/freska2.png';
import { DivAdv } from './Advantages.styled';
import { IoFingerPrint } from 'react-icons/io5';
import { MdSupportAgent } from 'react-icons/md';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiPodiumWinner } from 'react-icons/gi';

export const Advantages = () => {
  return (
    <DivAdv>
      <h2>Переваги бути з нами</h2>
      <img src={fresca2} alt="fresca" />

      <ul>
        <li>
          <IoFingerPrint className="react-icons" />
          <h3>Безпека</h3>
          <span>Lorem ipsum dolor sit amet.</span>
        </li>
        <li>
          <MdSupportAgent className="react-icons" />
          <h3>Підтримка</h3>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li>
          <FaPeopleGroup className="react-icons" />
          <h3>Реферальна програма</h3>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li>
          <GiPodiumWinner className="react-icons" />
          <h3>Визнання</h3>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
        </li>
      </ul>
    </DivAdv>
  );
};
