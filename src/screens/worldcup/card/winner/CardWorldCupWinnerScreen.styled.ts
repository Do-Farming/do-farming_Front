import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
`;

export const InfoText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10%;
`;

export const CardImgContainer = styled.View`
  width: 200px;
  height: 300px;
  justify-content: center;
  align-items: center;
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

export const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0 10px;
  justify-content: space-between;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.grayColor};
  border-radius: 10px;
  padding: 15px;
  width: 45%;
`;

export const EnterButton = styled.TouchableOpacity`
  background-color: transparent;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
`;

export const EnterText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  text-align: center;
`;
