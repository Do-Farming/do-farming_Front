import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.whiteColor};
  padding-left: 20px;
  padding-right: 20px;
`;

export const ContentBox = styled.View`
  width: 80%;
`;

export const TitleBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.placeholderColor,
}))`
  background-color: ${(props) => props.theme.grayColor};
  width: 100%;
  padding-horizontal: 8px;
  padding-vertical: 12px;
  border-radius: 8px;
`;

export const Slash = styled.View`
  background-color: black;
  height: 1px;
  width: 10px;
  margin-horizontal: 3px;
`;

export const MediumInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.placeholderColor,
}))`
  width: 45%;
  background-color: ${(props) => props.theme.grayColor};
  padding-horizontal: 8px;
  padding-vertical: 12px;
  border-radius: 8px;
`;

export const LongInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.placeholderColor,
}))`
  width: 80%;
  background-color: ${(props) => props.theme.grayColor};
  padding-horizontal: 8px;
  padding-vertical: 12px;
  border-radius: 8px;
`;

export const Button = styled.TouchableOpacity<{ width?: string }>`
  align-items: center;
  justify-content: center;
  padding-horizontal: 9px;
  padding-vertical: 12px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.hanaMainColor};
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.whiteColor};
  font-weight: 600;
  font-size: 16px;
`;

export const ButtonBox = styled.View`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  margin-bottom: 66px;
`;

export const LongButton = styled.TouchableOpacity`
  border-radius: 8px;
  width: 90%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.hanaMainColor};
  margin-vertical: 12px;
`;

export const GotoJoinButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

export const GotoInfoText = styled.Text`
  font-size: 14px;
  margin-right: 4px;
  font-weight: 600;
`;

export const GotoJoinText = styled.Text`
  font-size: 15px;
  text-decoration: underline;
  font-weight: 600;
  color: ${(props) => props.theme.hanaMainColor};
  text-decoration-color: ${(props) => props.theme.hanaMainColor};
`;
