import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import HanaMainScreen from '../screens/hana/HanaMainScreen';
import MyPageScreen from '../screens/mypage/MyPageScreen';
import WorldCupInfoScreen from '../screens/worldcup/information/WorldCupInfoScreen';
import ExampleScreen from '../screens/ExampleScreen';

import {
  HomeIcon,
  HomeIconActive,
  IdealIcon,
  IdealIconActive,
  MypageIcon,
  MypageIconActive,
} from '../assets/icons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DoFarmingMain"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeIconActive width={'32px'} height={'32px'} />
            ) : (
              <HomeIcon width={'32px'} height={'32px'} />
            ),
        }}
      />
      <Tab.Screen name="작업용" component={ExampleScreen} />
      <Tab.Screen
        name="이상형 월드컵"
        component={WorldCupInfoScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IdealIconActive width={'32px'} height={'32px'} />
            ) : (
              <IdealIcon width={'32px'} height={'32px'} />
            ),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MyPageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MypageIconActive width={'32px'} height={'32px'} />
            ) : (
              <MypageIcon width={'32px'} height={'32px'} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
