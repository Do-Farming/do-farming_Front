import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity<{ backgroundColor: string }>`
  border-radius: 8px;
  width: 80%;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  margin-vertical: 12px;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.defaultWhiteColor};
`;
