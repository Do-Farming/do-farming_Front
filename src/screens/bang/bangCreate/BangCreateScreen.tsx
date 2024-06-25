import React from 'react';

import {
  BoardContainer,
  Container,
  Input,
  InputContainer,
  InputTitle,
  SelectBox,
  TextArea,
  Title,
} from './BangCreateScreen.styled';

export default function BangCreateScreen({ navigation }: any) {
  const [value, onChangeText] = React.useState('');

  return (
    <Container>
      <Title>챌린지 모임모임 생성</Title>
      <BoardContainer>
        <InputContainer>
          <InputTitle>제목</InputTitle>
          <Input
            placeholder="제목을 입력하세요"
            value={value}
            onChangeText={(text) => onChangeText(text)}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>모집글</InputTitle>
          <TextArea
            placeholder="모집글 내용을 입력하세요"
            numberOfLines={10}
            multiline
            editable
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>그룹명</InputTitle>
          <Input placeholder="그룹명을 입력하세요" />
        </InputContainer>
        <InputContainer>
          {/* <SelectBox></SelectBox> */}
          <Input placeholder="모집인원을 선택하세요" />
        </InputContainer>
      </BoardContainer>
    </Container>
  );
}
