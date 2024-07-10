// ProductSignInScreen.tsx
import React from 'react';
import {
  Container,
  Header,
  GreenCheckContainer,
  ButtonContainer,
  ButtonText,
  SubHeader,
} from '../../screens/product/complete/ProductSignInScreen.styled';

import { CancelIcon, GreenCheckIcon } from '../../assets';
import { Button } from './SendMoneyScreen.styled';

export const SendSucessScreen = ({ navigation, route }: any) => {
  return (
    <Container>
      <Header>이체에 성공했습니다.</Header>
      <GreenCheckContainer>
        <GreenCheckIcon />
      </GreenCheckContainer>
      <SubHeader>계좌이체에 성공했습니다.</SubHeader>
      <ButtonContainer>
        <Button onPress={() => navigation.navigate('HanaMain')}>
          <ButtonText>메인으로 돌아가기</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};
