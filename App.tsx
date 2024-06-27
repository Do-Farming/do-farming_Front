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
import StartScreen from './src/screens/login/StartScreen';
import BangCreateScreen from './src/screens/bang/bangCreate/BangCreateScreen';
import PedometerScreen from './src/screens/pedometer/PedometerScreen';
import BangDetailScreen from './src/screens/bang/bangDetail/BangDetailScreen';
import BangJoinScreen from './src/screens/bang/bangJoin/BangJoinScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import SignupScreen from './src/screens/login/SignupScreen';
import MyPageScreen from './src/screens/mypage/MyPageScreen';
import CompetitiveScreen from './src/screens/compation/CompetitiveScreen';

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
        options={{ title: 'Home Screen', headerShown: false }}
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
            name="Start"
            component={StartScreen}
            options={{ title: '시작 화면' }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: '로그인' }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
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
        </Stack.Navigator>
      </NavigationContainer>
    </StyledComponentsThemeProvider>
  );
}
