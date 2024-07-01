import React, { useEffect, useState } from 'react';

import {
  CameraButton,
  CameraText,
  CompetitionContainer,
  Container,
  MissionInfo,
  MissionTitle,
} from './WakeupScreen.styled';
import {
  AchievedGoal,
  InterestRate,
  ProfileImage,
  RankNumber,
  UserCard,
  UserList,
  UserName,
} from '../pedometer/PedometerScreen.styled';
import { View } from 'react-native';
import { DailyRanking } from '../../types';

export default function WakeupScreen({ navigation }: any) {
  const [dailyRate, setDailyRate] = useState<DailyRanking['data']['ranking']>(
    [],
  );
  useEffect(() => {
    const mockDailyRate: DailyRanking['data']['ranking'] = Array.from(
      { length: 4 },
      (_, index) => ({
        name: `User${index + 1}`,
        dailyRate: `${(Math.random() * 4 + 1).toFixed(2)}%`, // Random rate between 1% and 5%
        challengeType: Math.floor(Math.random() * 12) + 1, // Random challenge type between 1 and 12
        challengeDate: `2024-06-26`,
      }),
    );

    setDailyRate(mockDailyRate);
  }, []);

  return (
    <Container>
      <MissionInfo>
        오늘의 미션은 <MissionTitle>기상미션 </MissionTitle>입니다.
      </MissionInfo>
      <CameraButton>
        <CameraText>치약 찍으러가기</CameraText>
      </CameraButton>
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
  );
}
