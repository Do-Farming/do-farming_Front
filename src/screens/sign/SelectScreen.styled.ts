import styled from 'styled-components/native';

export const Space = styled.Text`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.defaultWhiteColor};
`;

export const TitleBox = styled.View`
  margin-top: 30%;
`;

export const MainTitle = styled.Text`
  justify-content: center;
  align-contents: center;
  font-size: 24px;
  font-weight: bold;
`;

export const ButtonBox = styled.View`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  margin-bottom: 20%;
`;
