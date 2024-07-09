// ProductSignInScreen.styled.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.whiteColor};
  padding: 20px;
`;

export const Header = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const GreenCheckContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const SubHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
`;

export const ButtonContainer = styled.Pressable`
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 10px;
  width: 90%;
  align-items: center;
  margin-top: 20px;
`;

export const HomeButton = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: ${(props) => props.theme.whiteColor};
  padding: 15px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;
