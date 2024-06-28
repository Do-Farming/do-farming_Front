// ProductSignInScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  GreenCheckContainer,
  ButtonContainer,
  ButtonText,
  SubHeader,
  ButtonT,
} from './ProductSignInScreen.styled';
import { GreenCheckIcon } from '../../../assets';

const ProductSignInScreen = ({ navigation }: any) => {
  return (
    <Container>
      <Header>축하드립니다!</Header>
      <GreenCheckContainer>
        <GreenCheckIcon />
      </GreenCheckContainer>
      <SubHeader>상품가입이 완료되었습니다!</SubHeader>
      <ButtonContainer onPress={() => navigation.navigate('StartScreen')}>
        {/* TODO: 상품추천 페이지 만들고 적절한 경로로 변경 */}
        <Text>다른 상품을 찾아볼까요?</Text>
        <ButtonT>
          <ButtonText>다른 상품 알아보기</ButtonText>
        </ButtonT>
      </ButtonContainer>
    </Container>
  );
};

export default ProductSignInScreen;
