import { CheckingAccount } from '../types/account/AccountTypes';
import axiosInstance from './axiosInstance';

export const getChecking = async () => {
  const response = await axiosInstance.get('/api/v1/account/my/checking');
  return response.data.result as CheckingAccount[];
};
