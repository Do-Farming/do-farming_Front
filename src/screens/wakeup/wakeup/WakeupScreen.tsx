import React, { useEffect, useState } from 'react';

import {
  CameraButton,
  CameraText,
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
} from '../../pedometer/PedometerScreen.styled';
import { Alert, View } from 'react-native';
import { DailyRanking } from '../../../types';
import { Camera } from 'expo-camera/legacy';

export default function WakeupScreen({ navigation }: any) {
  const [dailyRate, setDailyRate] = useState<DailyRanking['data']['ranking']>(
    [],
  );
  useEffect(() => {
    const mockDailyRate: DailyRanking['data']['ranking'] = Array.from(
      { length: 4 },
      (_, index) => ({
        name: `User${index + 1}`,
        dailyRate: `${(Math.random() * 4 + 1).toFixed(2)}%`,
        challengeType: Math.floor(Math.random() * 12) + 1,
        challengeDate: `2024-06-26`,
      }),
    );

    setDailyRate(mockDailyRate);
  }, []);

  const openCameraHandler = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === 'granted') {
      navigation.navigate('WakeUpCamera');
    } else {
      Alert.alert('카메라 접근 허용은 필수입니다.');
    }
  };

  return (
    <Container>
      <MissionInfo>
        오늘의 미션은 <MissionTitle>기상미션 </MissionTitle>입니다.
      </MissionInfo>
      <CameraButton onPress={openCameraHandler}>
        <CameraText>치약 찍으러가기</CameraText>
      </CameraButton>
      <UserList>
        {dailyRate.map((user, index) => (
          <UserCard key={index}>
            <RankNumber>{index + 1}</RankNumber>
            <ProfileImage source={require('../../../assets/profile.png')} />
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
