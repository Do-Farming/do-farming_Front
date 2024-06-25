import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.defaultWhiteColor};
`;

export const ContentBox = styled.View`
  width: 80%;
`;

export const TitleBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #eeeeee;
  border-bottom-width: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 30px;
`;

export const InputBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 2%;
  padding-vertical: 3%;
  border-color: #eeeeee;
  border-bottom-width: 1;
`;

export const InputLabel = styled.Text`
  width: 20%;
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.placeholderColor,
}))`
  background-color: ${(props) => props.theme.grayColor};
  width: 80%;
  padding: 8px;
  border-radius: 8px;
`;

export const ButtonBox = styled.View`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  margin-bottom: 20%;
`;
