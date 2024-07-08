import axios from 'axios';
import { resetTokenAndReattemptRequest } from '../utils/tokenService';
import { isExpired } from 'react-jwt';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: 'http://172.16.20.62',
=======
  baseURL: 'http://172.16.20.74',
>>>>>>> b6f58d5484efb72334186d8ca674bc81c03ee9cf
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  async (config) => {
    // const accessToken = localStorage.getItem('jwtToken');
    const accessToken = await AsyncStorage.getItem('jwtToken');
    if (accessToken) {
      if (isExpired(accessToken)) {
        try {
          // const refreshToken = localStorage.getItem('refreshToken');
          const refreshToken = await AsyncStorage.getItem('refreshToken');
          const response = await axios.post(
            `/api/v1/auth/reissue`,
            {},
            {
              headers: {
                'Authorization-refresh': `Bearer ${refreshToken}`,
              },
            },
          );

          const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
            response.data.result;
          // localStorage.setItem('jwtToken', newAccessToken);
          // localStorage.setItem('refreshToken', newRefreshToken);
          await AsyncStorage.setItem('jwtToken', newAccessToken);
          await AsyncStorage.setItem('refreshToken', newRefreshToken);
          config.headers.Authorization = `Bearer ${newAccessToken}`;
        } catch (error) {
          console.error(error);
          // localStorage.clear();
          await AsyncStorage.clear();
          // window.location.replace("/login");
          return config;
        }
      } else {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.data.code === 2002 && !originalRequest._retry) {
      originalRequest._retry = true;
      return resetTokenAndReattemptRequest(error);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
