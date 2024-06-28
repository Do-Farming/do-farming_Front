import React, { useState } from 'react';
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
  LongButton,
} from './InputForm.styled';

export default function SignUpScreen() {
  const [isSended, setIsSended] = useState(false);

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
              <Button
                width="22%"
                onPress={() => {
                  setIsSended(true);
                }}
              >
                <ButtonText>전송</ButtonText>
              </Button>
            </NonContainLabelBox>
          </InputContent>
          {isSended && (
            <InputContent>
              <InputLabel>인증코드</InputLabel>
              <NonContainLabelBox>
                <Input width="74%" />
                <Button width="22%">
                  <ButtonText>확인</ButtonText>
                </Button>
              </NonContainLabelBox>
            </InputContent>
          )}
        </InputBox>
      </ContentBox>
      <ButtonBox>
        <LongButton>
          <ButtonText>회원가입</ButtonText>
        </LongButton>
      </ButtonBox>
    </Container>
  );
}
