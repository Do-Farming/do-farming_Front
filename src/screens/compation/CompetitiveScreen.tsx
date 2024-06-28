import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

import {
  Container,
  ChartCard,
  ProgressHeader,
  UserList,
  UserCard,
  RankNumber,
  ProfileImage,
  UserName,
  AchievedGoal,
  InterestRate,
} from './CompetitiveScreen.styled';
import { DailyRanking, WeeklyRate } from '../../types';

const getRandomColor = (): string => {
  const colors = [
    '#ffafaf',
    '#ffd700',
    '#90ee90',
    '#add8e6',
    '#ff69b4',
    '#ffa07a',
    '#20b2aa',
    '#9370db',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const CompetitiveScreen: React.FC = () => {
  const [weeklyData, setWeeklyData] = useState<WeeklyRate['data']['user']>([]);
  const [dailyRate, setDailyRate] = useState<DailyRanking['data']['ranking']>(
    [],
  );

  useEffect(() => {
    const mockWeeklyData: WeeklyRate['data']['user'] = [
      { name: '0주차', weeklyRate: 3.5 }, // 0주차 데이터 추가
      ...Array.from({ length: 8 }, (_, index) => ({
        name: `User${index + 1}`,
        weeklyRate: parseFloat((Math.random() * 4 + 1).toFixed(2)), // Random rate between 1% and 5%
      })),
    ];

    const mockDailyRate: DailyRanking['data']['ranking'] = Array.from(
      { length: 4 },
      (_, index) => ({
        name: `User${index + 1}`,
        dailyRate: `${(Math.random() * 4 + 1).toFixed(2)}%`, // Random rate between 1% and 5%
        challengeType: Math.floor(Math.random() * 12) + 1, // Random challenge type between 1 and 12
        challengeDate: `2024-06-26`,
      }),
    );

    setWeeklyData(mockWeeklyData);
    setDailyRate(mockDailyRate);
  }, []);

  return (
    <ScrollView>
      <Container>
        <ProgressHeader>나의 상품 이율</ProgressHeader>
        <ChartCard>
          <ScrollView horizontal={true}>
            <LineChart
              data={[
                {
                  value: 3.5,
                  label: '',
                  dataPointText: '',
                  textShiftY: -5,
                  //   textColor: 'black',
                }, // 0주차 데이터
                ...weeklyData.map((user, index) => ({
                  value: user.weeklyRate,
                  label: `${index + 1}주차`,
                  dataPointText: `${user.weeklyRate}%`,
                  textShiftY: -5, // margin-bottom of 5px
                  textColor: 'black', // text color to black
                })),
              ]}
              maxValue={5}
              noOfSections={5}
              animateOnDataChange={true}
              animationDuration={1500}
              showVerticalLines={true}
              verticalLinesThickness={1}
              verticalLinesColor={'#e0e0e0'}
              isAnimated={true}
              color="#ff8c00"
              thickness={3}
              hideDataPoints={false}
              dataPointsHeight={6}
              dataPointsWidth={6}
              dataPointsColor="#ff8c00"
              xAxisLabelTextStyle={{ color: 'gray', fontSize: 10 }} // X축 라벨 스타일 설정
              yAxisTextStyle={{ color: 'gray', fontSize: 10 }} // Y축 라벨 스타일 설정
              yAxisThickness={1}
              yAxisColor={'#e0e0e0'}
              yAxisTextNumberOfLines={1}
              yAxisLabelWidth={35}
              yAxisLabelSuffix={'%'} // y축 라벨 뒤에 붙는 텍스트
              hideRules={true} // 배경 라인 숨기기
              initialSpacing={0} // X축 첫 데이터와 차트 시작점 간격 설정
              curved={false} // 직선형식으로 설정
              areaChart // 영역 차트 설정
              startFillColor="rgba(255, 140, 0, 0.3)" // 영역 시작 색상 (오렌지)
              endFillColor="rgba(255, 140, 0, 0.1)" // 영역 끝 색상 (오렌지)
              startOpacity={0.3} // 시작 색상 불투명도
              endOpacity={0.1} // 끝 색상 불투명도
            />
          </ScrollView>
        </ChartCard>
        <UserList>
          {dailyRate.map((user, index) => (
            <UserCard key={index}>
              <RankNumber>{index + 1}</RankNumber>
              <ProfileImage source={require('../../assets/profile.png')} />
              <View>
                <UserName>{user.name}</UserName>
                <AchievedGoal>{`Challenge Type: ${user.challengeType}`}</AchievedGoal>
              </View>
              <InterestRate>{user.dailyRate}</InterestRate>
            </UserCard>
          ))}
        </UserList>
      </Container>
    </ScrollView>
  );
};

export default CompetitiveScreen;
