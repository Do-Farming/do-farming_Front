import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
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
  SignUpButton,
  SignUpButtonText,
  SmallText,
  SubHeader,
} from './ProductSignUpScreen.styled';

const ProductSignUpScreen: React.FC = () => {
  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <GreenBackground>
          <Header>오늘의 금리는?</Header>
          <Header>기간도 금액도 자유롭게</Header>
          <SubHeader>급여하나 월복리 적금</SubHeader>
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
            <HighlightedText> 12개월 </HighlightedText>
            동안 저축하기
          </BenefitText2>
        </Section>
      </ScrollView>
      <SignUpButton
        onPress={() => {
          /* 상품가입 로직 */
        }}
      >
        <SignUpButtonText>가입 신청하기</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
};

export default ProductSignUpScreen;
