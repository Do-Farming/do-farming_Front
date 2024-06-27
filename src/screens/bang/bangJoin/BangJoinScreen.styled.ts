import styled from 'styled-components/native';
import { BangProps } from '../../../types/BangTypes';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.grayColor};
  height: 100vh;
`;

export const BoardContainer = styled.View`
  background-color: #fff;
  min-height: 190px;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
  padding: 20px;
  flex-direction: column;
  gap: 30px;
`;

export const InputContainer = styled.View`
  flex-direction: column;
  gap: 8px;
`;

export const InputTitle = styled.Text`
  font-size: 15px;
`;

export const InfoText = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.DarkGrayColor};
`;
