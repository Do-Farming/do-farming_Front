import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { signOut } from '../states/authState';

export const getAccessToken = async () => {
  // return localStorage.getItem('jwtToken');
  return await AsyncStorage.getItem('jwtToken');
};

export const resetTokenAndReattemptRequest = async (error: any) => {
  try {
    // const refreshToken = localStorage.getItem('refreshToken');
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (!refreshToken) {
      // signOut();
      return Promise.reject(error);
    }

    // 리프레시 토큰을 사용하여 새로운 액세스 토큰을 요청
    const response = await axios.post(
      // `${process.env.REACT_APP_BASE_URL}/reissue`,
      '/api/v1/auth/reissue',
      {},
      {
        headers: {
          'Authorization-Refresh': `Bearer ${refreshToken}`, // 리프레시 토큰을 Authorization-refresh 헤더에 추가
        },
      },
    );
    const { accessToken } = response.data;
    // localStorage.setItem('jwtToken', accessToken);
    await AsyncStorage.setItem('jwtToken', accessToken);

    error.response.config.headers.Authorization = `Bearer ${accessToken}`;
    return axios(error.response.config);
  } catch (err) {
    // signOut();
    return Promise.reject(err);
  }
};
