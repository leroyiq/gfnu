import React from 'react';
import { BTN } from './Navigation.styled';
import { DivFooter } from './Footer.styled';

export const Footer = () => {
  return (
    <DivFooter>
      <span>
        Copyright © GFNU | Designed by Onix Groupe - Powered by React{' '}
      </span>
      <BTN>Приєднуйся</BTN>
    </DivFooter>
  );
};
