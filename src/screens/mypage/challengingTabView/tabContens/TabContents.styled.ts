import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.grayColor};
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.defaultWhiteColor};
  padding: 10px;
  border-radius: 8px;
`;

export const ItemImage = styled.View`
  width: 66px;
  height: 74px;
  background-color: #c0c0c0;
`;

export const ItemInfo = styled.View`
  margin-horizontal: 10px;
  flex: 1;
`;

export const ItemTitleBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: 5px;
`;

export const ItemTitle = styled.Text``;

export const ViewRankingButton = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: ${(props) => props.theme.mainColor};
  padding: 5px;
`;

export const ViewRankingButtonText = styled.Text`
  font-size: 9px;
  font-weight: bold;
`;

export const ItemStatus = styled.Text`
  font-size: 10px;
  color: #868686;
  margin-top: 4px;
`;

export const ItemProgressFigure = styled.Text`
  text-align: right;
  font-size: 8px;
  color: ${(props) => props.theme.buttonLigthColor};
`;

export const ItemProgressBar = styled(Progress.Bar)``;
