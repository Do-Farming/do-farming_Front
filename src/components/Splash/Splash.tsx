import React from 'react';
import { SplashContainer, SplashImage } from './Splash.styled';

const Splash: React.FC = () => {
  return (
    <SplashContainer>
      <SplashImage source={require('../../assets/splash.png')} />
    </SplashContainer>
  );
};
export default Splash;
