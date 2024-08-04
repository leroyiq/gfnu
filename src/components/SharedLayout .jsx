import { Footer, Navigation, SliderMain } from 'components';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { DivSlider } from './SliderMain.styled';

export const SharedLayout = () => {
  return (
    <>
      <DivSlider>
        <Navigation />
        <SliderMain />
      </DivSlider>
      <Outlet />
      <Footer />
    </>
  );
};
