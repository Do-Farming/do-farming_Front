import React, { useState } from 'react';
import { Container, InfoText } from '../worldcup/card/CardWorldCupWinnerScreen.styled';
import { Image } from 'react-native';
import {
  EnterText,
  InputTitle,
} from '../bang/bangCreate/BangCreateScreen.styled';
import {
  ButtonContainer,
  CancelButton,
  EnterButton,
  InputContainer,
  TextArea,
} from './GenerateCardScreen.styled';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function GenerateCardScreen({ route }: any) {
  const [imgDesc, setImgDesc] = useState('');

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      extraScrollHeight={20}
    >
      <Container>
        <InfoText>나만의 카드 생성 🧚‍♂️</InfoText>
        <Image
          source={require('../../assets/worldcup/newCard.png')}
          style={{ width: 200, height: 300, borderRadius: 10 }}
        />
        <InputContainer>
          <InputTitle>어떤 카드를 생성하고 싶으세요?</InputTitle>
          <TextArea
            placeholder="원하시는 이미지에 대해 상세하게 적어주세요!"
            numberOfLines={10}
            multiline
            editable
            onChangeText={(text) => setImgDesc(text)}
          />
        </InputContainer>
        <ButtonContainer>
          <CancelButton>
            <EnterText>취소</EnterText>
          </CancelButton>
          <EnterButton>
            <EnterText>생성하기</EnterText>
          </EnterButton>
        </ButtonContainer>
      </Container>
    </KeyboardAwareScrollView>
  );
}
