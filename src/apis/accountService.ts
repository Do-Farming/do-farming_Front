import {
  CheckingAccount,
  JoinDofarmingType,
} from '../types/account/AccountTypes';
import axiosInstance from './axiosInstance';

export const getChecking = async () => {
  const response = await axiosInstance.get('/api/v1/account/my/checking');
  return response.data.result as CheckingAccount[];
};

export const joinDofarmingProduct = async (
  joinDoFarmingAcc: JoinDofarmingType,
) => {
  const response = await axiosInstance.post(
    '/api/v1/signsaving/dofarming/create',
    joinDoFarmingAcc,
  );
  console.log('가입됐어??', response.data);

  return response.data;
};
