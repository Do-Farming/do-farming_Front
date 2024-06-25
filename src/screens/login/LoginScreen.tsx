import React from 'react';
import LongButton from '../../components/LongButton';
import {
  ButtonBox,
  Container,
  ContentBox,
  Input,
  InputBox,
  InputContent,
  InputLabel,
  Title,
  TitleBox,
} from './LoginScreen.styled';

export default function LoginScreen() {
  return (
    <Container>
      <ContentBox>
        <TitleBox>
          <Title>로그인</Title>
        </TitleBox>
        <InputBox>
          <InputContent>
            <InputLabel>전화번호</InputLabel>
            <Input placeholder="'-'를 빼고 입력해주세요"></Input>
          </InputContent>
          <InputContent>
            <InputLabel>비밀번호</InputLabel>
            <Input></Input>
          </InputContent>
        </InputBox>
      </ContentBox>
      <ButtonBox>
        <LongButton text="로그인"></LongButton>
      </ButtonBox>
    </Container>
  );
}
