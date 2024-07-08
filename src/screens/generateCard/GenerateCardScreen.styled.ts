import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const CardLottieView = styled(LottieView)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  pointer-events: none;
`;

export const InfoText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const InputContainer = styled.View`
  width: 100%;
  padding: 0 10px;
  gap: 8px;
`;

export const GenerateCardContainer = styled.View`
  position: relative;
  align-items: center;
  width: 200px;
  height: 300px
`;

export const Button = styled.View<{ isSelected: boolean }>`
  padding: 10px 15px;
  background-color: ${(props) => (props.isSelected ? '#FFD262' : '#FFFFFF')};
  border-radius: 15px;
  margin-right: 10px;
`;

export const ButtonText = styled.Text<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? '#ffffff' : '#000000')};
  font-weight: bold;
  font-size: 15px;
`;

export const TextAreaContainer = styled.View`
  padding: 5px 0;
  align-items: center;
`

export const TextArea = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.placeholderColor,
}))`
  width: 100%;
  height: 120px;
  background-color: ${(props) => props.theme.grayColor};
  padding: 12px;
  border-radius: 8px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0 10px;
  justify-content: space-between;
`

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