// HomeScreen.js
import React, { useState, useEffect, useRef } from "react";
import {
  TouchableOpacity, Text, 
  Image,
  View,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import Carousel from 'react-native-sna p-carousel';
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
  CardName,
  DescriptionTexts,
  DescriptionSmallTexts,
  CardImgView,
  CardListView,
  CardBenefitSmallText,
  RowCenter,
  HanaSubtitle,
  HanaTitle,
  HanaTextContainer,
  HanaCard,
  HanaPageNumber,
  HanaPaginationButton,
  HanaPaginationContainer,
  Product2
} from "./HomeScreen.styled";
import axios from "axios";

const { width: windowWidth } = Dimensions.get("window");

const products2 = [
  {
    images: [
      require("../../assets/hanamain1.png"),
      require("../../assets/arrow.png")
    ],
    descriptrions:{
      text1:"로그인하고 안전하게",
      text2:"잔액을 조회하세요"
    },
    interestRate: {
      max: "가져오기",
      min: "1.0%",
    },
    btnText: {
      option1: "가져오기",
      option2: "보내기",
    }
  },
  {
    images: [
      require("../../assets/hanamain2.png"),
      require("../../assets/arrow.png")
    ],
    descriptrions:{
      text1:"마이데이터로 스마트하게",
      text2:"자산을 관리하세요"
    },
    interestRate: {
      max: "가져오기",
      min: "1.0%",
    },
    btnText: {
      option1: "자산 등록",
      option2: "보내기",
    }
  },
  {
    images: [
      require("../../assets/hanamain3.png"),
      require("../../assets/arrow.png")
    ],
    descriptrions:{
      text1:"로그인하고 안전하게",
      text2:"잔액을 조회하세요"
    },
    interestRate: {
      max: "가져오기",
      min: "1.0%",
    },
    btnText: {
      option1: "가져오기",
      option2: "보내기",
    }
  },
  {
    images: [
      require("../../assets/hanamain4.png"),
      require("../../assets/arrow.png")
    ],
    descriptrions:{
      text1:"로그인하고 안전하게",
      text2:"잔액을 조회하세요"
    },
    interestRate: {
      max: "가져오기",
      min: "1.0%",
    },
    btnText: {
      option1: "가져오기",
      option2: "보내기",
    }
  },
];

const products = [
  {
    images: [
      require("../../assets/hanamain1.png"),
      require("../../assets/arrow.png")
    ],
    descriptrions:{
      text1:"로그인하고2 안전하게",
      text2:"잔액을 조회하세요"
    },
  },
  {
    images: [
      require("../../assets/hanamain2.png"),
      require("../../assets/arrow.png")
    ],
    descriptrions:{
      text1:"로그인하고 안전하게",
      text2:"잔액을 조회하세요"
    },
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

const Pagination2: React.FC<{ length: number; currentIndex2: number }> = ({
  currentIndex2,
}) => (
  <PaginationContainer>
        <PaginationDot isActive={true} index={currentIndex2} />
  </PaginationContainer>
);


export default function HomeScreen() {
  const [selectedCardType, setSelectedCardType] = useState("check");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [creditCardList, setCreditCardList] = useState([]);
  const [checkCardList, setCheckCardList] = useState([]);
  const flatListRef = useRef<FlatList>(null);
  const flatListRef2 = useRef<FlatList>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          animated: true,
          index: currentIndex,
        });
      }
    }, 120);

    return () => clearTimeout(scrollTimeout);
  }, [currentIndex]);

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / windowWidth);
    setCurrentIndex(index);
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };
  const handleMomentumScrollEnd2 = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / windowWidth);
    setCurrentIndex(index);
  };
  return (
    <Container>
      <Header>
        <Row>
          <Username>로그인</Username>
        </Row>
      </Header>
      <InfoText>주요 상품</InfoText>
      <MainProduct>
        <FlatList
          ref={flatListRef2}
          data={products2}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Product2 key={index}>
              <DescriptionSmallTexts>{item.descriptrions.text1}</DescriptionSmallTexts>
              <RowCenter>
                <DescriptionTexts>{item.descriptrions.text2}</DescriptionTexts>
                  <Image 
                        style={{ width: 20, height: 15 }}
                        source={item.images[1]} />
              </RowCenter>
              <ProductImgView >
                <Image 
                      style={{ width: 125, height: 100 }}
                      source={item.images[0]} />
              </ProductImgView>
              <Row>
                <Button width="50%" backgroundColor="#EFF0F4"> 
                  <ButtonText>
                    {item.btnText.option1}
                  </ButtonText>
                </Button>
                <Button width="50%" backgroundColor="#1EA698"> 
                  <ButtonText color="white">
                    {item.btnText.option2}
                  </ButtonText>
                </Button>
                </Row>
            </Product2>
          )}
          onMomentumScrollEnd={handleMomentumScrollEnd2}
        />
        <Pagination2 length={products2.length} currentIndex2={currentIndex2} />
      </MainProduct>
      <MainProduct>
        <FlatList
          ref={flatListRef}
          data={products}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Product key={index}>
              <HanaCard>
                <HanaTextContainer>
                  <HanaTitle>혜택 알림 신청</HanaTitle>
                  <HanaSubtitle>알아서 쏙 날아오는 풍성한 혜택</HanaSubtitle>
                  <HanaPaginationContainer>
                    <HanaPaginationButton onPress={handlePrev}>
                      <Text>{'<'}</Text>
                    </HanaPaginationButton>
                    <HanaPageNumber>{`${currentIndex + 1} / ${products.length}`}</HanaPageNumber>
                    <HanaPaginationButton onPress={handleNext}>
                      <Text>{'>'}</Text>
                    </HanaPaginationButton>
                </HanaPaginationContainer>
                </HanaTextContainer>
                <Image source={item.images[0]} style={{ width: 100, height: 100 }} />
              </HanaCard>
            </Product>
          )}
          onMomentumScrollEnd={handleMomentumScrollEnd}
        />
      </MainProduct>
    </Container>
  );
}