import React, { useEffect, useRef, useState } from 'react';
import { Button, Platform, StyleSheet, Text, View, useColorScheme } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Subscription } from 'expo-modules-core';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import { AuthProvider } from './src/contexts/authContext';
import StackNavigator from './src/navigators/StackNavigator';
import theme from './src/styles/theme';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

const Progress = () => {
    const [expoPushToken, setExpoPushToken] = useState<string | undefined>('');
    const [notification, setNotification] = useState<Notifications.Notification>();
    const notificationListener = useRef<Subscription>();
    const responseListener = useRef<Subscription>();

    useEffect(() => {
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            if (typeof notificationListener.current !== 'undefined' && typeof responseListener.current !== 'undefined') {
                Notifications.removeNotificationSubscription(notificationListener.current);
                Notifications.removeNotificationSubscription(responseListener.current);
            }
        };
    }, []);

    return (
        <></>
    );
};

export default function App() {
    const scheme = useColorScheme();
    const [isToken, setIsToken] = useState(false);

    useEffect(() => {
        const getTokenAndSendToServer = async () => {
            if (!isToken) {
                const token = await registerForPushNotificationsAsync();
                if (token) {
                    await AsyncStorage.setItem('expoPushToken', token);
                    sendPushTokenToServer(token);
                    setIsToken(true);
                }
            } else {
                setIsToken(true);
            }
        };

        getTokenAndSendToServer();
    }, []);

    return (
        <AuthProvider>
            <StyledComponentsThemeProvider theme={theme}>
                <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
                    <StackNavigator />
                </NavigationContainer>
            </StyledComponentsThemeProvider>
        </AuthProvider>
    );
}

const sendPushTokenToServer = async (token: string) => {
    try {
        await fetch('http://172.16.20.55/register-token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });
        console.log('Token sent to server!');
    } catch (err) {
        console.log(err);
    }
};
async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
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
}
