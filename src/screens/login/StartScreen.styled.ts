import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.defaultWhiteColor};
`;

export const Space = styled.Text`
  flex: 1;
`;

export const TitleWrapper = styled.View`
  flex: 2;
`;

export const MainTitle = styled.Text`
  justify-content: center;
  align-contents: center;
  font-size: 24px;
  font-weight: bold;
  flex: 3;
`;

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  justify-content: space-evenly;
  margin-vertical: 60px;
`;
