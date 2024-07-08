import axios from 'axios';
import axiosInstance from './axiosInstance';

export const objectDetect = async (capturedImage: string) => {
  const url = 'http://aiopen.etri.re.kr:8000/ObjectDetect';

  const requestBody = {
    argument: {
      file: capturedImage,
      type: 'image/png',
    },
  };

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        Authorization: process.env.OBJECT_DETECT_API_KEY,
        'Content-Type': 'application/json',
      },
    });
    return response.data.return_object;
  } catch (error) {
    throw error;
  }
};

export const todayObject = async () => {
  const response = await axiosInstance.get('/wakeup/object');
  return response.data.result;
};

export const wakeupCertificate = async () => {
  const response = await axiosInstance.post('/wakeup/certificate');
  console.log(response.data);
  return response.data;
};
