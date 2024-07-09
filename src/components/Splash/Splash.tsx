import React from 'react';
import {
  SplashContainer,
  SplashLogoContainer,
} from './Splash.styled';
import { DoFarmingIcon, Promote, SplashLogo } from '../../assets';

const Splash: React.FC = () => {
  return (
    <SplashContainer>
      <DoFarmingIcon width={"80%"} height={200}/>
      <Promote />
      <SplashLogoContainer>
        <SplashLogo />
      </SplashLogoContainer>
    </SplashContainer>
  );
};
export default Splash;
