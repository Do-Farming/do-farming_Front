import React from 'react';
import {
  ButtonBox,
  Container,
  MainTitle,
  TitleBox,
} from './StartScreen.styled';
import LongButton from '../../components/LongButton';
import theme from '../../styles/theme';

export default function StartScreen({ navigation }: any) {
  return (
    <Container>
      <TitleBox>
        <MainTitle>Do! farming</MainTitle>
      </TitleBox>
      <ButtonBox>
        <LongButton
          text="회원가입"
          backgroundColor={theme.buttonBoldColor}
          onPress={() => navigation.navigate('Login')}
        ></LongButton>
        <LongButton
          text="로그인"
          onPress={() => navigation.navigate('Login')}
        ></LongButton>
      </ButtonBox>
    </Container>
  );
}
