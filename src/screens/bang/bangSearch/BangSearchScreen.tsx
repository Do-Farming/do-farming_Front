import React, { useEffect, useState } from 'react';
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
import { bangList } from '../../../apis/bangService';
import { BangListType } from '../../../types/BangTypes';

export default function BangSearchScreen({ navigation }: any) {
  const [bangs, setBangs] = useState<BangListType[]>();

  useEffect(() => {
    const fetchBangList = async () => {
      await bangList().then((res) => setBangs(res));
    };
    fetchBangList();
  }, []);

  return (
    <Container>
      <RowContainer>
        <Title>챌린지 모임모임</Title>
        <NewBang onPress={() => navigation.navigate('BangCreate')}>
          <NewBangText>방 만들기</NewBangText>
        </NewBang>
      </RowContainer>

      {bangs &&
        bangs.map((bang, index) => (
          <BangContainer key={bang.id + bang.groupName + bang.title + index}>
            <Bang
              onPress={() => navigation.navigate('BangDetail', { id: bang.id })}
            >
              <BangInfoContainer>
                <BangText>{bang.title}</BangText>
                <BangNumber>
                  ({bang.participantNumber}/{bang.groupNumber})
                </BangNumber>
              </BangInfoContainer>
              <BangDate>
                {bang.createdDate[0]}/{bang.createdDate[1]}/
                {bang.createdDate[2]}
              </BangDate>
            </Bang>
          </BangContainer>
        ))}
    </Container>
  );
}
