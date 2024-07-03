import styled from 'styled-components/native';

export const InputContainer = styled.View`
  margin-top: 15%;
  gap: 8px;
`;

export const TextArea = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.placeholderColor,
}))`
  min-width: 90%;
  max-width: 90%;
  min-height: 120px;
  height: 120px;
  background-color: ${(props) => props.theme.grayColor};
  padding: 12px;
  border-radius: 8px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 0;
`

export const CancelButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.grayColor};
  border-radius: 10px;
  padding: 15px;
  margin-right: 5%;
  margin-bottom: 50px;
  width: 40%;
`;

export const EnterButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 10px;
  padding: 15px;
  margin-left: 5%;
  margin-bottom: 50px;
  width: 40%;
`;
