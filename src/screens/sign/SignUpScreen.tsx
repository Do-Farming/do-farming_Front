import React, { useState, useEffect, useRef } from 'react';
import { Platform, Alert } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import axiosInstance from '../../apis/axiosInstance';
import { ApiResponse, SignUpRequest } from '../../types';
import { certificate, sendSms } from '../../apis/authService';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function SignUpScreen({ navigation }: any) {
  const [isSended, setIsSended] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [identificationNumberFront, setIdentificationNumberFront] =
    useState('');
  const [identificationNumberBack, setIdentificationNumberBack] = useState('');
  const [certCode, setCertCode] = useState('');
  const [expoPushToken, setExpoPushToken] = useState<string>('');

  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token ?? ''),
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      if (notificationListener.current && responseListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current,
        );
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  const handleSignUp = async () => {
    const identificationNumber = `${identificationNumberFront}${identificationNumberBack}`;
    const signUpData: SignUpRequest = {
      name,
      password,
      phoneNumber,
      identificationNumber,
      deviceId: expoPushToken,
    };

    try {
      const response = await axiosInstance.post<ApiResponse<string>>(
        '/api/v1/customer/signup',
        signUpData,
      );

      if (response.data.isSuccess) {
        await AsyncStorage.setItem('expoPushToken', expoPushToken);
        sendPushTokenToServer(expoPushToken);
        Alert.alert('회원가입 성공', '회원가입이 성공적으로 완료되었습니다.');
        navigation.navigate('HanaMain');
      } else {
        Alert.alert('회원가입 실패', response.data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('회원가입 실패', '회원가입 중 오류가 발생했습니다.');
    }
  };

  const handleSmsButtonClick = async () => {
    try {
      const response = await sendSms(phoneNumber);
      if (response.isSuccess) {
        setIsSended(true);
        Alert.alert(
          '인증문자 발송',
          '입력하신 번호로 인증번호가 전송되었습니다.',
        );
      } else {
        Alert.alert(
          '인증문자 발송 실패',
          '문자 전송에 실패하였습니다. 올바른 값을 입력해주세요.',
        );
      }
    } catch (error) {
      console.error('SMS 전송 실패 : ', error);
      Alert.alert('SMS 전송 실패', '문자 전송 중 오류가 발생했습니다.');
    }
  };

  const handleCertButtonClick = async () => {
    try {
      const certInfo = { phoneNumber, certCode };
      const response = await certificate(certInfo);
      if (response.isSuccess) {
        Alert.alert('인증 성공', '본인인증에 성공하였습니다.');
        // 인증 성공 후 추가 작업이 필요하면 여기에 추가
      } else {
        Alert.alert('인증 실패', '본인 인증이 되지 않았습니다.');
      }
    } catch (error) {
      console.error('인증 전송 실패 : ', error);
      Alert.alert('인증 전송 실패', '인증 중 오류가 발생했습니다.');
    }
  };

  const sendPushTokenToServer = async (token: string) => {
    try {
      await axiosInstance.post('/register-token', { token });
      console.log('Token sent to server!');
    } catch (err) {
      console.log(err);
    }
  };

  const registerForPushNotificationsAsync = async (): Promise<
    string | undefined
  > => {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  };

  return (
    <Container>
      <ContentBox>
        <TitleBox>
          <Title>회원가입</Title>
        </TitleBox>
        <InputBox>
          <InputContent>
            <InputLabel>이름</InputLabel>
            <Input placeholder="홍길동" value={name} onChangeText={setName} />
          </InputContent>
          <InputContent>
            <InputLabel>비밀번호</InputLabel>
            <Input
              placeholder="대/소문자 구분 6자리 이상"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </InputContent>
          <InputContent>
            <InputLabel>주민번호</InputLabel>
            <NonContainLabelBox>
              <MediumInput
                placeholder="010203"
                value={identificationNumberFront}
                onChangeText={setIdentificationNumberFront}
              />
              <Slash />
              <MediumInput
                placeholder="*******"
                secureTextEntry
                value={identificationNumberBack}
                onChangeText={setIdentificationNumberBack}
              />
            </NonContainLabelBox>
          </InputContent>
          <InputContent>
            <InputLabel>전화번호</InputLabel>
            <NonContainLabelBox>
              <LongInput
                placeholder="'-'를 빼고 입력해주세요"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
              <Button onPress={handleSmsButtonClick}>
                <ButtonText>전송</ButtonText>
              </Button>
            </NonContainLabelBox>
          </InputContent>
          {isSended && (
            <InputContent>
              <InputLabel>인증코드</InputLabel>
              <NonContainLabelBox>
                <LongInput
                  placeholder="1234"
                  value={certCode}
                  onChangeText={setCertCode}
                />
                <Button onPress={handleCertButtonClick}>
                  <ButtonText>확인</ButtonText>
                </Button>
              </NonContainLabelBox>
            </InputContent>
          )}
        </InputBox>
      </ContentBox>
      <ButtonBox>
        <LongButton onPress={handleSignUp}>
          <ButtonText>회원가입</ButtonText>
        </LongButton>
      </ButtonBox>
    </Container>
  );
}
