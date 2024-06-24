import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity<{ backgroundColor: string }>`
  border-radius: 8px;
  width: 80%;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`;

export const ButtonText = styled.Text`
  color: #ffffff;
`;
