import { Header } from './BangJoinScreen.styled';
import React, { useEffect, useState } from 'react';
import { SelectBoxType } from '../../../types/BangTypes';
import CustomModal from '../../../components/CustomModal/CustomModal';
import {
  ModalButton,
  ModalButtonText,
} from '../bangCreate/BangCreateScreen.styled';
import { getChecking } from '../../../apis/accountService';
import {
  CheckingAccount,
  JoinDofarmingType,
} from '../../../types/account/AccountTypes';
import { ScrollView, Text } from 'react-native';
import {
  AmountContainer,
  BenefitContainer,
  BenefitText1,
  BenefitText2,
  Container,
  GreenBackground,
  HighlightedText,
  InterestRateContainer,
  InterestRateText,
  ProductName,
  Section,
  SignUpButton,
  SignUpButtonText,
  SmallText,
  SubHeader,
  YellowBackground,
} from '../../product/ProductSignUpScreen.styled';

export default function BangJoinScreen({ navigation, route }: any) {
  const [myChecking, setMyChecking] = useState<CheckingAccount[]>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { bang } = route.params;

  useEffect(() => {
    const fetchMyChecking = async () => {
      await getChecking().then((res) => setMyChecking(res));
    };
    fetchMyChecking();
  }, []);

  const onPressBangJoin = () => {
    setIsModalVisible(false);
    navigation.navigate('BangJoin2', { bang: bang });
  };

  const onPressModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <YellowBackground>
          <Header>오늘의 챌린지는?</Header>
          <Header>금융 공부도 하고 건강도 챙기고!</Header>
          <SubHeader>Do! Farming 상품</SubHeader>
          <InterestRateContainer>
            <SmallText>연(세전, 1년)</SmallText>
            <InterestRateText>최고 6.0%</InterestRateText>
          </InterestRateContainer>
        </YellowBackground>
        <Section>
          <ProductName>나의 예상 혜택</ProductName>
          <BenefitContainer>
            <AmountContainer>
              <Text>만기금액</Text>
              <BenefitText1>10,350,000원</BenefitText1>
            </AmountContainer>
            <AmountContainer>
              <Text>적용금리</Text>
              <BenefitText1>연 3.50%</BenefitText1>
            </AmountContainer>
          </BenefitContainer>
          <BenefitText2>
            <HighlightedText>10,000,000원</HighlightedText> 을{'\n'}
            <HighlightedText> 12개월 </HighlightedText>
            동안 저축하기
          </BenefitText2>
        </Section>
      </ScrollView>
      <SignUpButton
        onPress={() => {
          setIsModalVisible(true);
        }}
      >
        <SignUpButtonText>가입 신청하기</SignUpButtonText>
      </SignUpButton>

      <CustomModal
        isVisible={isModalVisible}
        onClose={onPressModalClose}
        text={'도파밍 상품가입을 진행합니다.'}
      >
        <ModalButton onPress={onPressBangJoin}>
          <ModalButtonText>확인</ModalButtonText>
        </ModalButton>
      </CustomModal>
    </Container>
  );
}
