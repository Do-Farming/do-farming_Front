import React, { useEffect, useRef } from 'react';
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
} from './CardWorldCupWinnerScreen.styled';
import { Image } from 'react-native';
import { EnterButton, EnterText } from '../../bang/bangDetail/BangDetailScreen.styled';

export default function CardWorldCupWinnnerScreen({ route }: any) {
  const { winner } = route.params;
  const cardImageUrl =
    'https://d1c5n4ri2guedi.cloudfront.net' + winner.card_img;

  return (
    <Container>
      {/* <CardLottieView
        source={require('../../../assets/worldcup/confetti.json')}
        autoPlay={true}
        loop={false}
        resizeMode="cover"
      /> */}
      <InfoText>추천해주는 카드는! 🧚‍♂️</InfoText>
      <Image
        source={{ uri: cardImageUrl }}
        style={{ width: 200, height: 300, borderRadius: 10 }}
      />
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
      <EnterButton>
        <EnterText>확인</EnterText>
      </EnterButton>
    </Container>
  );
}
