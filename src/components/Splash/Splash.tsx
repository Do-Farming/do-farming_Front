import React from 'react';
import {
  SplashContainer,
  SplashImage,
  SplashLogoContainer,
} from './Splash.styled';
import { Promote, SplashLogo } from '../../assets';

const Splash: React.FC = () => {
  return (
    <SplashContainer>
      <SplashImage source={require('../../assets/splash.png')} />
      <Promote />
      <SplashLogoContainer>
        <SplashLogo />
      </SplashLogoContainer>
    </SplashContainer>
  );
};
export default Splash;
