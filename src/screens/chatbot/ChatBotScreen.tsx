import React, { useState, useRef, useEffect } from 'react';
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardEvent,
} from 'react-native';
import axios from 'axios';
import Markdown from 'react-native-markdown-display';
import {
  Container,
  MessageList,
  UserMessage,
  AssistantMessage,
  InputContainer,
  Input,
  SendButton,
  SendText,
} from './ChatBotScreen.styled';
import axiosInstance from '../../apis/axiosInstance';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBotScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [inputMarginBottom, setInputMarginBottom] = useState(20);
  const flatListRef = useRef<any>(null);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInput('');

    try {
      const response = await axiosInstance.get('/api/gpt/chat', {
        params: { prompt: input },
      });

      // console.log(response);

      let updatedMessages = response.data.conversation;
      if (updatedMessages?.length > 0) {
        updatedMessages = updatedMessages.slice(0, -1); // 마지막 요소 제거
      }

      setMessages(updatedMessages);
    } catch (error) {
      console.error(error);
    } finally {
      setInput('');
    }
  };

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event: KeyboardEvent) => {
        setInputMarginBottom(8); // 키보드가 나타날 때 margin-bottom 제거
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setInputMarginBottom(15); // 키보드가 사라질 때 margin-bottom 추가
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const renderItem = ({ item }: { item: Message }) =>
    item.role === 'user' ? (
      <UserMessage>
        <Markdown style={{ body: { fontSize: 17 } }}>{item.content}</Markdown>
      </UserMessage>
    ) : (
      <AssistantMessage>
        <Markdown style={{ body: { fontSize: 17 } }}>{item.content}</Markdown>
      </AssistantMessage>
    );

  return (
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90} // Adjust this value as needed
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MessageList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
        />
      </TouchableWithoutFeedback>
      <InputContainer style={{ marginBottom: inputMarginBottom }}>
        <Input
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
        />
        <SendButton onPress={sendMessage}>
          <SendText>전송</SendText>
        </SendButton>
      </InputContainer>
    </Container>
  );
};

export default ChatBotScreen;
