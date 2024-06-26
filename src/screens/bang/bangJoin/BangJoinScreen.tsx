import DropDownPicker from 'react-native-dropdown-picker';
import {
  BoardContainer,
  Container,
  InfoText,
  InputContainer,
  InputTitle,
} from './BangJoinScreen.styled';
import React, { useState } from 'react';
import { SelectBoxType } from '../../../types/BangTypes';
import CustomModal from '../../../components/CustomModal/CustomModal';
import {
  EnterButton,
  EnterText,
  ModalButton,
  ModalButtonText,
} from '../bangCreate/BangCreateScreen.styled';
import { accountList } from '../../../mocks/userAccount';

export default function BangJoinScreen({ navigation }: any) {
  const [accountOpen, setAccountOpen] = useState<boolean>(false);
  const [outAccount, setOutAccount] = useState<string>('');

  const userAccountList: SelectBoxType[] = accountList.map((element) => ({
    label: `하나은행 ${element.accCode}`,
    value: element.accCode,
  }));

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onPressModalOpen = () => {
    console.log('팝업을 여는 중입니다.');
    setIsModalVisible(true);
  };

  const onPressBangJoin = () => {
    setIsModalVisible(false);
    navigation.navigate('BangDetail');
  };

  const onPressModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <BoardContainer>
        <InputContainer style={{ zIndex: 1000 }}>
          <InputTitle>출금할 계좌를 선택해주세요.</InputTitle>
          <DropDownPicker
            open={accountOpen}
            value={outAccount}
            items={userAccountList}
            setOpen={setAccountOpen}
            setValue={setOutAccount}
            placeholder="출금 계좌를 선택하세요"
            listMode="SCROLLVIEW"
            maxHeight={100}
            dropDownDirection="BOTTOM"
            placeholderStyle={{ color: '#CCCCCC' }}
            style={{
              backgroundColor: '#f2f2f5',
              borderWidth: 0,
            }}
            dropDownContainerStyle={{
              borderWidth: 1,
              borderColor: '#EEEEEE',
              zIndex: 2000,
            }}
          />
        </InputContainer>
        <InfoText>🚨 상품 가입 금액은 1,000,000원 입니다.</InfoText>
      </BoardContainer>
      <EnterButton onPressOut={onPressModalOpen} style={{ zIndex: 500 }}>
        <EnterText>입장하기</EnterText>
      </EnterButton>
      <CustomModal
        isVisible={isModalVisible}
        onClose={onPressModalClose}
        text={'정보 입력이 완료되었습니다!'}
      >
        <ModalButton onPress={onPressBangJoin}>
          <ModalButtonText>확인</ModalButtonText>
        </ModalButton>
      </CustomModal>
    </Container>
  );
}
