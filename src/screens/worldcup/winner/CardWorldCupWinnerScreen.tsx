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
} from './CardWorldCupWinnerScreen.styled';
import CardImage from '../../../components/CardImage/CardImage';
import { SafeAreaView } from '../../home/HomeScreen.styled';
import { Animated, Easing } from 'react-native';

export default function CardWorldCupWinnnerScreen({ route, navigation }: any) {
  const { winner } = route.params;
  const cardImageUrl =
    'https://d1c5n4ri2guedi.cloudfront.net' + winner.card_img;

  // State and animated value for button color
  const [colorIndex, setColorIndex] = useState(0);
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

  const buttonStyle = {
    backgroundColor: interpolatedColor,
  };

  return (
    <SafeAreaView>
      <Container>
        {/* <CardLottieView
        source={require('../../../assets/worldcup/confetti.json')}
        autoPlay={true}
        loop={false}
        resizeMode="cover"
      /> */}
        <InfoText>추천해주는 카드는! 🧚‍♂️</InfoText>
        <CardImgContainer>
          <CardImage uri={cardImageUrl} ImgWidth={200} ImgHeight={300} />
        </CardImgContainer>
        <CardName>{winner.name}</CardName>
        <CardBenefitList>
          {winner.top_benefit.map((benefit: any, benefitIndex: number) => {
            return (
              <CardBenefit key={benefitIndex}>
                <CardImgView>
                  <CardBenefitImg
                    source={{ uri: benefit.logo_img.url }}
                    style={{ width: 60, height: 60 }}
                  />
                </CardImgView>
                <CardBenefitTextView>
                  <CardBenefitSmallText>{benefit.tags[0]}</CardBenefitSmallText>
                  <>
                    <CardBenefitImportantText>
                      {benefit.tags[1]} {benefit.tags[2]}
                    </CardBenefitImportantText>
                  </>
                </CardBenefitTextView>
              </CardBenefit>
            );
          })}
        </CardBenefitList>
        <ButtonContainer>
          <CancelButton onPress={() => navigation.navigate('DoFarmingMain')}>
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
