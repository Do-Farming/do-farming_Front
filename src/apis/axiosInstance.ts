import axios from 'axios';
import { resetTokenAndReattemptRequest } from '../utils/tokenService';
import { isExpired } from 'react-jwt';

const axiosInstance = axios.create({
  baseURL: 'http://localhost',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('jwtToken');
    if (accessToken) {
      if (isExpired(accessToken)) {
        try {
          const refreshToken = localStorage.getItem('refreshToken');
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
          localStorage.setItem('jwtToken', newAccessToken);
          localStorage.setItem('refreshToken', newRefreshToken);
          config.headers.Authorization = `Bearer ${newAccessToken}`;
        } catch (error) {
          console.error(error);
          localStorage.clear();
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
