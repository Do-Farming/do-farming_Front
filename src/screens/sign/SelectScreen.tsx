import React from 'react';
import {
  ButtonBox,
  Container,
  MainTitle,
  TitleBox,
} from './SelectScreen.styled';
import { ButtonText, LongButton } from './InputForm.styled';

export default function SelectScreen({ navigation }: any) {
  return (
    <Container>
      <TitleBox>
        <MainTitle>Do! farming</MainTitle>
      </TitleBox>
      <ButtonBox>
        <LongButton onPress={() => navigation.navigate('SignIn')}>
          <ButtonText>로그인</ButtonText>
        </LongButton>
        <LongButton onPress={() => navigation.navigate('SignUp')}>
          <ButtonText>회원가입</ButtonText>
        </LongButton>
      </ButtonBox>
    </Container>
  );
}
