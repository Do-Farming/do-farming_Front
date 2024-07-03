// HomeScreen.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
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
  CardBenefitImportantText,
  CardImgView,
  CardListView,
  CardBenefitSmallText,
  SafeAreaView,
} from './HomeScreen.styled';
import axios from 'axios';
import CardImage from '../../components/CardImage/CardImage';
import { useAuth } from '../../contexts/authContext';

const { width: windowWidth } = Dimensions.get('window');

const products = [
  {
    name: '도파밍 예금',
    images: [
      require('../../assets/dofarmingProduct/clock.png'),
      require('../../assets/dofarmingProduct/running.png'),
      require('../../assets/dofarmingProduct/quiz.png'),
    ],
    interestRate: {
      max: '6.0%',
      min: '1.0%',
    },
    description: '랜덤 미션을 수행하고 이자를 뺏자!',
  },
  {
    name: '고단위 플러스',
    images: [],
    interestRate: {
      max: '2.6%',
      min: '2.6%',
    },
    description: '이자 지급 방법도 내 맘대로! 이자 지급 시기도 내 맘대로!',
  },
  {
    name: '정기예금',
    images: [],
    interestRate: {
      max: '2.8%',
      min: '2.8%',
    },
    description: '목돈을 일정기간 동안 예치하여 안정적인 수익을 추구하는 예금',
  },
];

const Pagination: React.FC<{ length: number; currentIndex: number }> =
  React.memo(({ length, currentIndex }) => (
    <PaginationContainer>
      {Array.from({ length }, (_, index) => (
        <PaginationDot key={index} isActive={index === currentIndex} />
      ))}
    </PaginationContainer>
  ));

const CardList = React.memo(
  ({ SelectedCardList }: { SelectedCardList: any[] }) => (
    <>
      {SelectedCardList.map((card, index) => (
        <CardContainer key={index}>
          <CardImage
            uri={`https://d1c5n4ri2guedi.cloudfront.net${card.card_img}`}
            ImgHeight={75}
            ImgWidth={50}
          />
          <CardInfo>
            <CardName numberOfLines={1} ellipsizeMode="tail">
              {card.name}
            </CardName>
            <CardBenefitList>
              {card.top_benefit.map((benefit: any, benefitIndex: number) => {
                return (
                  <CardBenefit key={benefitIndex}>
                    <CardImgView>
                      <CardBenefitImg
                        source={{ uri: benefit.logo_img.url }}
                        style={{ width: 30, height: 30 }}
                      />
                    </CardImgView>
                    <CardBenefitTextView>
                      <CardBenefitSmallText>
                        {benefit.tags[0]}
                      </CardBenefitSmallText>
                      <>
                        <CardBenefitImportantText>
                          {benefit.tags[1]}
                        </CardBenefitImportantText>
                        <CardBenefitText>{benefit.tags[2]}</CardBenefitText>
                      </>
                    </CardBenefitTextView>
                  </CardBenefit>
                );
              })}
            </CardBenefitList>
          </CardInfo>
        </CardContainer>
      ))}
    </>
  ),
);

export default function HomeScreen() {
  const [selectedCardType, setSelectedCardType] = useState('check');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [creditCardList, setCreditCardList] = useState([]);
  const [checkCardList, setCheckCardList] = useState([]);
  const flatListRef = useRef<FlatList>(null);

  /* Test Code ... */
  const { isLogin } = useAuth();
  useEffect(() => {
    console.log('isLogin:', isLogin);
  }, [isLogin]);
  /* ... Test Code */

  useEffect(() => {
    async function getCardChart(CardAmount: number) {
      const today = new Date();

      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');

      const formattedDate = `${year}-${month}-${day}`;
      try {
        const [creditCardsResponse, checkCardsResponse] = await Promise.all([
          axios.get(
            `https://api.card-gorilla.com:8080/v1/charts/ranking?date=${formattedDate}&term=weekly&card_gb=CRD&limit=${CardAmount}&chart=top100&idx=&idx2=`,
          ),
          axios.get(
            `https://api.card-gorilla.com:8080/v1/charts/ranking?date=${formattedDate}&term=weekly&card_gb=CHK&limit=${CardAmount}&chart=top100&idx=&idx2=`,
          ),
        ]);

        const creditCardData = creditCardsResponse.data.map((card: any) => ({
          ...card,
          top_benefit: JSON.parse(card.top_benefit),
        }));

        const checkCardData = checkCardsResponse.data.map((card: any) => ({
          ...card,
          top_benefit: JSON.parse(card.top_benefit),
          handleMomentumScrollEnd,
        }));

        setCreditCardList(creditCardData);
        setCheckCardList(checkCardData);
      } catch (e) {
        throw new Error();
      }
    }
    getCardChart(2);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1,
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

  const handleMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const index = Math.round(contentOffsetX / windowWidth);
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    },
    [currentIndex],
  );

  return (
    <SafeAreaView>
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
            keyExtractor={(item, index) => index.toString()}
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
            onMomentumScrollEnd={handleMomentumScrollEnd}
          />
          <Pagination length={products.length} currentIndex={currentIndex} />
        </MainProduct>
        <InfoText>💳 요즘 가장 인기있는 카드에요!</InfoText>
        <Row>
          <TouchableOpacity onPress={() => setSelectedCardType('check')}>
            <Button isSelected={selectedCardType === 'check'}>
              <ButtonText isSelected={selectedCardType === 'check'}>
                체크카드
              </ButtonText>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedCardType('credit')}>
            <Button isSelected={selectedCardType === 'credit'}>
              <ButtonText isSelected={selectedCardType === 'credit'}>
                신용카드
              </ButtonText>
            </Button>
          </TouchableOpacity>
        </Row>
        <CardListView>
          {selectedCardType === 'check' ? (
            <CardList SelectedCardList={checkCardList} />
          ) : (
            <CardList SelectedCardList={creditCardList} />
          )}
        </CardListView>
      </Container>
    </SafeAreaView>
  );
}
