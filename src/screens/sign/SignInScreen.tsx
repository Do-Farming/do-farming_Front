import React, { useState } from 'react';
import {
  ButtonBox,
  ButtonText,
  Container,
  ContentBox,
  GotoInfoText,
  GotoJoinButton,
  GotoJoinText,
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
import { SafeAreaView } from '../home/HomeScreen.styled';

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
    <SafeAreaView>
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
          <GotoJoinButton onPress={() => navigation.navigate('SignUp')}>
            <GotoInfoText>아직 회원이 아니신가요?</GotoInfoText>
            <GotoJoinText>회원가입하기</GotoJoinText>
          </GotoJoinButton>
          <LongButton onPress={handleSubmit}>
            <ButtonText>로그인</ButtonText>
          </LongButton>
        </ButtonBox>
      </Container>
    </SafeAreaView>
  );
}
