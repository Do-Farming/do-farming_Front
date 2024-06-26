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

export default function BangCreateScreen() {
  const [personOpen, setPersonOpen] = useState(false);
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const [waketimeOpen, setWaketimeOpen] = useState(false);

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

  const [recruitNum, setRecruitNum] = useState(null);
  const [wakeupTime, setWakeupTime] = useState(null);
  const [disclosure, setDisclosure] = useState(null);

  const [bang, setBang] = useState({
    groupName: null,
    groupNumber: recruitNum,
    title: null,
    desc: null,
    wakeupTime: wakeupTime,
    public: disclosure,
  });

  useEffect(() => {
    setBang((prevBang) => ({
      ...prevBang,
      groupNumber: recruitNum,
      wakeupTime: wakeupTime,
      public: disclosure,
    }));
  }, [recruitNum, wakeupTime, disclosure]);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onPressModalOpen = () => {
    console.log('팝업을 여는 중입니다.');
    setIsModalVisible(true);
  };

  const onPressModalClose = () => {
    setIsModalVisible(false);
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

      <EnterButton onPressOut={onPressModalOpen} style={{ zIndex: 500 }}>
        <EnterText>입장하기</EnterText>
      </EnterButton>
      <CustomModal
        isVisible={isModalVisible}
        onClose={onPressModalClose}
        text={'챌린지 시작 전 \n상품 가입을 진행합니다.'}
      >
        <ModalButton onPress={onPressModalClose}>
          <ModalButtonText>확인</ModalButtonText>
        </ModalButton>
      </CustomModal>
    </Container>
  );
}
