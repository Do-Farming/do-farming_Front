// HomeScreen.js
import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, Image, View, FlatList } from "react-native";
import {
  Container,
  Header,
  Row,
  TextNormal,
  Username,
  InfoText,
  MainProduct,
  Product,
  ProductName,
  ProductInfo,
  CardImg,
  CardContainer,
  CardInfo,
  Button,
  ButtonText,
  CardList,
  CardBenefitList,
  CardBenefitImg,
  CardBenefit,
  ProductImgView,
  CardBenefitTextView,
  CardBenefitText,
  PaginationContainer,
  PaginationDot,
  InterestRateContainer,
  InterestRateText,
} from "./HomeScreen.styled";

const products = [
  {
    name: "도파밍 예금",
    images: [
      require("../../assets/dofarmingProduct/clock.png"),
      require("../../assets/dofarmingProduct/running.png"),
      require("../../assets/dofarmingProduct/quiz.png"),
    ],
    interestRate: {
      max: "6.0%",
      min: "1.0%"
    },
    description: "랜덤 미션을 수행하고 이자를 뺏자!",
  },
  {
    name: "고단위 플러스",
    images: [],
    interestRate: {
      max: "2.6%",
      min: "2.6%"
    },
    description: "이자 지급 방법도 내 맘대로! 이자 지급 시기도 내 맘대로!",
  },
  {
    name: "정기예금",
    images: [],
    interestRate: {
      max: "2.8%",
      min: "2.8%"
    },
    description: "목돈을 일정기간 동안 예치하여 안정적인 수익을 추구하는 예금",
  },
];

const Pagination: React.FC<{ length: number; currentIndex: number }> = ({
  currentIndex,
}) => (
  <PaginationContainer>
    {Array.from({ length: products.length }, (_, index) => (
      <PaginationDot key={index} isActive={index === currentIndex} />
    ))}
  </PaginationContainer>
);

const CheckCardList = () => (
  <CardContainer>
    <CardImg source={require("../../assets/card.png")} />
    <CardInfo>
      <InfoText>PAYCO 체크카드</InfoText>
      <CardBenefitList>
        <CardBenefit>
          <Image
            source={{
              uri: "https://api.card-gorilla.com:8080/storage/benefit/127/logo_img/991/ico_cafe.png",
            }}
          />
          <CardBenefitTextView>
            <CardBenefitText>1000마일당</CardBenefitText>
            <CardBenefitText>1000마일당</CardBenefitText>
          </CardBenefitTextView>
        </CardBenefit>
        <CardBenefit>
          <CardBenefitImg
            source={{
              uri: "https://api.card-gorilla.com:8080/storage/benefit/127/logo_img/991/ico_cafe.png",
            }}
          />
          <CardBenefitTextView>
            <CardBenefitText>1000마일당</CardBenefitText>
            <CardBenefitText>1000마일당</CardBenefitText>
          </CardBenefitTextView>
        </CardBenefit>
        <CardBenefit>
          <CardBenefitImg
            source={{
              uri: "https://api.card-gorilla.com:8080/storage/benefit/127/logo_img/991/ico_cafe.png",
            }}
          />
          <CardBenefitTextView>
            <CardBenefitText>1000마일당</CardBenefitText>
            <CardBenefitText>1000마일당</CardBenefitText>
          </CardBenefitTextView>
        </CardBenefit>
      </CardBenefitList>
    </CardInfo>
  </CardContainer>
);

const CreditCardList = () => (
  <CardContainer>
    <CardImg source={require("../../assets/card.png")} />
    <CardInfo>
      <InfoText>삼성 신용카드</InfoText>
      <TextNormal>삼성카드</TextNormal>
    </CardInfo>
  </CardContainer>
);

export default function HomeScreen() {
  const [selectedCardType, setSelectedCardType] = useState("check");
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Delayed scrolling logic
    const scrollTimeout = setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ animated: true, index: currentIndex });
      }
    }, 300);

    return () => clearTimeout(scrollTimeout);
  }, [currentIndex]);

  return (
    <Container>
      <Header>
        <Row>
          <TextNormal>안녕하세요 </TextNormal>
          <Username>홍길동</Username>
          <TextNormal> 님</TextNormal>
        </Row>
      </Header>
      <InfoText>주요 상품</InfoText>
      <MainProduct>
        <FlatList
          ref={flatListRef}
          data={products}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={( item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Product key={index}>
              <ProductName>{item.name}</ProductName>
              <InterestRateContainer>
                <InterestRateText>
                  최소 {item.interestRate.min} ~ 최대 {item.interestRate.max}
                </InterestRateText>
              </InterestRateContainer>
              <ProductImgView>
                <Image source={item.images[0]} />
                <Image source={item.images[1]} />
                <Image source={item.images[2]} />
              </ProductImgView>
              <ProductInfo>{item.description}</ProductInfo>
            </Product>
          )}
        />
        <Pagination length={products.length} currentIndex={currentIndex} />
      </MainProduct>
      <InfoText>💳 요즘 가장 인기있는 카드에요!</InfoText>
      <Row>
        <TouchableOpacity onPress={() => setSelectedCardType("check")}>
          <Button isSelected={selectedCardType === "check"}>
            <ButtonText isSelected={selectedCardType === "check"}>
              체크카드
            </ButtonText>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCardType("credit")}>
          <Button isSelected={selectedCardType === "credit"}>
            <ButtonText isSelected={selectedCardType === "credit"}>
              신용카드
            </ButtonText>
          </Button>
        </TouchableOpacity>
      </Row>
      <CardList>
        {selectedCardType === "check" ? (
          <View>
            <CheckCardList />
            <CheckCardList />
          </View>
        ) : (
          <View>
            <CreditCardList />
            <CreditCardList />
          </View>
        )}
      </CardList>
    </Container>
  );
}