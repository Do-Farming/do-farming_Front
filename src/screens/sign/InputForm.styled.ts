import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.whiteColor};
`;

export const ContentBox = styled.View`
  width: 80%;
`;

export const TitleBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${(props) => props.theme.grayColor};
  border-bottom-width: 1px;
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
  border-color: ${(props) => props.theme.grayColor};
  border-bottom-width: 1px;
`;

export const InputLabel = styled.Text<{ width?: string }>`
  width: ${(props) => props.width || '20%'};
`;

export const NonContainLabelBox = styled.View<{ width?: string }>`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.placeholderColor,
}))<{ width?: string }>`
  background-color: ${(props) => props.theme.grayColor};
  width: ${(props) => props.width || '80%'};
  padding: 8px;
  border-radius: 8px;
`;

export const Button = styled.TouchableOpacity<{ width?: string }>`
  width: ${(props) => props.width || '22%'};
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.hanaMainColor};
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.whiteColor};
`;

export const ButtonBox = styled.View`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  margin-bottom: 20%;
`;

export const LongButton = styled.TouchableOpacity`
  border-radius: 8px;
  width: 80%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.hanaMainColor};
  margin-vertical: 12px;
`;
