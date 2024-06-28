import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: 0;
  background-color: #ffffff;
  align-items: center;
`;

export const RoundText = styled(Animated.Text)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5%;
`;

export const InfoText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const SelectionView = styled.View`
  padding: 5% 0;
  padding-bottom: 5%;
  width: 100%;
  justify-content: space-between;
  flex-grow: 1;
`;

export const CardContainer = styled.View`
  padding: 6% 5%;
  padding-bottom: 1%;
  flex-direction: row;
  background: #ffffff;
  border: 1px solid #f8f8fa;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
  border-radius: 15px;
  align-items: center;
  height: 45%;
`;

export const CardImgContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15%;
  width: 120px;
  height: 180px;
`;

export const CardImg = styled.Image`
  border-radius: 5px;
`;

export const CardFeeText = styled.Text`
  text-align: center;
  margin-bottom: 3%;
`;

export const CardInfoContainer = styled.View`
  margin-left: 5%;
  flex-grow: 1;
  height: 100%;
`;

export const CardName = styled.Text`
  max-width: 100%;
  margin-bottom: 5%;
  font-weight: bold;
  font-size: 18px;
`;

export const CardCorpName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-top: 10%;
`;

export const CardBenefitList = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 5%;
`;

export const CardBenefit = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`;

export const CardBenefitImg = styled.Image`
  margin-right: 15px;
`;

export const CardBenefitTextView = styled.View`
  flex-grow: 8;
  justify-content: center;
  margin-right: 5px;
`;

export const CardBenefitText = styled.Text`
  font-size: 13px;
  flex-shrink: 1;
`;

export const CardBenefitImportantText = styled.Text`
  color: #ffd262;
  font-weight: bold;
  font-size: 15px;
`;
