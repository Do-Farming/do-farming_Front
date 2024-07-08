import React, { useState } from 'react';
import {
  Animated,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AdditionalContainer,
  Container,
  DoFarmingInfoContainer,
  EnterButton,
  EnterButtonContainer,
  EnterText,
  ExplanationContainer,
  MissionContainer,
  MissionImgContainer,
  MissionInfo,
  ProdcutImgContainer,
  ProductExplaination,
  ProductInfo,
  ProductInterestLargeExplaination,
  ProductInterestSmallExplaination,
  ProductTermText,
  ProductTitle,
  RedText,
  ScrollViewContainer,
} from './DoFarmingInfoScreen.styled';
import { MoneyIcon, MorningIcon, QuizIcon, RunningIcon } from '../../../assets';

export default function DoFarmingInfoScreen({ navigation }: any) {
  return (
    <>
      <ScrollViewContainer>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
          }}
        >
          <DoFarmingInfoContainer>
            <ProductTitle>도파밍 예금</ProductTitle>
            <ProductExplaination>여러 사람들과</ProductExplaination>
            <ProductExplaination>뺏고 뺏기는 이율 경쟁</ProductExplaination>
            <ProdcutImgContainer>
              <MoneyIcon width={'100%'} height={'100%'} />
            </ProdcutImgContainer>
          </DoFarmingInfoContainer>
          <Container>
            <ProductExplaination>랜덤 미션을 수행하고</ProductExplaination>
            <ProductExplaination>한 주마다 이자받고</ProductExplaination>

            <ProductInterestLargeExplaination>
              연 최대 <RedText>6.0%</RedText>
            </ProductInterestLargeExplaination>
            <ProductInterestSmallExplaination>
              최소 1.0%
            </ProductInterestSmallExplaination>
          </Container>
          <AdditionalContainer>
            <ProductExplaination>매일 새로운 미션으로</ProductExplaination>
            <ProductExplaination>경쟁 도파민 충전</ProductExplaination>
            <MissionContainer>
              <MissionImgContainer>
                <RunningIcon width={'100%'} height={'100%'} />
              </MissionImgContainer>
              <MissionInfo>
                <ProductExplaination style={{ textAlign: 'right' }}>
                  더 걸을수록
                </ProductExplaination>
                <ProductExplaination style={{ textAlign: 'right' }}>
                  캐시워크
                </ProductExplaination>
              </MissionInfo>
            </MissionContainer>
            <MissionContainer>
              <MissionInfo>
                <ProductExplaination>얼리버드</ProductExplaination>
                <ProductExplaination>기상 미션</ProductExplaination>
              </MissionInfo>
              <MissionImgContainer>
                <MorningIcon width={'100%'} height={'100%'} />
              </MissionImgContainer>
            </MissionContainer>
            <MissionContainer>
              <MissionImgContainer>
                <QuizIcon width={'100%'} height={'100%'} />
              </MissionImgContainer>
              <MissionInfo>
                <ProductExplaination style={{ textAlign: 'right' }}>
                  경제 상식으로
                </ProductExplaination>
                <ProductExplaination style={{ textAlign: 'right' }}>
                  퀴즈 대결
                </ProductExplaination>
              </MissionInfo>
            </MissionContainer>
          </AdditionalContainer>
          <ProductInfo>
            <ExplanationContainer>
              <ProductInterestSmallExplaination>
                연 3.5%의 이율로 시작하여
              </ProductInterestSmallExplaination>
              <ProductInterestSmallExplaination>
                일주일마다 미션 순위에 따라
              </ProductInterestSmallExplaination>
              <ProductInterestSmallExplaination>
                이율이 달라집니다
              </ProductInterestSmallExplaination>
            </ExplanationContainer>
            <ExplanationContainer>
              <ProductTermText>가입기간: 3개월</ProductTermText>
              <ProductTermText>납입 금액: 100만원</ProductTermText>
            </ExplanationContainer>
          </ProductInfo>
        </ScrollView>
        <EnterButtonContainer>
          <EnterButton onPress={() => navigation.navigate('BangSearch')}>
            <EnterText>가입하기</EnterText>
          </EnterButton>
        </EnterButtonContainer>
      </ScrollViewContainer>
    </>
  );
}
