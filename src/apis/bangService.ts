import axiosInstance from './axiosInstance';
import { BangDetailType, BangListType, BangType } from '../types/BangTypes';

export const bangCreate = async (bang: BangType) => {
  const response = await axiosInstance.post('/group/create', bang);
  console.log('방 생성됐서?', response.data);
  return response.data;
};

export const bangList = async () => {
  let response = await axiosInstance.get('/group/list');
  return response.data.result as BangListType[];
};

export const bangDetail = async (id: number) => {
  const response = await axiosInstance.get('/group?id=' + id);
  return response.data.result as BangDetailType;
};
