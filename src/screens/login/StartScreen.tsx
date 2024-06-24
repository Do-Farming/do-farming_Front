import React from 'react';
import {
  ButtonWrapper,
  Container,
  MainTitle,
  Space,
  TitleWrapper,
} from './StartScreen.styled';
import LongButton from '../../components/LongButton';
import theme from '../../styles/theme';

export default function StartScreen() {
  return (
    <Container>
      <TitleWrapper>
        <Space />
        <MainTitle>Do! farming</MainTitle>
      </TitleWrapper>
      <ButtonWrapper>
        <LongButton text="로그인"></LongButton>
        <LongButton
          text="회원가입"
          backgroundColor={theme.buttonBoldColor}
        ></LongButton>
      </ButtonWrapper>
    </Container>
  );
}
