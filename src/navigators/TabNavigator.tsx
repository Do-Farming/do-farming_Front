import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/home/HomeScreen';
import HanaMainScreen from '../screens/hana/HanaMainScreen';
import MyPageScreen from '../screens/mypage/MyPageScreen';
import WorldCupInfoScreen from '../screens/worldcup/information/WorldCupInfoScreen';
import ExampleScreen from '../screens/ExampleScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Example') {
            iconName = focused ? 'star' : 'star-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="HanaMain"
        component={HanaMainScreen}
        options={{ title: 'Do! Farming', headerShown: false }}
      />
      <Tab.Screen
        name="DoFarmingMain"
        component={HomeScreen}
        options={{ headerTransparent: true, headerTitle: '' }}
      />
      <Tab.Screen
        name="작업용"
        component={ExampleScreen}
        options={{ headerTransparent: true, headerTitle: '' }}
      />
      <Tab.Screen
        name="이상형 월드컵"
        component={WorldCupInfoScreen}
      />
      <Tab.Screen
        name="마이페이지"
        component={MyPageScreen}
        options={{ headerTransparent: true, headerTitle: '' }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
