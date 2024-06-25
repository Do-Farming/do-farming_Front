import React, { useEffect, useState } from 'react';

import {
  BoardContainer,
  Container,
  EnterButton,
  EnterText,
  Input,
  InputContainer,
  InputTitle,
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

export default function BangCreateScreen() {
  const [personOpen, setPersonOpen] = useState(false);
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const [waketimeOpen, setWaketimeOpen] = useState(false);

  const debouncedSetBang = debounce(
    (name: string, value: string | number | boolean) => {
      setBang((prevBang) => ({
        ...prevBang,
        [name]: value,
      }));
    },
    300,
  );

  const handleInputChange = (
    name: string,
    value: string | number | boolean,
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

  return (
    <Container>
      <Title>챌린지 모임모임 생성</Title>
      <BoardContainer style={{ zIndex: 100 }}>
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
            closeOnBackPressed={true}
            stickyHeader={true}
            zIndex={3000}
            maxHeight={100}
            placeholderStyle={{ color: '#CCCCCC' }}
            style={{
              backgroundColor: '#EEEEEE',
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
            dropDownDirection="BOTTOM"
            maxHeight={100}
            closeOnBackPressed={true}
            placeholderStyle={{ color: '#CCCCCC' }}
            style={{
              backgroundColor: '#EEEEEE',
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
            dropDownDirection="BOTTOM"
            closeOnBackPressed={true}
            placeholderStyle={{ color: '#CCCCCC' }}
            style={{
              backgroundColor: '#EEEEEE',
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
      <EnterButton>
        <EnterText>입장하기</EnterText>
      </EnterButton>
    </Container>
  );
}
