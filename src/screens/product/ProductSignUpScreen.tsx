import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import {
  AmountContainer,
  BenefitContainer,
  BenefitText1,
  BenefitText2,
  Container,
  GreenBackground,
  Header,
  HighlightedText,
  InterestRateContainer,
  InterestRateText,
  ProductName,
  Section,
  SignUpButtonText,
  SignUpGreenButton,
  SmallText,
  SubHeader,
} from './ProductSignUpScreen.styled';
import {
  JoinCheckingType,
} from '../../types/account/AccountTypes';

const ProductSignUpScreen: React.FC = ({ navigation }: any) => {
  const [joinChecking, setJoinChecking] = useState<JoinCheckingType>({
    branchCode: '111',
    accountName: '달달하나 입출금 통장',
    accountPassword: '',
    balance: 0,
    accountCode: '',
  });
  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <GreenBackground>
          <Header>오늘의 금리는?</Header>
          <Header>기간도 금액도 자유롭게</Header>
          <SubHeader>달달하나 입출금통장</SubHeader>
          <InterestRateContainer>
            <SmallText>연(세전, 1년)</SmallText>
            <InterestRateText>최고 3.50%</InterestRateText>
          </InterestRateContainer>
        </GreenBackground>
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
            <HighlightedText>12개월 </HighlightedText>
            동안 저축하기
          </BenefitText2>
        </Section>
      </ScrollView>
      <SignUpGreenButton
        onPress={() => {
          const bang = null;
          const from = 'ProductSignUp';
          navigation.navigate('ProductPassword', {
            joinDofarming: joinChecking,
            bang,
            from,
          });
        }}
      >
        <SignUpButtonText>가입 신청하기</SignUpButtonText>
      </SignUpGreenButton>
    </Container>
  );
};

export default ProductSignUpScreen;
