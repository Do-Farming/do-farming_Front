import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import axiosInstance from '../apis/axiosInstance';
import { GetTasteListResponse, Taste } from '../types/taste/TasteTypes';

export default function TestScreen({ navigation }: any) {
  const [tasteList, setTasteList] = useState<Taste[]>([]);

  useEffect(() => {
    const getTasteList = async () => {
      try {
        const response = await axiosInstance.get<GetTasteListResponse>(
          '/api/v1/taste?category=여가',
        );
        // console.log(response.data);
        if (response.data.isSuccess) {
          setTasteList(response.data.result.tasteList);
        } else {
          console.log('취향 이상형 월드컵 데이터 요청 실패');
        }
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
