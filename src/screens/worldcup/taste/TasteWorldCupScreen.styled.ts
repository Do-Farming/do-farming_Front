import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.whiteColor};
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

export const SelectionContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: space-around;
`;

export const TasteContainer = styled.View`
  padding: 5%;
  flex-direction: cloumn;
  align-items: center;
  border: 1px solid #f8f8fa;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
  border-radius: 15px;
`;

export const TasteImgContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TasteImage = styled.Image`
  width: 260px;
  height: 180px;
`;

export const TasteTitleContainer = styled.View`
  justify-content: center;
  margin-top: 5%;
`;

export const TasteTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
