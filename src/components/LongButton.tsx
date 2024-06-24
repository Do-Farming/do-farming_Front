import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, ButtonText } from './LongButton.styled';

const LongButton: React.FC<{ text: string; backgroundColor: string }> = ({
  text,
  backgroundColor,
}) => {
  return (
    <Button backgroundColor={backgroundColor}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default LongButton;
