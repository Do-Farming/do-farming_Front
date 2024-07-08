import React from 'react';
import { Platform, useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import { AuthProvider } from './src/contexts/authContext';
import StackNavigator from './src/navigators/StackNavigator';
import theme from './src/styles/theme';

export default function App() {
  const scheme = useColorScheme();

  return (
    <AuthProvider>
      <StyledComponentsThemeProvider theme={theme}>
        <NavigationContainer
          theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <StackNavigator />
        </NavigationContainer>
      </StyledComponentsThemeProvider>
    </AuthProvider>
  );
}
