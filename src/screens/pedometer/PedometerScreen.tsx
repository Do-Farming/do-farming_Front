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
  MissionInfo,
  MissionTitle,
  UserInfo,
} from './PedometerScreen.styled';
import { ApiResponse, PedometerResponse } from '../../types';
import axiosInstance from '../../apis/axiosInstance';
import {
  RunIcon,
  FirstIcon,
  SecondIcon,
  ThirdIcon,
  FourthIcon,
  FifthIcon,
} from '../../assets';

const getIconByIndex = (index) => {
  const size = { width: 40, height: 40 };

  switch (index + 1) {
    case 1:
      return <FirstIcon style={size} />;
    case 2:
      return <SecondIcon style={size} />;
    case 3:
      return <ThirdIcon style={size} />;
    case 4:
      return <FourthIcon style={size} />;
    case 5:
      return <FifthIcon style={size} />;
    default:
      return null;
  }
};

export default function PedometerScreen({ route }: any) {
  const { groupId } = route.params;
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

  const fetchPedometerData = async (groupId: string) => {
    try {
      const response = await axiosInstance.get<
        ApiResponse<PedometerResponse[]>
      >(`/pedometer/get?groupId=${groupId}`);
      console.log(response);

      if (response.data.isSuccess) {
        const sortedUsers = response.data.result.sort(
          (a, b) => b.step - a.step,
        );
        setUsers(sortedUsers);
      }
    } catch (error) {
      console.error('만보기 데이터를 가져오는 데 실패했습니다:', error);
    }
  };

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
        start.setHours(0, 0, 0, 0);

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
    if (deviceId) {
      fetchPedometerData(groupId);

      ws.current = new WebSocket('ws://172.16.21.100/pedometer');

      ws.current.onopen = () => {
        console.log('WebSocket 연결이 열렸습니다');
      };

      ws.current.onmessage = (e) => {
        const updatedUser = JSON.parse(e.data);
        setUsers((prevUsers) =>
          prevUsers
            .map((user) =>
              user.name === updatedUser.name ? updatedUser : user,
            )
            .sort((a, b) => b.step - a.step),
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

  const postPedometerData = async (steps: number) => {
    try {
      const response = await axiosInstance.post(
        `/pedometer/post?step=${steps}`,
      );
      if (response.data.isSuccess) {
        fetchPedometerData(deviceId);
      }
    } catch (error) {
      console.error('만보기 데이터를 전송하는 데 실패했습니다:', error);
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

  const getCurrentDateTime = () => {
    const date = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${month}.${day} ${hours}:${minutes}`;
  };

  return (
    <Container>
      <MissionInfo>
        오늘의 미션은 <MissionTitle>걷기미션 </MissionTitle>입니다.
      </MissionInfo>
      <ProgressCard>
        <ProgressBody>
          <ProgressSmallHeader>
            총 걸음 수 <StepCount>{pastStepCount}</StepCount> 걸음
          </ProgressSmallHeader>
          <Text>{getCurrentDateTime()} 기준</Text>
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
            {getIconByIndex(index)}
            <UserInfo>
              <UserName>{user.name}</UserName>
              <AchievedGoal>{`${user.step} 걸음`}</AchievedGoal>
            </UserInfo>
            <InterestRate>{`이율 ${user.rate}%`}</InterestRate>
          </UserCard>
        ))}
      </UserList>
    </Container>
  );
}
