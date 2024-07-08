import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  InfoText,
  RoundText,
  SelectionContainer,
  TasteContainer,
  TasteImage,
  TasteImgContainer,
  TasteTitle,
  TasteTitleContainer,
} from './TasteWorldCupScreen.styled';
import { Animated, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import { GetTasteListResponse, Taste } from '../../../types/taste/TasteTypes';
import axiosInstance from '../../../apis/axiosInstance';

const { width: screenWidth } = Dimensions.get('window');

export default function TasteWorldCupScreen({ navigation, route }: any) {
  const { category } = route.params;
  const colorValue = useRef(new Animated.Value(0)).current;
  const hologramValue = useRef(new Animated.Value(0)).current;
  const [tasteList, setTasteList] = useState<Taste[]>([]); // 취향 리스트
  const [selectedTasteList, setSelectedTasteList] = useState<Taste[]>([]); // 선택된 취향들
  const [round, setRound] = useState(8);
  const [index, setIndex] = useState(0);

  const textColor = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000000', '#FA8282'],
  });

  const calculateProgress = (round: number) => {
    return round === 2 ? 1 : (8 - round) / 8;
  };

  const progressValue = calculateProgress(round);

  useEffect(() => {
    const getTasteList = async (category: string) => {
      try {
        const response = await axiosInstance.get<GetTasteListResponse>(
          `/api/v1/taste?category=${category}`,
        );
        if (response.data.isSuccess) {
          setTasteList(response.data.result.tasteList);
        } else {
          console.log('취향 이상형 월드컵 데이터 요청 실패');
        }
      } catch (error) {
        console.error(error);
      }
    };
    getTasteList(category);
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(colorValue, {
          toValue: 0,
          duration: 700,
          useNativeDriver: false,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(hologramValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.timing(hologramValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [colorValue, hologramValue]);

  const renderTaste = (taste: Taste, handleTastePress: any) => {
    return (
      <>
        <TasteImgContainer onPress={() => handleTastePress(taste)}>
          <TasteImage source={{ uri: taste.tasteImg }} />
        </TasteImgContainer>
        <TasteTitleContainer>
          <TasteTitle>{taste.tasteTitle}</TasteTitle>
        </TasteTitleContainer>
      </>
    );
  };

  const handleTastePress = (selectedTaste: Taste) => {
    const nextIndex = index + 2;
    const nextSelectedTasteList = [...selectedTasteList, selectedTaste];

    if (nextSelectedTasteList.length === 1 && round === 2) {
      // 최종 우승 취향이 결정됨
      navigation.navigate('TasteWorldCupWinner', {
        winnerTaste: nextSelectedTasteList[0],
      });
    } else if (nextIndex >= tasteList.length) {
      setTasteList(nextSelectedTasteList);
      setSelectedTasteList([]);
      setRound(round / 2);
      setIndex(0);
    } else {
      setSelectedTasteList(nextSelectedTasteList);
      setIndex(nextIndex);
    }
  };

  if (tasteList.length < 2 || index >= tasteList.length - 1) {
    return null;
  }

  return (
    <Container>
      <Progress.Bar
        progress={progressValue}
        width={screenWidth}
        color="#FDCE2E" // 진행된 부분의 색상
        unfilledColor="#D9D9D9" // 배경색
        borderWidth={0} // 경계선 없애기
        height={5} // Progress Bar 높이
        style={{ marginBottom: '2%' }}
      />

      <>
        {round === 2 ? (
          <RoundText style={{ color: textColor }}>결승전!</RoundText>
        ) : (
          <RoundText style={{ color: textColor }}>{round}강</RoundText>
        )}
      </>

      <InfoText>마음에 드는 카드를 선택해주세요!</InfoText>

      <SelectionContainer>
        <TasteContainer>
          {renderTaste(tasteList[index], handleTastePress)}
        </TasteContainer>
        <TasteContainer>
          {renderTaste(tasteList[index + 1], handleTastePress)}
        </TasteContainer>
      </SelectionContainer>
    </Container>
  );
}
