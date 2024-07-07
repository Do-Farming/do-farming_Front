import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import {
  Container,
  EnterButton,
  EnterText,
  ScrollViewContainer,
  WorldCupExplaination,
  WorldCupInfoImgContainer,
  WorldCupTitle,
} from './WorldCupInfoScreen.styled';
import { WorldCupIcon } from '../../assets';

export default function WorldcupInfoScreen({ navigation }: any) {
  return (
    <Container>
      <ScrollViewContainer
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <WorldCupInfoImgContainer>
          <WorldCupIcon width="100%" height="100%"/>
        </WorldCupInfoImgContainer>
        <WorldCupTitle>이상형 월드컵</WorldCupTitle>
        <WorldCupExplaination>내게 맞는 카드</WorldCupExplaination>
        <WorldCupExplaination>일대일 비교로 간편하게</WorldCupExplaination>
        <EnterButton onPress={() => navigation.navigate("WorldCupSelect")}>
          <EnterText>지금 시작!</EnterText>
        </EnterButton>
        <TouchableOpacity>
          <Image
            source={require('../../assets/worldcup/detailInfo.png')}
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>
      </ScrollViewContainer>
    </Container>
  );
}
