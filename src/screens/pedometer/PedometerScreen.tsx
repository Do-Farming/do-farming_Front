import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Pedometer } from 'expo-sensors';
import * as Application from 'expo-application';
import {
  Container,
  ProgressCard,
  ProgressHeader,
  ProgressSmallHeader,
  ProgressBody,
  ProgressBarContainer,
  ProgressBar,
  StepCount,
  UserCard,
  RankNumber,
  UserName,
  AchievedGoal,
  InterestRate,
  UserList,
  ProgressLabel,
  PinContainer,
  ProfileImage,
  ProgressLabelText,
} from './PedometerScreen.styled';
import { ApiResponse, PedometerResponse } from '../../types';
import axiosInstance from '../../apis/axiosInstance';
import { RunIcon } from '../../assets';

export default function PedometerScreen() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [users, setUsers] = useState<PedometerResponse[]>([]);
  const [visibleLabelIndex, setVisibleLabelIndex] = useState<number | null>(
    null,
  );
  const [inputSteps, setInputSteps] = useState<string>('');

  useEffect(() => {
    const getDeviceId = async () => {
      const id = await Application.getIosIdForVendorAsync();
      setDeviceId(id);
    };

    getDeviceId();

    const subscribe = async () => {
      const isAvailable = await Pedometer.isAvailableAsync();
      setIsPedometerAvailable(String(isAvailable));

      if (isAvailable) {
        const end = new Date();
        const start = new Date();
        start.setHours(0, 0, 0, 0); // Set startDate to the beginning of the day

        const pastStepCountResult = await Pedometer.getStepCountAsync(
          start,
          end,
        );
        if (pastStepCountResult) {
          setPastStepCount(pastStepCountResult.steps);
          postPedometerData(pastStepCountResult.steps);
        }

        const subscription = Pedometer.watchStepCount((result) => {
          setCurrentStepCount(result.steps);
        });

        return subscription;
      }
    };

    const subscriptionPromise = subscribe();
    let subscription: Pedometer.Subscription;
    subscriptionPromise.then((sub) => {
      if (sub) {
        subscription = sub;
      }
    });

    return () => {
      if (subscription && typeof subscription.remove === 'function') {
        subscription.remove();
      }
    };
  }, []);

  useEffect(() => {
    const fetchPedometerData = async (groupId: string) => {
      try {
        const response = await axiosInstance.get<
          ApiResponse<PedometerResponse[]>
        >(`/pedometer/get?groupId=${2}`);
        console.log(response);

        if (response.data.isSuccess) {
          setUsers(response.data.result);
        }
      } catch (error) {
        console.error('Failed to fetch pedometer data:', error);
      }
    };

    if (deviceId) {
      fetchPedometerData(deviceId);
    }
  }, [deviceId]);

  const postPedometerData = async (steps: number) => {
    try {
      await axiosInstance.post(`/pedometer/post?step=${steps}`);
    } catch (error) {
      console.error('Failed to post pedometer data:', error);
    }
  };

  const handlePostSteps = () => {
    const steps = parseInt(inputSteps);
    if (!isNaN(steps)) {
      postPedometerData(steps);
    }
  };

  const progress = (pastStepCount / 10000) * 100;

  const toggleLabelVisibility = (index: number) => {
    setVisibleLabelIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getRandomColor = () => {
    const colors = ['#ffafaf', '#ffd700', '#90ee90', '#add8e6', '#ff69b4'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Container>
      <ProgressHeader>
        <Text>만보기</Text>
      </ProgressHeader>
      <ProgressCard>
        <ProgressBody>
          <ProgressSmallHeader>
            총 걸음 수 <StepCount>{pastStepCount}</StepCount> 걸음
          </ProgressSmallHeader>
          <Text>07.07.11:12 기준</Text>
          <Text>Sensor: {isPedometerAvailable}</Text>
          <Text>24시간 걸음 수: {pastStepCount}</Text>
          <Text>실시간 걸음 수: {currentStepCount}</Text>
          <ProgressBarContainer>
            <ProgressBar progress={progress} />
            {users.map((user, index) => (
              <PinContainer
                key={index}
                style={{ left: `${(user.step / 10000) * 100}%` }}
              >
                <TouchableOpacity onPress={() => toggleLabelVisibility(index)}>
                  <RunIcon style={{ marginTop: -5 }} />
                  {visibleLabelIndex === index && (
                    <ProgressLabel bgColor={getRandomColor()}>
                      <ProgressLabelText>{user.name}</ProgressLabelText>
                    </ProgressLabel>
                  )}
                </TouchableOpacity>
              </PinContainer>
            ))}
          </ProgressBarContainer>
        </ProgressBody>
      </ProgressCard>
      <UserList>
        {users.map((user, index) => (
          <UserCard key={index}>
            <RankNumber>{index + 1}</RankNumber>
            <ProfileImage source={require('../../assets/profile.png')} />
            <View>
              <UserName>{user.name}</UserName>
              <AchievedGoal>{`${user.step} 걸음`}</AchievedGoal>
            </View>
            <InterestRate>{`이율 ${user.rate}%`}</InterestRate>
          </UserCard>
        ))}
      </UserList>
    </Container>
  );
}
