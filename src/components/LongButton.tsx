import React from 'react';
import { Button, ButtonText } from './LongButton.styled';
import theme from '../styles/theme';

const LongButton: React.FC<{ text: string; backgroundColor?: string }> = ({
  text,
  backgroundColor = theme.buttonLigthColor,
}) => {
  return (
    <Button backgroundColor={backgroundColor}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default LongButton;
