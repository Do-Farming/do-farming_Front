import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/sign/SignInScreen';
import SignUpScreen from '../screens/sign/SignUpScreen';
import MyPageScreen from '../screens/mypage/MyPageScreen';
import BangSearchScreen from '../screens/bang/bangSearch/BangSearchScreen';
import BangDetailScreen from '../screens/bang/bangDetail/BangDetailScreen';
import BangCreateScreen from '../screens/bang/bangCreate/BangCreateScreen';
import PedometerScreen from '../screens/pedometer/PedometerScreen';
import BangJoinScreen from '../screens/bang/bangJoin/BangJoinScreen';
import CompetitiveScreen from '../screens/compation/CompetitiveScreen';
import ProductSignUpScreen from '../screens/product/ProductSignUpScreen';
import ProductPasswordScreen from '../screens/product/auth/ProductPasswordScreen';
import ProductSignInScreen from '../screens/product/complete/ProductSignInScreen';
import HanaMain from '../screens/hana/HanaMainScreen';
import { SendMoneyScreen } from '../screens/bankingService/SendMoneyScreen';
import WorldCupSelectScreen from '../screens/worldcup/WorldCupSelectScreen';
import WorldcupInfoScreen from '../screens/worldcup/WorldCupInfoScreen';
import CardWorldCupScreen from '../screens/worldcup/card/CardWorldCupScreen';
import CardWorldCupWinnnerScreen from '../screens/worldcup/card/CardWorldCupWinnerScreen';
import GenerateCardScreen from '../screens/generateCard/GenerateCardScreen';
import QuizScreen from '../screens/quiz/QuizScreen';
import ImageCreationScreen from '../screens/imageCreation/ImageCreationScreen';
import ChatBotScreen from '../screens/chatbot/ChatBotScreen';
import DoFarmingInfoScreen from '../screens/product/dofarming/DoFarmingInfoScreen';
import WakeupScreen from '../screens/wakeup/wakeup/WakeupScreen';
import CameraScreen from '../screens/wakeup/camera/CameraScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: '로그인' }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: '회원가입' }}
      />
      <Stack.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{ title: '마이페이지' }}
      />
      <Stack.Screen
        name="BangSearch"
        component={BangSearchScreen}
        options={{ title: '방 찾기' }}
      />
      <Stack.Screen
        name="BangDetail"
        component={BangDetailScreen}
        options={{ title: '방 상세' }}
      />
      <Stack.Screen
        name="BangCreate"
        component={BangCreateScreen}
        options={{ title: '방 만들기' }}
      />
      <Stack.Screen
        name="Pedometer"
        component={PedometerScreen}
        options={{ title: 'Pedometer' }}
      />
      <Stack.Screen
        name="BangJoin"
        component={BangJoinScreen}
        options={{ title: '도파밍 상품 가입' }}
      />
      <Stack.Screen
        name="Competitive"
        component={CompetitiveScreen}
        options={{ title: 'Competitive' }}
      />
      <Stack.Screen
        name="ProductSignUp"
        component={ProductSignUpScreen}
        options={{ title: '입출금' }}
      />
      <Stack.Screen
        name="ProductPassword"
        component={ProductPasswordScreen}
        options={{ title: '계좌 비밀번호' }}
      />
      <Stack.Screen
        name="ProductSignIn"
        component={ProductSignInScreen}
        options={{ title: '가입완료' }}
      />
      <Stack.Screen
        name="HanaMain"
        component={HanaMain}
        options={{ title: '하나은행 메인화면' }}
      />
      <Stack.Screen
        name="SendMoney"
        component={SendMoneyScreen}
        options={{
          title: '송금',
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="WorldCup"
        component={WorldCupSelectScreen}
        options={{
          title: '이상형 월드컵 선택',
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="TasteWorldCup"
        component={WorldCupSelectScreen}
        options={{ headerTransparent: false, headerTitle: '' }}
      />
      <Stack.Screen
        name="WorldCupInfo"
        component={WorldcupInfoScreen}
        options={{
          title: '이상형 월드컵 소개',
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="CardWorldCup"
        component={CardWorldCupScreen}
        options={{ title: '카드 이상형 월드컵' }}
      />
      <Stack.Screen
        name="CardWorldCupWinner"
        component={CardWorldCupWinnnerScreen}
        options={{ headerTransparent: true, headerTitle: ''  }}
      />
      <Stack.Screen
        name="GenerateCard"
        component={GenerateCardScreen}
        options={{ headerTransparent: true, headerTitle: '' }}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ title: '퀴즈' }}
      />
      <Stack.Screen
        name="ImageCreation"
        component={ImageCreationScreen}
        options={{ title: '이미지 생성' }}
      />
      <Stack.Screen
        name="ChatBot"
        component={ChatBotScreen}
        options={{ title: '챗봇 스크린' }}
      />
      <Stack.Screen
        name="DoFarmingInfo"
        component={DoFarmingInfoScreen}
        options={{ headerTransparent: true, headerTitle: '' }}
      />
      <Stack.Screen
        name="WakeUp"
        component={WakeupScreen}
        options={{ title: '기상 미션' }}
      />
      <Stack.Screen
        name="WakeUpCamera"
        component={CameraScreen}
        options={{ title: '기상 인증하기' }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
