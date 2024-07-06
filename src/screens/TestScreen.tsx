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
    <TestSafeAreaView>
      <TestScrollView>
        {tasteList.map((taste) => (
          <TestBox key={taste.id}>
            <TestText>{taste.tasteCategory}</TestText>
            <TestText>{taste.tasteTitle}</TestText>
            <TestText>{taste.tasteTag}</TestText>
            <TestImage source={{ uri: taste.tasteImg }} />
          </TestBox>
        ))}
      </TestScrollView>
    </TestSafeAreaView>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.whiteColor};
`;

const TestSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.whiteColor};
`;

const TestScrollView = styled.ScrollView``;

const TestBox = styled.View`
  justify-content: center;
  align-items: center;
`;

const TestText = styled.Text``;

const TestImage = styled.Image`
  width: 100px;
  height: 100px;
`;
