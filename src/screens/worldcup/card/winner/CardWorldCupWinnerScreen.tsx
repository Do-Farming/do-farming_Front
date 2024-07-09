import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  InfoText,
  CardName,
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
import CardImage from '../../../../components/CardImage/CardImage';
import { Animated, Easing, Image } from 'react-native';
import { SafeAreaView } from '../../../home/HomeScreen.styled';
import {
  CardLottieView,
  GenerateCardContainer,
} from '../../../generateCard/GenerateCardScreen.styled';
import { ChipIcon, DoFarmingIcon } from '../../../../assets';
import CustomModal from '../../../../components/CustomModal/CustomModal';
import {
  ModalButton,
  ModalButtonText,
} from '../../../bang/bangCreate/BangCreateScreen.styled';

export default function CardWorldCupWinnnerScreen({ route, navigation }: any) {
  const { winner, imageUrl } = route.params;
  const cardImageUrl = imageUrl ? imageUrl : winner.img;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onPressModalClose = () => {
    setIsModalVisible(false);
  };

  const onPressConfirmButton = () => {
    setIsModalVisible(false);
    navigation.navigate('DoFarmingMain');
  };

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
        {imageUrl ? (
          <GenerateCardContainer>
            {isImgLoaded ? (
              <ChipIcon style={{ position: 'absolute', zIndex: 1, top: 10 }} />
            ) : (
              <DoFarmingIcon width={'100%'} height={'100%'} />
            )}
            <Image
              source={{ uri: imageUrl }}
              style={{ width: 200, height: 300, borderRadius: 10 }}
              onLoadEnd={() => setIsImgLoaded(true)}
            />
          </GenerateCardContainer>
        ) : (
          <CardImgContainer>
            <CardImage uri={cardImageUrl} ImgWidth={200} ImgHeight={300} />
          </CardImgContainer>
        )}
        <CardName>{winner.cardName}</CardName>
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
          <CancelButton
            onPress={() => {
              if (imageUrl) {
                setIsModalVisible(true);
              } else {
                navigation.navigate('Tabs', { screen: 'DoFarmingMain' });
              }
            }}
          >
            <EnterText>{imageUrl ? '발급하기' : '홈으로'}</EnterText>
          </CancelButton>
          <Animated.View
            style={{
              width: '45%',
              borderRadius: 10,
              backgroundColor: interpolatedColor,
            }}
          >
            <EnterButton
              onPress={() => navigation.navigate('GenerateCard', { winner })}
            >
              <EnterText>나만의 카드 생성</EnterText>
            </EnterButton>
          </Animated.View>
        </ButtonContainer>
      </Container>
      <CustomModal
        isVisible={isModalVisible}
        onClose={onPressModalClose}
        text={'발급되었습니다!'}
      >
        <ModalButton onPress={onPressConfirmButton}>
          <ModalButtonText>확인</ModalButtonText>
        </ModalButton>
      </CustomModal>
    </SafeAreaView>
  );
}
