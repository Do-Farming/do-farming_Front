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
      <ButtonContainer
        onPress={() => navigation.navigate('Tabs', { screen: 'DofarmingMain' })}
      >
        <Text>홈화면으로 이동할까요?</Text>
        <ButtonT>
          <ButtonText>홈 화면으로 이동하기</ButtonText>
        </ButtonT>
      </ButtonContainer>
    </Container>
  );
};

export default ProductSignInScreen;
