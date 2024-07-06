import axios from 'axios';
import axiosInstance from './axiosInstance';
import { BangType } from '../types/BangTypes';

export const bangCreate = async (bang: BangType) => {
  const response = await axiosInstance.post('/group/create', bang);
  return response.data;
};
