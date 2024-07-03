import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import { AuthProvider } from './src/contexts/authContext';
import StackNavigator from './src/navigators/StackNavigator';
import theme from './src/styles/theme';
import { useColorScheme } from 'react-native';

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
