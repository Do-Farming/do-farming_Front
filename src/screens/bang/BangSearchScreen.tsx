import React from 'react';
import {
  Bang,
  BangContainer,
  BangDate,
  BangInfoContainer,
  BangNumber,
  BangText,
  Container,
  NewBang,
  NewBangText,
  RowContainer,
  Title,
} from './BangSearchScreen.styled';

export default function BangSearchScreen() {
  return (
    <Container>
      <RowContainer>
        <Title>챌린지 모임모임</Title>
        <NewBang>
          <NewBangText>방 만들기</NewBangText>
        </NewBang>
      </RowContainer>

      <BangContainer>
        <Bang>
          <BangInfoContainer>
            <BangText>갓생기</BangText>
            <BangNumber>(3/5)</BangNumber>
          </BangInfoContainer>
          <BangDate>06/14</BangDate>
        </Bang>
      </BangContainer>

      <BangContainer>
        <Bang>
          <BangInfoContainer>
            <BangText>갓생기</BangText>
            <BangNumber>(3/5)</BangNumber>
          </BangInfoContainer>
          <BangDate>06/14</BangDate>
        </Bang>
      </BangContainer>
    </Container>
  );
}
