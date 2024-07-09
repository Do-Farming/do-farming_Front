import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.whiteColor};
`;

export const GreenBackground = styled.View`
  background-color: ${(props) => props.theme.hanaMainColor};
  padding: 20px;
`;

export const YellowBackground = styled.View`
  background-color: ${(props) => props.theme.mainColor};
  padding: 20px;
  padding: 20px;
`;

export const Header = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

export const SubHeader = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 24px;
  margin: 10px 0 50px 0;
`;

export const InterestRateContainer = styled.View`
  margin-bottom: 20px;
`;

export const SmallText = styled.Text`
  font-size: 12px;
  color: white;
  margin-bottom: 10px;
`;

export const InterestRateText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const Section = styled.View`
  padding: 20px;
`;

export const ProductName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin: 30px 0 20px 0;
`;

export const BenefitContainer = styled.View`
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
`;

export const BenefitText1 = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const BenefitText2 = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: start;
  line-height: 35px;
`;

export const HighlightedText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => props.theme.hanaMainColor};
  margin-bottom: 10px;
  color: ##ffc603;
`;

export const SignUpButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.mainColor};
  padding: 15px;
  border-radius: 15px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`;

export const SignUpGreenButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.hanaMainColor};
  padding: 15px;
  border-radius: 15px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`;

export const SignUpButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
