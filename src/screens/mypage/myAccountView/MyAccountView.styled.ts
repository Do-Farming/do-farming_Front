import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.grayColor};
  padding: 10px;
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.defaultWhiteColor};
  padding-vertical: 20px;
  padding-horizontal: 10px;
  margin: 10px;
  border-radius: 8px;
`;

export const ItemTitle = styled.Text``;

export const ItemType = styled.Text`
  border-radius: 8px;
  background-color: ${(props) => props.theme.mainColor};
  padding: 5px;
  font-size: 10px;
  color: ${(props) => props.theme.defaultWhiteColor};
`;
