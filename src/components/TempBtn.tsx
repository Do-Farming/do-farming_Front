import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import theme from '../styles/theme';

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.mainColor};
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  font-size: 16px;
  color: white;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
`;

export default function TempBtn() {
  return (
    <Button>
      <ButtonText>Temp</ButtonText>
    </Button>
  );
}
