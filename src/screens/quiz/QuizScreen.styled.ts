import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.whiteColor};
  align-items: center;
`;

export const ProgressBarContainer = styled.View`
  width: 100%;
  height: 5px;
  background-color: #e0e0e0;
`;

export const ProgressBar = styled(Animated.View)`
  height: 100%;
  background-color: rgb(231, 92, 85);
  transition: width 1s linear;
  border-radius: 5px;
`;

export const TimeLeftText = styled.Text`
  text-align: center;
  background-color: ${(props) => props.theme.whiteColor};
  font-weight: bold;
  padding-top: 10px;
  font-size: 20px;
`

export const SketchbookImage = styled.View`
  position: absolute;
  width: 100%;
  height: 300px;
`;

export const QuizContainer = styled.View`
  padding: 5% 10%;
  justify-content: space-between;
  height: 220px;
  margin: 6% 0
`;

export const QuizNumber = styled.Text`
  font-weight: bold;
  font-size: 25px;
`;

export const QuizContent = styled.Text`
  font-size: 18px;
  flex-wrap: wrap;
`;

export const QuizPage = styled.Text`
  text-align: center;
`;

export const AnswerText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5%;
`;

export const ChoicesContainer = styled.View`
  flex-grow: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ChoiceButton = styled.TouchableOpacity`
  width: 45%;
  height: 45%;
  max-height: 45%;
  padding: 10px;
  margin-bottom: 5%;
  border: 1px solid #f8f8fa;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const ChoiceButtonText = styled.Text`
  font-size: 20px;
`;

export const ResultContainer = styled.View`
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.mainColor};
  border: 1px solid ${(props) => props.theme.mainColor};
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
  border-radius: 15px;
  padding: 10% 0;
  margin: 5% 0;
  justify-content: space-between;
`;

export const ResultScoreText = styled.Text`
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 5%;
`;

export const ResultText = styled.Text`
  font-weight: bold;
  font-size: 25px;
  margin: 5%;
`;
