import axiosInstance from './axiosInstance';
import { BangListType, BangType } from '../types/BangTypes';

export const bangCreate = async (bang: BangType) => {
  const response = await axiosInstance.post('/group/create', bang);
  return response.data;
};

export const bangList = async () => {
  let response = await axiosInstance.get('/group/list');
  return response.data.result as BangListType[];
};
