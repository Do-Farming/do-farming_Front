import { JoinCheckingType } from '../types/account/AccountTypes';
import axiosInstance from './axiosInstance';

export const allProduct = async () => {
  const response = await axiosInstance.get('/api/v1/deposits-products/list');
  return response.data.result;
};

// 입출금 상품 가입
export const joinChecking = async (joinProduct: JoinCheckingType) => {
  const response = await axiosInstance.post(
    '/api/v1/account/create',
    joinProduct,
  );
  console.log('입출금 상품 가입', response.data);
  return response.data;
};
