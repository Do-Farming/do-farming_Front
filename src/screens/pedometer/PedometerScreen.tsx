import React, { useState, useEffect, useRef } from 'react';
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
  const ws = useRef<WebSocket | null>(null);

  // 특정 groupId에 대한 만보기 데이터를 가져오는 함수
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
      console.error('만보기 데이터를 가져오는 데 실패했습니다:', error);
    }
  };

  // 디바이스 ID를 설정하고 만보기 업데이트를 구독하는 useEffect 훅
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
        start.setHours(0, 0, 0, 0); // start를 하루의 시작으로 설정

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

  // WebSocket을 통해 실시간으로 데이터를 업데이트하는 useEffect 훅
  useEffect(() => {
    if (deviceId) {
      fetchPedometerData(deviceId);

      ws.current = new WebSocket('ws://172.30.1.71/pedometer');

      ws.current.onopen = () => {
        console.log('WebSocket 연결이 열렸습니다');
      };

      ws.current.onmessage = (e) => {
        const updatedUser = JSON.parse(e.data);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.name === updatedUser.name ? updatedUser : user,
          ),
        );
      };

      ws.current.onclose = () => {
        console.log('WebSocket 연결이 닫혔습니다');
      };

      return () => {
        if (ws.current) {
          ws.current.close();
        }
      };
    }
  }, [deviceId]);

  // 만보기 데이터를 서버에 POST하는 함수
  const postPedometerData = async (steps: number) => {
    try {
      const response = await axiosInstance.post(
        `/pedometer/post?step=${steps}`,
      );
      if (response.data.isSuccess) {
        // POST 요청이 성공하면 데이터를 다시 가져옵니다.
        fetchPedometerData(deviceId);
      }
    } catch (error) {
      console.error('만보기 데이터를 전송하는 데 실패했습니다:', error);
    }
  };

  // 사용자가 입력한 걸음 수를 서버에 전송하는 함수
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

  // 랜덤 색상을 반환하는 함수
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
