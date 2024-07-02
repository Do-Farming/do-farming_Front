import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #fff;
`;

export const MessageList = styled.FlatList.attrs({
  contentContainerStyle: { flexGrow: 1, justifyContent: 'flex-end' },
})``;

export const MessageContainer = styled.View`
  padding: 2px 10px;
  border-radius: 5px;
  margin: 5px 0;
  max-width: 80%;
  margin-left: 10px;
  margin-right: 10px;
`;

export const MessageContainer2 = styled.View`
  padding: 2px 10px;
  border-radius: 5px;
  margin: 5px 0;
  max-width: 90%;
  margin-left: 10px;
  margin-right: 10px;
`;

export const UserMessage = styled(MessageContainer)`
  align-self: flex-end;
  background-color: #ffd262;
`;

export const AssistantMessage = styled(MessageContainer2)`
  align-self: flex-start;
`;

export const MessageText = styled.Text`
  color: #000;
  font-size: 30px;
  font-weight: 800;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #ccc;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  background-color: #f5f5f5;
  border-color: gray;
  border-width: 1px;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 10px;
`;

export const SendButton = styled.Button``;
