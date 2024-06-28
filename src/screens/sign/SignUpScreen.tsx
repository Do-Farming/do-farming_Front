import React from 'react';
import LongButton from '../../components/LongButton';
import {
  ButtonBox,
  Button,
  Container,
  ContentBox,
  Input,
  InputBox,
  InputContent,
  InputLabel,
  NonContainLabelBox,
  Title,
  TitleBox,
  ButtonText,
} from './InputForm.styled';

export default function SignUpScreen() {
  return (
    <Container>
      <ContentBox>
        <TitleBox>
          <Title>회원가입</Title>
        </TitleBox>
        <InputBox>
          <InputContent>
            <InputLabel>이름</InputLabel>
            <Input />
          </InputContent>
          <InputContent>
            <InputLabel>비밀번호</InputLabel>
            <Input />
          </InputContent>
          <InputContent>
            <InputLabel>주민번호</InputLabel>
            <NonContainLabelBox>
              <Input width="48%" />
              <Input width="48%" />
            </NonContainLabelBox>
          </InputContent>
          <InputContent>
            <InputLabel>번호</InputLabel>
            <NonContainLabelBox>
              <Input width="74%" />
              <Button width="22%">
                <ButtonText>확인</ButtonText>
              </Button>
            </NonContainLabelBox>
          </InputContent>
          <InputContent>
            <InputLabel>인증코드</InputLabel>
            <NonContainLabelBox>
              <Input width="74%" />
              <Button width="22%">
                <ButtonText>확인</ButtonText>
              </Button>
            </NonContainLabelBox>
          </InputContent>
        </InputBox>
      </ContentBox>
      <ButtonBox>
        <LongButton text="로그인"></LongButton>
      </ButtonBox>
    </Container>
  );
}
