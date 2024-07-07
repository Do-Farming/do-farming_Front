import React from 'react';
import {
  BoldText,
  CautionText,
  Container,
  InfoTextView,
  WorldCulSelectionDetail,
  WorldCupImgView,
  WorldCupSelection,
  WorldCupSelectionSmallText,
  WorldCupSelectionText,
  WorldCupSelectionView,
  WorldCupTextView,
} from './WorldCupSelectScreen.styled';
import { Image } from 'react-native';

export default function WorldCupSelectScreen({ navigation }: any) {
  return (
    <Container>
      <InfoTextView>
        <BoldText>어떤 방식으로</BoldText>
        <BoldText>내게 맞는 카드를 찾을까요? 🧚‍♂️</BoldText>
        <WorldCupSelectionView>
          <WorldCupSelection
            onPress={() => navigation.navigate('TasteWorldCup')}
          >
            <WorldCupImgView>
              <Image
                source={require('../../assets/worldcup/taste.png')}
                style={{ width: 50, height: 50 }}
              />
            </WorldCupImgView>
            <WorldCupTextView>
              <WorldCupSelectionText>취향 이상형 월드컵</WorldCupSelectionText>
              <WorldCupSelectionSmallText>
                취향 기반 카드 추천
              </WorldCupSelectionSmallText>
            </WorldCupTextView>
            <WorldCulSelectionDetail
              source={require('../../assets/worldcup/detail.png')}
              style={{ width: 18, height: 18 }}
            />
          </WorldCupSelection>
          <WorldCupSelection
            onPress={() => navigation.navigate('CardWorldCup', { type: 'CRD' })}
          >
            <WorldCupImgView>
              <Image
                source={require('../../assets/worldcup/card.png')}
                style={{ width: 50, height: 50 }}
              />
            </WorldCupImgView>
            <WorldCupTextView>
              <WorldCupSelectionText>
                신용카드 이상형 월드컵
              </WorldCupSelectionText>
              <WorldCupSelectionSmallText>
                카드 비교로 최종 카드 선정
              </WorldCupSelectionSmallText>
            </WorldCupTextView>
            <WorldCulSelectionDetail
              source={require('../../assets/worldcup/detail.png')}
              style={{ width: 18, height: 18 }}
            />
          </WorldCupSelection>
          <WorldCupSelection
            onPress={() => navigation.navigate('CardWorldCup', { type: 'CHK' })}
          >
            <WorldCupImgView>
              <Image
                source={require('../../assets/worldcup/card2.png')}
                style={{ width: 50, height: 50 }}
              />
            </WorldCupImgView>
            <WorldCupTextView>
              <WorldCupSelectionText>
                체크카드 이상형 월드컵
              </WorldCupSelectionText>
              <WorldCupSelectionSmallText>
                카드 비교로 최종 카드 선정
              </WorldCupSelectionSmallText>
            </WorldCupTextView>
            <WorldCulSelectionDetail
              source={require('../../assets/worldcup/detail.png')}
              style={{ width: 18, height: 18 }}
            />
          </WorldCupSelection>
        </WorldCupSelectionView>
        <CautionText>
          카드 월드컵은 매번 다른 결과를 가져올 수 있습니다
        </CautionText>
      </InfoTextView>
    </Container>
  );
}
