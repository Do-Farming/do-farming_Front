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

export const bangJoin = async (id: number) => {
  const response = await axiosInstance.post('/group/join', id);
  console.log('방 가입 되었나', response.data);
  return response.data;
};

export const bangDelete = async (id: number) => {
  const response = await axiosInstance.delete('/group/delete', {
    data: { groupId: id },
  });
  console.log(response.data);
  return response.data;
};
