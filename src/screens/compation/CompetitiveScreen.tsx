import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { useNavigation } from '@react-navigation/native';
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
  ChallengeButton,
  ChallengeText,
} from './CompetitiveScreen.styled';
import axiosInstance from '../../apis/axiosInstance';
import { DailyRanking, WeeklyRate, FormattedHistory } from '../../types';

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
  const navigation = useNavigation<any>();
  const [weeklyData, setWeeklyData] = useState<FormattedHistory[]>([]);
  const [dailyRate, setDailyRate] = useState<DailyRanking['result']['ranking']>(
    [],
  );
  const [groupId, setGroupId] = useState<number | null>(null); // Group ID 초기값 null로 설정
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [challengeType, setChallengeType] = useState<number | null>(null);
  const [challenge, setChallenge] = useState<string>('');
  const [challengeEmoji, setChallengeEmoji] = useState<string>('');
  const [challengeGoTO, setChallengeGoTO] = useState<string>('');

  useEffect(() => {
    const fetchGroupId = async () => {
      try {
        const response = await axiosInstance.get(`/group/my`);
        setGroupId(response.data.result.id);
      } catch (error) {
        console.error('Failed to fetch group ID', error);
      }
    };

    fetchGroupId();
  }, []);

  useEffect(() => {
    if (groupId === null) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const ranksResponse = await axiosInstance.get<DailyRanking>(
          `/daily-rank/group`,
          {
            params: { groupId },
          },
        );
        setDailyRate(ranksResponse.data.result.ranking);

        const historyResponse = await axiosInstance.get<{
          message: string;
          code: number;
          result: { date: string; totalRate: number }[];
        }>(`/daily-rank/group/history`, { params: { groupId } });
        const formattedHistory: FormattedHistory[] =
          historyResponse.data.result.map((history) => ({
            name: history.date, // 날짜를 이름으로 사용
            totalRate: parseFloat(history.totalRate.toFixed(2)),
          }));
        setWeeklyData(formattedHistory);
        // Fetch challenge type
        const challengeResponse = await axiosInstance.get<any>(
          '/api/v1/challenge/getChallenge',
        );
        setChallengeType(challengeResponse.data.result);
        console.log('챌린지 리스폰스', challengeType);
        if (challengeType === 0) {
          setChallenge('걷기');
          setChallengeEmoji('🏃');
          setChallengeGoTO('Pedometer');
        } else if (challengeType === 1) {
          setChallenge('기상');
          setChallengeEmoji('⏰');
          setChallengeGoTO('WakeUp');
        } else {
          setChallenge('퀴즈');
          setChallengeEmoji('📚');
          setChallengeGoTO('Quiz');
        }
      } catch (error) {
        console.error('Failed to fetch data', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [groupId]);

  const chartData = weeklyData.map((user) => ({
    value: user.totalRate,
    label: user.name,
    dataPointText: `${user.totalRate}%`,
    textShiftY: -5,
    textColor: 'black',
  }));

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const openCameraHandler = async () => {
    navigation.navigate(challengeGoTO, { groupId });
  };

  return (
    <ScrollView>
      <Container>
        <ProgressHeader>나의 상품 이율</ProgressHeader>
        <ChartCard>
          <ScrollView horizontal={true}>
            <LineChart
              data={chartData}
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
        <ChallengeButton onPress={openCameraHandler}>
          <ChallengeText>
            {challengeEmoji} {challenge} 챌린지 하러가기 {challengeEmoji}
          </ChallengeText>
        </ChallengeButton>
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
