import React from 'react';
import {
  ButtonBox,
  ButtonText,
  Container,
  ContentBox,
  Input,
  InputBox,
  InputContent,
  InputLabel,
  LongButton,
  Title,
  TitleBox,
} from './InputForm.styled';

export default function SignInScreen() {
  return (
    <Container>
      <ContentBox>
        <TitleBox>
          <Title>로그인</Title>
        </TitleBox>
        <InputBox>
          <InputContent>
            <InputLabel>전화번호</InputLabel>
            <Input placeholder="'-'를 빼고 입력해주세요" />
          </InputContent>
          <InputContent>
            <InputLabel>비밀번호</InputLabel>
            <Input />
          </InputContent>
        </InputBox>
      </ContentBox>
      <ButtonBox>
        <LongButton>
          <ButtonText>로그인</ButtonText>
        </LongButton>
      </ButtonBox>
    </Container>
  );
}
