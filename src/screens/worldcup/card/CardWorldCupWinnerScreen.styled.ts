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

// export const CardLottieView = styled(LottieView)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: 1000;
//   pointer-events: none;
// `;

export const CardBenefitList = styled.View`
  align-items: center;
  margin-top: 5%;
`;

export const CardBenefit = styled.View`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
`;

export const CardImgView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardBenefitImg = styled.Image`
  margin-right: 5px;
`;

export const CardBenefitTextView = styled.View`
  display: flex;
  aligh-items: center;
  margin-right: 5px;
`;

export const CardBenefitSmallText = styled.Text`
  font-size: 16px;
`;

export const CardBenefitText = styled.Text`
  font-size: 16px;
`;

export const CardBenefitImportantText = styled.Text`
  color: #ffd262;
  font-weight: bold;
  font-size: 20px;
`;
