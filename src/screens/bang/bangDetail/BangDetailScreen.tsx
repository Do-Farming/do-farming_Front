import {
  BangNumber,
  BangParticipantContainer,
  BoardContainer,
  BoardContent,
  BoardDate,
  BoardTitle,
  ColumnContainer,
  Container,
  EnterButton,
  EnterText,
  ParticipantContainer,
  ParticipantName,
  RowContainer,
  StyledImage,
  Title,
  WakeUpContainer,
  WakeUpTime,
} from './BangDetailScreen.styled';
import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { bangDetail } from '../../../apis/bangService';
import { BangDetailType } from '../../../types/BangTypes';

export default function BangDetailScreen({ route }: any) {
  const { id } = route.params;
  const [bang, setBang] = useState<BangDetailType>();
  useEffect(() => {
    const fetchBangDetail = async (id: number) => {
      await bangDetail(id).then((res) => setBang(res));
    };
    fetchBangDetail(id);
  }, []);
  return (
    <>
      {bang && (
        <Container>
          <RowContainer>
            <Title>챌린지 모임모임</Title>
            <Icon name="link" size={20} color="#4A4A4A" />
          </RowContainer>
          <BoardContainer>
            <ColumnContainer>
              <RowContainer>
                <BoardTitle>{bang.title}</BoardTitle>
                <BoardDate>
                  {bang.createdDate[0]}.{bang.createdDate[1]}.
                  {bang.createdDate[2]}
                </BoardDate>
              </RowContainer>

              <BoardContent>{bang.description}</BoardContent>
            </ColumnContainer>
            <WakeUpContainer>
              <WakeUpTime>
                🚨 방장이 설정한 기상시간은 {bang.wakeupTime}시 입니다.
              </WakeUpTime>
            </WakeUpContainer>
          </BoardContainer>
          <Title>
            현재 참여 인원{' '}
            <BangNumber>
              ({bang.participantNumber}/{bang.groupNumber})
            </BangNumber>
          </Title>

          <BangParticipantContainer
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {bang.groupMembers.map((member, index) => (
              <ParticipantContainer>
                <StyledImage
                  source={require('../../../assets/1.png')}
                  width={50}
                  height={50}
                ></StyledImage>
                <ParticipantName>{member.memberName}</ParticipantName>
              </ParticipantContainer>
            ))}
          </BangParticipantContainer>
          <EnterButton>
            <EnterText>
              {bang.status === 0
                ? '입장하기'
                : bang.status === 1
                  ? '챌린지 시작 대기중 입니다...'
                  : '이미 진행중인 챌린징입니다.'}
            </EnterText>
          </EnterButton>
        </Container>
      )}
    </>
  );
}
