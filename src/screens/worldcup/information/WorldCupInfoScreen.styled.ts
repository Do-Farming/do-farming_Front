import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
`;

export const ScrollViewContainer = styled.ScrollView``;

export const WorldCupInfoImgContainer = styled.View`
  width: 100%;
  height: 50%;
`;

export const WorldCupTitle = styled.Text`
  color: rgb(117, 125, 136);
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 10%;
`;

export const WorldCupExplaination = styled.Text`
  font-size: 35px;
  font-weight: 900;
  text-align: center;
`;

export const EnterButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 15px;
  padding: 15px;
  margin: 15% 0;
  width: 70%;
`;

export const EnterText = styled.Text`
  color: ${(props) => props.theme.whiteColor};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;
