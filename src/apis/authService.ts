import axiosInstance from './axiosInstance';

interface LoginParams {
  phoneNumber: string;
  password: string;
}

export const postLogin = async ({ phoneNumber, password }: LoginParams) => {
  try {
    const response = await axiosInstance.post('/api/v1/auth/login', {
      phoneNumber,
      password,
    });
    if (response.data.result.accessToken && response.data.result.refreshToken) {
      // console.log(response.data.result);
      localStorage.setItem('jwtToken', response.data.result.accessToken);
      localStorage.setItem('refreshToken', response.data.result.refreshToken);
    }
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await axiosInstance.post('/api/v1/auth/logout');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('refreshToken');
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      window.location.href = '/login';
    } else {
      console.error('Logout failed:', error);
    }
  }
};
