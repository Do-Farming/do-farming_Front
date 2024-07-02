import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native'; // styled-components의 ThemeProvider import
import theme from './src/styles/theme'; // styled-components에서 사용할 테마 import

import { useColorScheme } from 'react-native';
import HomeScreen from './src/screens/home/HomeScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import ExampleScreen from './src/screens/ExampleScreen';
import BangSearchScreen from './src/screens/bang/bangSearch/BangSearchScreen';
import BangCreateScreen from './src/screens/bang/bangCreate/BangCreateScreen';
import PedometerScreen from './src/screens/pedometer/PedometerScreen';
import BangDetailScreen from './src/screens/bang/bangDetail/BangDetailScreen';
import BangJoinScreen from './src/screens/bang/bangJoin/BangJoinScreen';
import SignInScreen from './src/screens/sign/SignInScreen';
import SignUpScreen from './src/screens/sign/SignUpScreen';
import MyPageScreen from './src/screens/mypage/MyPageScreen';
import CompetitiveScreen from './src/screens/compation/CompetitiveScreen';
import ProductSignUpScreen from './src/screens/product/ProductSignUpScreen';
import ProductPasswordScreen from './src/screens/product/auth/ProductPasswordScreen';
import ProductSignInScreen from './src/screens/product/complete/ProductSignInScreen';
import WorldCupSelectScreen from './src/screens/worldcup/WorldCupSelectScreen';
import CardWorldCupScreen from './src/screens/worldcup/card/CardWorldCupScreen';
import CardWorldCupWinnnerScreen from './src/screens/worldcup/card/CardWorldCupWinnerScreen';
import GenerateCardScreen from './src/screens/generateCard/GenerateCardScreen';
import QuizScreen from './src/screens/quiz/QuizScreen';
import WorldcupInfoScreen from './src/screens/worldcup/WorldCupInfoScreen';
import WakeupScreen from './src/screens/wakeup/WakeupScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Example') {
            iconName = focused ? 'star' : 'star-outline';
          } else {
            iconName = 'home';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { display: 'flex' },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Do! Farming', headerShown: true }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ title: 'Explore Screen' }}
      />
      <Tab.Screen
        name="Example"
        component={ExampleScreen}
        options={{ title: 'Example Screen' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const scheme = useColorScheme();
  return (
    <StyledComponentsThemeProvider theme={theme}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name=" "
            component={MyTabs}
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
            name="Worldcup"
            component={WorldCupSelectScreen}
            options={{ title: '이상형 월드컵 선택' }}
          />
          <Stack.Screen
            name="TasteWorldCup"
            component={WorldCupSelectScreen}
            options={{ title: '취향 이상형 월드컵' }}
          />
          <Stack.Screen
            name="WorldCupInfo"
            component={WorldcupInfoScreen}
            options={{ title: '이상형 월드컵 소개', headerShown: false }}
          />
          <Stack.Screen
            name="CardWorldCup"
            component={CardWorldCupScreen}
            options={{ title: '카드 이상형 월드컵' }}
          />
          <Stack.Screen
            name="CardWorldCupWinner"
            component={CardWorldCupWinnnerScreen}
            options={{ title: '우승한 카드는?' }}
          />
          <Stack.Screen
            name="GenerateCard"
            component={GenerateCardScreen}
            options={{ title: '나만의 카드 생성' }}
          />
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={{ title: '퀴즈' }}
          />
          <Stack.Screen
            name="WakeUp"
            component={WakeupScreen}
            options={{ title: '기상 미션' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StyledComponentsThemeProvider>
  );
}
