// ProductSignInScreen.tsx
import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  Header,
  GreenCheckContainer,
  ButtonContainer,
  ButtonText,
  SubHeader,
  ButtonT,
} from '../../screens/product/complete/ProductSignInScreen.styled';

import { CancelIcon, GreenCheckIcon } from '../../assets';

export const SendSucessScreen = ({ navigation, route }: any) => {
  return (
    <Container>
      <Header>
        이체에 성공했습니다.
      </Header>
      <GreenCheckContainer>
        <GreenCheckIcon />
      </GreenCheckContainer>
      <SubHeader>계좌이체에 성공했습니다.</SubHeader>
      <ButtonContainer onPress={() => navigation.navigate('HanaMain')}>
        <ButtonT>
          <ButtonText>메인으로 돌아가기</ButtonText>
        </ButtonT>
      </ButtonContainer>
    </Container>
  );
};
