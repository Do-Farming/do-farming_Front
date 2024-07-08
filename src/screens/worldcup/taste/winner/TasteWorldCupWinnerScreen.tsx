import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  InfoText,
  CardName,
  // CardLottieView,
  CardBenefit,
  CardBenefitImg,
  CardBenefitTextView,
  CardBenefitSmallText,
  CardBenefitImportantText,
  CardImgView,
  CardBenefitList,
  CardImgContainer,
  ButtonContainer,
  CancelButton,
  EnterButton,
  EnterText,
} from './TasteWorldCupWinnerScreen.styled';
import CardImage from '../../../../components/CardImage/CardImage';
import { Animated, Easing, Text } from 'react-native';
import axiosInstance from '../../../../apis/axiosInstance';
import {
  GetRecommendedCardResponse,
  ParsedCard,
} from '../../../../types/card/CardTypes';
import { SafeAreaView } from '../../../home/HomeScreen.styled';
import { CardLottieView } from '../../../generateCard/GenerateCardScreen.styled';

export default function TasteWorldCupWinnnerScreen({ navigation, route }: any) {
  const { winnerTaste } = route.params;
  const [recommendedCard, setRecommendedCard] = useState<ParsedCard>();

  // State and animated value for button color
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateColor = () => {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 4000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ).start();
    };

    animateColor();

    const getRecommendedCard = async (tag: string) => {
      try {
        const response = await axiosInstance.get<GetRecommendedCardResponse>(
          `/api/v1/taste/recommended?tag=${tag}`,
        );
        if (response.data.isSuccess) {
          const card = response.data.result.card;
          const parsedCard = {
            ...card,
            benefit: JSON.parse(card.benefit),
            corp: JSON.parse(card.corp),
          };
          setRecommendedCard(parsedCard);
        } else {
          console.log('추천 카드 데이터 요청 실패');
        }
      } catch (error) {
        console.error('카드 데이터 요청 중 에러 발생:', error);
      }
    };

    getRecommendedCard(winnerTaste.tasteTag);

    return () => {
      animatedValue.stopAnimation();
    };
  }, []);

  const interpolatedColor = animatedValue.interpolate({
    inputRange: [0, 0.14, 0.42, 0.56, 0.7, 1],
    outputRange: [
      '#FFB3B3', // Pastel Red
      '#FFD580', // Pastel Orange
      '#B3FFB3', // Pastel Green
      '#B3D9FF', // Pastel Blue
      '#D1B3FF', // Pastel Indigo
      '#FFB3B3',
    ],
  });

  return (
    <SafeAreaView>
      <Container>
        <CardLottieView
          source={require('../../../../assets/worldcup/confetti.json')}
          autoPlay={true}
          loop={false}
          resizeMode="cover"
        />
        <InfoText>추천해주는 카드는! 🧚‍♂️</InfoText>
        <CardImgContainer>
          <CardImage
            uri={recommendedCard?.img}
            ImgWidth={200}
            ImgHeight={300}
          />
        </CardImgContainer>
        <CardName>{recommendedCard?.cardName}</CardName>
        <CardBenefitList>
          {recommendedCard?.benefit.map(
            (benefit: any, benefitIndex: number) => {
              return (
                <CardBenefit key={benefitIndex}>
                  <CardImgView>
                    <CardBenefitImg
                      source={{ uri: benefit.logo_img.url }}
                      style={{ width: 60, height: 60 }}
                    />
                  </CardImgView>
                  <CardBenefitTextView>
                    <CardBenefitSmallText>
                      {benefit.tags[0]}
                    </CardBenefitSmallText>
                    <>
                      <CardBenefitImportantText>
                        {benefit.tags[1]} {benefit.tags[2]}
                      </CardBenefitImportantText>
                    </>
                  </CardBenefitTextView>
                </CardBenefit>
              );
            },
          )}
        </CardBenefitList>
        <ButtonContainer>
          <CancelButton onPress={() => navigation.navigate('Home')}>
            <EnterText>홈으로</EnterText>
          </CancelButton>
          <Animated.View
            style={{
              width: '45%',
              borderRadius: 10,
              backgroundColor: interpolatedColor,
            }}
          >
            <EnterButton onPress={() => navigation.navigate('GenerateCard')}>
              <EnterText>나만의 카드 생성</EnterText>
            </EnterButton>
          </Animated.View>
        </ButtonContainer>
      </Container>
    </SafeAreaView>
  );
}
