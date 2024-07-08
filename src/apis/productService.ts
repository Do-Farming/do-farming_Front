import axiosInstance from './axiosInstance';

export const allProduct = async () => {
  const response = await axiosInstance.get('/api/v1/deposits-products/list');
  return response.data.result;
};
