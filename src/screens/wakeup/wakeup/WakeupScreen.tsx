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
import { Alert, Text, View } from 'react-native';
import { DailyRanking } from '../../../types';
import { Camera } from 'expo-camera/legacy';
import { todayObject } from '../../../apis/wakeupService';
import { ObjectMapping } from '../../../constants/WakeupObject';
import axiosInstance from '../../../apis/axiosInstance';

export default function WakeupScreen({ navigation }: any) {
  const [object, setObject] = useState<string>('');
  const [objectEng, setObjectEng] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [groupId, setGroupId] = useState<number>(0);
  const [dailyRate, setDailyRate] = useState<DailyRanking['result']['ranking']>(
    [],
  );

  useEffect(() => {
    const fetchTodayObject = async () => {
      await todayObject().then((res) => {
        setObject(ObjectMapping[res]);
        setObjectEng(res);
      });
      const response = await axiosInstance.get(`/group/my`);
      setGroupId(response.data.result.id);
      const ranksResponse = await axiosInstance.get<DailyRanking>(
        `/daily-rank/group`,
        {
          params: { groupId },
        },
      );
      setDailyRate(ranksResponse.data.result.ranking);
    };
    fetchTodayObject();
  }, []);

  useEffect(() => {
    if (groupId === 0) return;

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
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [groupId]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const openCameraHandler = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === 'granted') {
      navigation.navigate('WakeUpCamera', objectEng);
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
        <CameraText>{object || ''} 찍으러가기</CameraText>
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
