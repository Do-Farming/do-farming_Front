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
import Carousel from 'react-native-sna  p-carousel';
import {
  Container,
  Header,
  Row,
  Username,
  InfoText,
  MainProduct,
  Product,
  Button,
  ButtonText,
  ProductImgView,
  PaginationContainer,
  PaginationDot,
  DescriptionTexts,
  DescriptionSmallTexts,
  RowCenter,
  HanaSubtitle,
  HanaTitle,
  HanaTextContainer,
  HanaCard,
  HanaPageNumber,
  HanaPaginationButton,
  HanaPaginationContainer,
  Product2,
  Product3
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
      require("../../assets/hanafolder/moneydream.png")
    ],
    descriptrions:{
      text:"여름! 돈기운 상점 오픈",
      text1:"진짜 금을 준다고?",
      text2:"황금 베개 응모 꾹!"
    },
  },
  {
    images: [
      require("../../assets/hanafolder/security.png")
    ],
    descriptrions:{
      text:"무서운 보이스피싱",
      text1:"하나가 지켜드려요!",
      text2:"#사이버금융범죄"
    },
  },
  {
    images: [
      require("../../assets/hanafolder/walletSoccer.png")
    ],
    descriptrions:{
      text:"우승 적금 출시 기념",
      text1:"최애 축구팀 응원하고",
      text2:"금리와 경품을 동시에"
    },
  },
  {
    images: [
      require("../../assets/hanafolder/girl.png")
    ],
    descriptrions:{
      text:"소중한 내 월급!",
      text1:"매달 더해지는 달달함까지",
      text2:"#100만 하나머니"
    },
  },{
    images: [
      require("../../assets/hanafolder/kid.png")
    ],
    descriptrions:{
      text:"우리아이 용돈관리 공식",
      text1:"아이부자 출시 3주년",
      text2:"매일매일 경품 추첨!"
    },
  },
  {
    images: [
      require("../../assets/hanafolder/money.png")
    ],
    descriptrions:{
      text:"비상금 대출 이벤트",
      text1:"비상금 충전하고",
      text2:"하나머니 혜택까지"
    },
  },
  {
    images: [
      require("../../assets/hanafolder/ballon.png")
    ],
    descriptrions:{
      text:"혜택 알림 신청",
      text1:"알아서 쓱 날아오는",
      text2:"풍성한 혜택"
    },
  },
  {
    images: [
      require("../../assets/hanafolder/twosome.png")
    ],
    descriptrions:{
      text:"7월 1일은 하나데이~",
      text1:"애플망고 빙수+커피 2잔",
      text2:"랜덤 하나머니 100% 당첨"
    },
  },
  {
    images: [
      require("../../assets/hanafolder/soccer.png")
    ],
    descriptrions:{
      text:"하나원큐 축구Play",
      text1:"매일매일 미션 참여하고",
      text2:"매일매일 원큐볼 받자!"
    },
  },
  {
    images: [
      require("../../assets/hanafolder/travel.png")
    ],
    descriptrions:{
      text:"해외송금 이벤트!",
      text1:"지정만 해도 헤택이",
      text2:"#3만 하나머니"
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


export default function HanaMain() {
  const [selectedCardType, setSelectedCardType] = useState("check");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
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
    setCurrentIndex2(index);
  };
  return (
    <Container>
      <Header>
        <Row>
          <Username>로그인</Username>
        </Row>
      </Header>
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
                  <HanaTitle>{item.descriptrions.text}</HanaTitle>
                  <HanaSubtitle>{item.descriptrions.text1}</HanaSubtitle>
                  <HanaSubtitle>{item.descriptrions.text2}</HanaSubtitle>
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
      <MainProduct>
        <Product3>
            <HanaCard>
              <HanaTextContainer>
                <HanaTitle>적립식 이율 적금</HanaTitle>
                <HanaSubtitle>MZ를 위한 예금 상품</HanaSubtitle>
                <HanaSubtitle>최대 8% 이율</HanaSubtitle>
              </HanaTextContainer>
              <Image source={require("../../assets/ch.png") }style={{ width: 100, height: 100 }} />
            </HanaCard>
          </Product3>
      </MainProduct>
    </Container>
  );
}