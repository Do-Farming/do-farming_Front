import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

export const ScrollViewContainer = styled.View`
  flex: 1;
  position: relative;
`;

export const DoFarmingInfoContainer = styled.View`
  background-color: #ffe795;
  width: 100%;
  height: ${screenHeight * 0.6}px;
  padding: 0 10%;
  padding-top: 15%;
  padding-bottom: 10%;
  align-items: center;
`;

export const ProductTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
  margin: 10% 0;
`;

export const ProductExplaination = styled.Text`
  font-size: 26px;
  font-weight: 800;
`;

export const ProductInterestLargeExplaination = styled.Text`
  font-size: 29px;
  font-weight: 800;
  margin-top: 13%;
`;

export const RedText = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: #fa8282;
`;

export const ProductInterestSmallExplaination = styled.Text`
  color: ${(props) => props.theme.darkGrayColor};
  font-size: 18px;
  font-weight: 500;
  margin-top: 3%;
`;

export const ProdcutImgContainer = styled.View`
  width: 68%;
  height: 60%;
  margin-top: 5%;
`;

export const Container = styled.View`
  height: ${screenHeight * 0.4}px;
  width: 100%;
  padding: 10%;
  background-color: ${(props) => props.theme.whiteColor};
`;

export const AdditionalContainer = styled.View`
  padding: 10% 8%;
  width: 100%;
  background-color: #ffe795;
`;

export const MissionContainer = styled.View`
  width: 100%;
  height: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MissionImgContainer = styled.View`
  width: 150px;
  height: 150px;
`;

export const MissionInfo = styled.View`
  flex: 1;
`;

export const ExplanationContainer = styled.View`
  margin-bottom: 10%;
`;

export const ProductInfo = styled.View`
  padding: 10%;
  padding-bottom: 15%;
  width: 100%;
  background-color: ${(props) => props.theme.whiteColor};
`;

export const ProductTermText = styled.Text`
  color: ${(props) => props.theme.darkGrayColor};
  font-size: 20px;
  font-weight: 700;
  margin-top: 3%;
`;

export const EnterButtonContainer = styled.View`
  width: 100%;
  padding: 0 10%;
  position: absolute;
  bottom: 3%;
  left: 0;
`;

export const EnterButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 15px;
  padding: 15px;
  width: 100%;
  align-items: center;
`;

export const EnterText = styled.Text`
  color: ${(props) => props.theme.whiteColor};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;
