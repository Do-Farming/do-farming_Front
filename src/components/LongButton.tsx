import React from 'react';
import { Button, ButtonText } from './LongButton.styled';
import theme from '../styles/theme';

const LongButton: React.FC<{
  text?: string;
  backgroundColor?: string;
  onPress?: () => void;
}> = ({ text, backgroundColor = theme.buttonLigthColor, onPress }) => {
  return (
    <Button backgroundColor={backgroundColor} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default LongButton;
