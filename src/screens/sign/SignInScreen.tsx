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
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen() {
  const navigation = useNavigation<any>();
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
    try {
      const response = await login({ phoneNumber, password });
      if (response.isSuccess) {
        setIsLogin(true);
        navigation.navigate('HanaMain');
      } else {
        console.log('Login failed');
      }
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
        <Button
          title="회원가입 페이지로"
          onPress={() => navigation.navigate('SignUp')}
        />
      </ButtonBox>
    </Container>
  );
}
