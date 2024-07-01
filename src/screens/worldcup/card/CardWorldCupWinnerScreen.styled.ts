import { Animated } from 'react-native';
import styled from 'styled-components/native';
// import LottieView from 'lottie-react-native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  align-items: center;
`;

export const InfoText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10%;
`;

export const CardName = styled.Text`
  font-size: 23px;
  font-weight: bold;
  margin-top: 10%;
`;

export const CardBenefitList = styled.View`
  align-items: center;
  margin: 5% 0;
  width: 80%;
`;

export const CardBenefit = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const CardImgView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardBenefitImg = styled.Image`
  margin-right: 15%;
`;

export const CardBenefitTextView = styled.View`
  flex-grow: 1;
  justify-content: center;
  aligh-items: center;
  margin-right: 5px;
`;

export const CardBenefitSmallText = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  text-align: center;
`;

export const CardBenefitImportantText = styled.Text`
  color: #ffd262;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;