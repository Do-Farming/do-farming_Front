import React, { useState, useEffect } from 'react';
import {
  BoardContainer,
  Container,
  EnterButton,
  EnterText,
  Input,
  InputContainer,
  InputTitle,
  ModalButton,
  ModalButtonText,
  TextArea,
  Title,
} from './BangCreateScreen.styled';
import DropDownPicker from 'react-native-dropdown-picker';
import debounce from 'lodash/debounce';
import {
  disclosureList,
  recruitNumList,
  wakeupTimeList,
} from '../../../constants/SelectBox';
import CustomModal from '../../../components/CustomModal/CustomModal';
import { bangCreate } from '../../../apis/bangService';
import { BangType, SelectBoxType } from '../../../types/BangTypes';
import { InfoText } from '../bangJoin/BangJoinScreen.styled';
import { getChecking } from '../../../apis/accountService';
import { CheckingAccount } from '../../../types/account/AccountTypes';
import { accountList } from '../../../mocks/userAccount';

export default function BangCreateScreen({ navigation }: any) {
  const [personOpen, setPersonOpen] = useState(false);
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const [waketimeOpen, setWaketimeOpen] = useState(false);

  const [myChecking, setMyChecking] = useState<CheckingAccount[]>();
  const [userAccountList, setUserAccountList] = useState<SelectBoxType[]>([]);

  const [accountOpen, setAccountOpen] = useState<boolean>(false);
  const [outAccount, setOutAccount] = useState<string>('');

  const debouncedSetBang = debounce((name, value) => {
    setBang((prevBang) => ({
      ...prevBang,
      [name]: value,
    }));
  }, 300);

  const handleInputChange = (
    name: string,
    value: string | boolean | number,
  ) => {
    debouncedSetBang(name, value);
  };

  const [recruitNum, setRecruitNum] = useState<number>(0);
  const [wakeupTime, setWakeupTime] = useState<string>('');
  const [disclosure, setDisclosure] = useState<boolean>(false);

  const [bang, setBang] = useState<BangType>({
    groupName: '',
    groupNumber: recruitNum,
    title: '',
    desc: '',
    wakeupTime: wakeupTime,
    isPublic: disclosure,
  });

  useEffect(() => {
    setBang((prevBang) => ({
      ...prevBang,
      groupNumber: recruitNum,
      wakeupTime: wakeupTime,
      isPublic: disclosure,
    }));
  }, [recruitNum, wakeupTime, disclosure]);

  useEffect(() => {
    const fetchMyChecking = async () => {
      await getChecking().then((res) => setMyChecking(res));
    };
    fetchMyChecking();
  }, []);

  useEffect(() => {
    if (myChecking && myChecking.length > 0) {
      const updatedUserAccountList = myChecking.map((element) => ({
        label: `하나은행 ${element.accountNumber}`,
        value: element.accountNumber,
      }));
      setUserAccountList(updatedUserAccountList);
    }
  }, [myChecking]);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onPressModalOpen = () => {
    console.log('팝업을 여는 중입니다.');
    setIsModalVisible(true);
  };

  const onPressModalClose = () => {
    setIsModalVisible(false);
  };

  const onPressBangCreate = () => {
    bangCreate(bang);
    setIsModalVisible(false);
    navigation.navigate('ProductPassword');
  };

  return (
    <Container>
      <Title>챌린지 모임모임 생성</Title>
      <BoardContainer style={{ zIndex: 1000 }}>
        <InputContainer>
          <InputTitle>제목</InputTitle>
          <Input
            placeholder="제목을 입력하세요"
            onChangeText={(text) => handleInputChange('title', text)}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>모집글</InputTitle>
          <TextArea
            placeholder="모집글 내용을 입력하세요"
            numberOfLines={10}
            multiline
            editable
            onChangeText={(text) => handleInputChange('desc', text)}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>그룹명</InputTitle>
          <Input
            placeholder="그룹명을 입력하세요"
            onChangeText={(text) => handleInputChange('groupName', text)}
          />
        </InputContainer>
        <InputContainer style={{ zIndex: 3000 }}>
          <InputTitle>모집인원</InputTitle>
          <DropDownPicker
            open={personOpen}
            value={recruitNum}
            items={recruitNumList}
            setValue={setRecruitNum}
            setOpen={setPersonOpen}
            placeholder="모집인원을 선택하세요"
            listMode="SCROLLVIEW"
            maxHeight={100}
            closeOnBackPressed={true}
            stickyHeader={true}
            placeholderStyle={{ color: '#CCCCCC' }}
            style={{
              backgroundColor: '#f2f2f5',
              borderWidth: 0,
            }}
            dropDownContainerStyle={{
              borderWidth: 1,
              borderColor: '#EEEEEE',
              zIndex: 4000,
            }}
          />
        </InputContainer>
        <InputContainer style={{ zIndex: 2000 }}>
          <InputTitle>기상시간</InputTitle>
          <DropDownPicker
            open={waketimeOpen}
            value={wakeupTime}
            items={wakeupTimeList}
            setOpen={setWaketimeOpen}
            setValue={setWakeupTime}
            placeholder="기상시간을 선택하세요"
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
              zIndex: 3000,
            }}
          />
        </InputContainer>
        <InputContainer style={{ zIndex: 1000 }}>
          <InputTitle>공개여부</InputTitle>
          <DropDownPicker
            open={disclosureOpen}
            value={disclosure}
            items={disclosureList}
            setOpen={setDisclosureOpen}
            setValue={setDisclosure}
            placeholder="공개여부를 선택하세요"
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
      </BoardContainer>
      <BoardContainer style={{ zIndex: 1000 }}>
        <InputContainer style={{ zIndex: 1000 }}>
          {accountList && (
            <>
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
            </>
          )}
        </InputContainer>
        <InfoText>🚨 상품 가입 금액은 1,000,000원 입니다.</InfoText>
      </BoardContainer>

      <EnterButton onPressOut={onPressModalOpen} style={{ zIndex: 500 }}>
        <EnterText>생성하기</EnterText>
      </EnterButton>
      <CustomModal
        isVisible={isModalVisible}
        onClose={onPressModalClose}
        text={'해당 상품의 계좌 비밀번호 설정페이지로 이동합니다.'}
      >
        <ModalButton onPress={onPressBangCreate}>
          <ModalButtonText>확인</ModalButtonText>
        </ModalButton>
      </CustomModal>
    </Container>
  );
}
