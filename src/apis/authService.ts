import { LoginParams } from '../types/auth/AuthTypes';
import axiosInstance from './axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async ({ phoneNumber, password }: LoginParams) => {
  try {
    const response = await axiosInstance.post(
      'http://172.16.20.74/api/v1/auth/login',
      {
        phoneNumber,
        password,
      },
    );
    if (response.data.result.accessToken && response.data.result.refreshToken) {
      // localStorage.setItem('jwtToken', response.data.result.accessToken);
      // localStorage.setItem('refreshToken', response.data.result.refreshToken);
      await AsyncStorage.setItem('jwtToken', response.data.result.accessToken);
      await AsyncStorage.setItem(
        'refreshToken',
        response.data.result.refreshToken,
      );
    }
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const logout = async ({ navigation }: any) => {
  try {
    await axiosInstance.post('/api/v1/auth/logout');
    // localStorage.removeItem('jwtToken');
    // localStorage.removeItem('refreshToken');
    await AsyncStorage.removeItem('jwtToken');
    await AsyncStorage.removeItem('refreshToken');
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      // window.location.href = '/login';
      navigation.navigate('SignIn');
    } else {
      console.error('Logout failed:', error);
    }
  }
};
