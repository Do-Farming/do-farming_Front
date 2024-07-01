import React from 'react';
import { Image } from 'react-native';
import { Container, WorldCupExplaination, WorldCupInfoImg, WorldCupTitle } from './WorldCupInfoScreen.styled';

export default function WorldcupInfoScreen() {
  return (
    <Container>
      <WorldCupInfoImg
        source={require('../../assets/worldcup/worldCupInfo.jpg')}
        style={{ width: "90%", height: "50%" }}
      />
      <WorldCupTitle>이상형 월드컵</WorldCupTitle>
      <WorldCupExplaination>내게 맞는 카드</WorldCupExplaination>
      <WorldCupExplaination>일대일 비교로 간편하게</WorldCupExplaination>
    </Container>
  );
}
