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
  MediumInput,
  Slash,
  LongInput,
} from './InputForm.styled';

export default function SignUpScreen({ navigation } : any) {
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
            <Input placeholder="홍길동" />
          </InputContent>
          <InputContent>
            <InputLabel>비밀번호</InputLabel>
            <Input placeholder="대/소문자 구분 6자리 이상" secureTextEntry />
          </InputContent>
          <InputContent>
            <InputLabel>주민번호</InputLabel>
            <NonContainLabelBox>
              <MediumInput placeholder="010203" />
              <Slash />
              <MediumInput placeholder="*******" secureTextEntry />
            </NonContainLabelBox>
          </InputContent>
          <InputContent>
            <InputLabel>번호</InputLabel>
            <NonContainLabelBox>
              <LongInput placeholder="'-'를 빼고 입력해주세요" />
              <Button
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
                <LongInput placeholder="1234" />
                <Button>
                  <ButtonText>확인</ButtonText>
                </Button>
              </NonContainLabelBox>
            </InputContent>
          )}
        </InputBox>
      </ContentBox>
      <ButtonBox>
        <LongButton onPress={() => navigation.navigate('HanaMain')}>
          <ButtonText>회원가입</ButtonText>
        </LongButton>
      </ButtonBox>
    </Container>
  );
}
