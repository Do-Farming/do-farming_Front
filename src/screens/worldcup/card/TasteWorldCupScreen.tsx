import React, { useEffect, useRef, useState } from 'react';
import {
  CardBenefit,
  CardBenefitImg,
  CardBenefitImportantText,
  CardBenefitList,
  CardBenefitText,
  CardBenefitTextView,
  CardContainer,
  CardFeeText,
  CardImgContainer,
  CardInfoContainer,
  Container,
  InfoText,
  RoundText,
  SelectionView,
} from './CardWorldCupScreen.styled';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import * as Progress from 'react-native-progress';
import CardImage from '../../../components/CardImage/CardImage';

const getRandomCards = (cardList: any[], count: number) => {
  let shuffled = cardList.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const { width: screenWidth } = Dimensions.get('window');

export default function CardWorldCupScreen({ navigation, route }: any) {
  const { type } = route.params;
  const colorValue = useRef(new Animated.Value(0)).current;
  const hologramValue = useRef(new Animated.Value(0)).current;
  const [currentCards, setCurrentCards] = useState<any[]>([]); // 랜덤으로 선택된 32개의 카드들
  const [selectedCards, setSelectedCards] = useState<any[]>([]); // 선택된 카드들
  const [cardList, setCardList] = useState<any[]>([]); // 카드 데이터 원본
  const [round, setRound] = useState(32);
  const [index, setIndex] = useState(0);

  const textColor = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000000', '#FA8282'],
  });

  const calculateProgress = (round: number) => {
    return round === 2 ? 1 : (32 - round) / 32;
  };

  const progressValue = calculateProgress(round);

  useEffect(() => {
    async function getCardChart(CardAmount: number) {
      const today = new Date();

      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');

      const formattedDate = `${year}-${month}-${day}`;
      try {
        const CardsResponse = await axios.get(
          `https://api.card-gorilla.com:8080/v1/charts/ranking?date=${formattedDate}&term=weekly&card_gb=${type}&limit=${CardAmount}&chart=top100&idx=&idx2=`,
        );

        const cardData = CardsResponse.data.map((card: any) => ({
          ...card,
          top_benefit: JSON.parse(card.top_benefit),
          corp: JSON.parse(card.corp),
        }));

        setCardList(cardData);
        setCurrentCards(getRandomCards(cardData, 32));
      } catch (e) {
        console.error(e);
      }
    }
    getCardChart(50);
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(colorValue, {
          toValue: 0,
          duration: 700,
          useNativeDriver: false,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(hologramValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.timing(hologramValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [colorValue, hologramValue]);

  const renderCard = (card: any, handleCardPress: any) => {
    const cardImageUrl =
      'https://d1c5n4ri2guedi.cloudfront.net' + card.card_img;
    const annualFeeParts = card.annual_fee_basic.split('/ ');

    const hologramStyle = {
      opacity: hologramValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.4], // 투명도 조정
      }),
    };

    return (
      <>
        <View>
          <CardImgContainer onPress={() => handleCardPress(card)}>
            <CardImage uri={cardImageUrl} ImgHeight={180} ImgWidth={120} />
            <Animated.Image
              source={require('../../../assets/worldcup/hologram.png')}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  width: 120,
                  height: 180,
                  borderRadius: 5,
                },
                hologramStyle,
              ]}
            />
          </CardImgContainer>
          {annualFeeParts.map((part: string, index: number) => (
            <CardFeeText key={index}>{part}</CardFeeText>
          ))}
        </View>
        <CardInfoContainer>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              flexShrink: 1,
              maxWidth: '80%',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            {card.name}
          </Text>
          <Image
            source={{ uri: card.corp.logo_img.url }}
            style={{ width: 100, height: 40 }}
          />
          <CardBenefitList>
            {card.top_benefit.map((benefit: any, index: number) => (
              <CardBenefit key={index}>
                {benefit.logo_img && (
                  <CardBenefitImg
                    source={{ uri: benefit.logo_img.url }}
                    style={{ width: 35, height: 35 }}
                  />
                )}
                <CardBenefitTextView>
                  <CardBenefitText>{benefit.tags[0]}</CardBenefitText>
                  <CardBenefitImportantText>
                    {benefit.tags[1]}
                  </CardBenefitImportantText>
                  <CardBenefitText>{benefit.tags[2]}</CardBenefitText>
                </CardBenefitTextView>
              </CardBenefit>
            ))}
          </CardBenefitList>
        </CardInfoContainer>
      </>
    );
  };

  const handleCardPress = (selectedCard: any) => {
    const nextIndex = index + 2;
    const nextSelectedCards = [...selectedCards, selectedCard];

    if (nextSelectedCards.length === 1 && round === 2) {
      // 최종 우승 카드가 결정됨
      navigation.navigate('CardWorldCupWinner', {
        winner: nextSelectedCards[0],
      });
    } else if (nextIndex >= currentCards.length) {
      setCurrentCards(nextSelectedCards);
      setSelectedCards([]);
      setRound(round / 2);
      setIndex(0);
    } else {
      setSelectedCards(nextSelectedCards);
      setIndex(nextIndex);
    }
  };

  if (currentCards.length < 2 || index >= currentCards.length - 1) {
    return null;
  }

  return (
    <Container>
      <Progress.Bar
        progress={progressValue}
        width={screenWidth}
        color="#FDCE2E" // 진행된 부분의 색상
        unfilledColor="#D9D9D9" // 배경색
        borderWidth={0} // 경계선 없애기
        height={5} // Progress Bar 높이
        style={{ marginBottom: '2%' }}
      />

      <>
        {round === 2 ? (
          <RoundText style={{ color: textColor }}>결승전!</RoundText>
        ) : (
          <RoundText style={{ color: textColor }}>{round}강</RoundText>
        )}
      </>

      <InfoText>마음에 드는 카드를 선택해주세요!</InfoText>
      <SelectionView>
        <CardContainer>
          {renderCard(currentCards[index], handleCardPress)}
        </CardContainer>
        <CardContainer>
          {renderCard(currentCards[index + 1], handleCardPress)}
        </CardContainer>
      </SelectionView>
    </Container>
  );
}
