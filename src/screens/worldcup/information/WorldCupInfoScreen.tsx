import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  Container,
  EnterButton,
  EnterText,
  ScrollViewContainer,
  WorldCupExplaination,
  WorldCupInfoImgContainer,
  WorldCupTitle,
} from './WorldCupInfoScreen.styled';
import { WorldCupIcon } from '../../../assets';

export default function WorldCupInfoScreen({ navigation }: any) {
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
          <WorldCupIcon width="100%" height="100%" />
        </WorldCupInfoImgContainer>
        <WorldCupTitle>이상형 월드컵</WorldCupTitle>
        <WorldCupExplaination>내게 찾는 혜택의 카드를</WorldCupExplaination>
        <WorldCupExplaination>일대일 비교로 간편하게</WorldCupExplaination>
        <EnterButton onPress={() => navigation.navigate('WorldCupSelect')}>
          <EnterText>지금 시작!</EnterText>
        </EnterButton>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/worldcup/detailInfo.png')}
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>
      </ScrollViewContainer>
    </Container>
  );
}
