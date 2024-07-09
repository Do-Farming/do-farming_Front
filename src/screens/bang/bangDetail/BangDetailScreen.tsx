import {
  BangNumber,
  BangParticipantContainer,
  BoardContainer,
  BoardContent,
  BoardDate,
  BoardTitle,
  ButtonContainer,
  ColumnContainer,
  Container,
  DeleteButton,
  EnterButton,
  EnterText,
  ParticipantContainer,
  ParticipantName,
  RowContainer,
  StartButton,
  StyledImage,
  Title,
  WakeUpContainer,
  WakeUpTime,
} from './BangDetailScreen.styled';
import React, { useEffect, useState } from 'react';
import { Linking, Pressable, Share } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { bangDelete, bangDetail } from '../../../apis/bangService';
import { BangDetailType } from '../../../types/BangTypes';
import CustomModal from '../../../components/CustomModal/CustomModal';
import {
  ModalButton,
  ModalButtonText,
} from '../bangCreate/BangCreateScreen.styled';

export default function BangDetailScreen({ route, navigation }: any) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { id } = route.params;

  useEffect(() => {
    const fetchBangDetail = async (id: number) => {
      await bangDetail(id).then((res) => setBang(res));
    };
    fetchBangDetail(id);
  }, []);

  const [bang, setBang] = useState<BangDetailType>();

  interface ProfileType {
    [key: number]: any;
  }

  const profileImages: ProfileType = {
    1: require('../../../assets/1.png'),
    2: require('../../../assets/2.png'),
    3: require('../../../assets/3.png'),
    4: require('../../../assets/4.png'),
  };

  const onShare = async () => {
    try {
      const url = await Linking.getInitialURL();
      await Share.share({
        message: url || 'No URL available',
      });
    } catch (error) {
      console.log('Error sharing URL', error);
    }
  };

  const onPressModalOpen = () => {
    console.log('팝업을 여는 중입니다.');
    setIsModalVisible(true);
  };

  const onPressModalClose = () => {
    setIsModalVisible(false);
  };

  const onPressBangDelete = async () => {
    try {
      setIsModalVisible(false);
      await bangDelete(id);
      setTimeout(() => {
        navigation.navigate('BangSearch');
      }, 1000);
    } catch (error) {
      console.log('챌린징 모집글 삭제 요청 중 에러발생');
    }
  };

  return (
    <>
      {bang && (
        <Container>
          <RowContainer>
            <Title>챌린지 모임모임</Title>
            <Pressable onPress={onShare}>
              <Icon name="link" size={20} color="#4A4A4A" />
            </Pressable>
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
                  source={profileImages[member?.memberProfile]}
                  width={50}
                  height={50}
                ></StyledImage>
                <ParticipantName>{member.memberName}</ParticipantName>
              </ParticipantContainer>
            ))}
          </BangParticipantContainer>
          {bang.admin ? (
            <ButtonContainer>
              <DeleteButton
                onPress={() => {
                  onPressModalOpen();
                }}
              >
                <EnterText>삭제하기</EnterText>
              </DeleteButton>
              <StartButton>
                <EnterText>시작하기</EnterText>
              </StartButton>
            </ButtonContainer>
          ) : (
            <EnterButton
              status={bang.status}
              disabled={bang.status !== 0}
              onPress={() => {
                if (bang.status === 0) {
                  navigation.navigate('BangJoin', { bang: bang.id });
                }
              }}
            >
              <EnterText>
                {bang.status === 0
                  ? '입장하기'
                  : bang.status === 1
                    ? '챌린지 시작 대기중 입니다...'
                    : '이미 진행중인 챌린지입니다.'}
              </EnterText>
            </EnterButton>
          )}
          <CustomModal
            isVisible={isModalVisible}
            onClose={onPressModalClose}
            text={'챌린지 모집글을 삭제하시겠습니까?'}
          >
            <ModalButton onPress={onPressBangDelete}>
              <ModalButtonText>확인</ModalButtonText>
            </ModalButton>
          </CustomModal>
        </Container>
      )}
    </>
  );
}
