import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/home/HomeScreen';
import HanaMainScreen from '../screens/hana/HanaMainScreen';
import MyPageScreen from '../screens/mypage/MyPageScreen';
import WorldCupInfoScreen from '../screens/worldcup/information/WorldCupInfoScreen';
import ExampleScreen from '../screens/ExampleScreen';

import FightIcon from 'react-native-vector-icons/MaterialIcons';
import PersonIcon from 'react-native-vector-icons/Octicons';
import HomeIcon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HanaMain"
        component={HanaMainScreen}
        options={{
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <HomeIcon name="home" size={30} color={'red'} />
          ),
        }}
      />
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              name="home"
              size={30}
              color={focused ? '#1b1b1b' : '#535353'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="작업용"
        component={ExampleScreen}
        options={{
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <HomeIcon name="home" size={30} color={'red'} />
          ),
        }}
      />
      <Tab.Screen
        name="이상형 월드컵"
        component={WorldCupInfoScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FightIcon
              name="sports-mma"
              size={32}
              color={focused ? '#1b1b1b' : '#535353'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MyPageScreen}
        options={{
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <PersonIcon
              name="person-fill"
              size={30}
              color={focused ? '#1b1b1b' : '#535353'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
