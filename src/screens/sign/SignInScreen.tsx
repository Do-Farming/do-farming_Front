import React, { useState } from 'react';
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
import { login } from '../../apis/authService';
import { useAuth } from '../../contexts/authContext';

export default function SignInScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLogin } = useAuth();

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    // console.log('phoneNumber:', phoneNumber, 'password:', password);
    try {
      const response = await login({ phoneNumber, password });
      // Handle successful login if needed, e.g., redirect to another page
      setIsLogin(true);
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container>
      <ContentBox>
        <TitleBox>
          <Title>로그인</Title>
        </TitleBox>
        <InputBox>
          <InputContent>
            <InputLabel>전화번호</InputLabel>
            <Input
              placeholder="'-'를 빼고 입력해주세요"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
            />
          </InputContent>
          <InputContent>
            <InputLabel>비밀번호</InputLabel>
            <Input
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry
            />
          </InputContent>
        </InputBox>
      </ContentBox>
      <ButtonBox>
        <LongButton onPress={handleSubmit}>
          <ButtonText>로그인</ButtonText>
        </LongButton>
      </ButtonBox>
    </Container>
  );
}
