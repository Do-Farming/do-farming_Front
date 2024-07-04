import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import axiosInstance from '../apis/axiosInstance';
import { Taste } from '../types/taste/TasteTypes';

export default function TestScreen({ navigation }: any) {
  const [tasteList, setTasteList] = useState<Taste[]>([]);

  useEffect(() => {
    const getTasteList = async () => {
      try {
        const response = await axiosInstance.get('/api/v1/taste');
        setTasteList(response.data.result.tasteList);
        // console.log(response.data.result.tasteList);
      } catch (error) {
        console.error(error);
      }
    };
    getTasteList();
  }, []);

  return (
    <Container>
      {tasteList.map((taste) => (
        <TestText key={taste.id}>{tasteList[0].tasteTitle}</TestText>
      ))}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.whiteColor};
`;

const TestText = styled.Text``;

const TestImage = styled.Image`
  width: 100px;
  height: 100px;
`;
