import styled from 'styled-components/native';
import { Pressable } from 'react-native';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: 'rgba(0, 0, 0, 0.5)';
`;

export const ModalView = styled.View`
  width: 240px;
  max-width: 400px;
  background-color: ${(props) => props.theme.whiteColor};
  padding: 35px;
  border-radius: 10px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0px;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

export const CloseButton = styled(Pressable)`
  position: absolute;
  top: 12px;
  right: 10px;
`;

export const ModalText = styled.Text`
  color: #17191c;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 30px;
`;
