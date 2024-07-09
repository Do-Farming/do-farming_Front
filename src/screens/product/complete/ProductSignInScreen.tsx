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
  HomeButton,
} from './ProductSignInScreen.styled';
import { CancelIcon, GreenCheckIcon } from '../../../assets';

const ProductSignInScreen = ({ navigation, route }: any) => {
  const { resMsg } = route.params || {};
  const message = resMsg?.message || '가입이 완료되었습니다!';
  return (
    <Container>
      <Header>
        {resMsg?.message ? '가입에 실패했습니다..' : '축하드립니다!'}
      </Header>
      <GreenCheckContainer>
        {resMsg?.message ? <CancelIcon /> : <GreenCheckIcon />}
      </GreenCheckContainer>
      <SubHeader>{message}</SubHeader>
      <ButtonContainer>
        <Text>홈화면으로 이동할까요?</Text>
        <HomeButton onPress={() => navigation.navigate('HanaMain')}>
          <ButtonText>홈 화면으로 이동하기</ButtonText>
        </HomeButton>
      </ButtonContainer>
    </Container>
  );
};

export default ProductSignInScreen;
