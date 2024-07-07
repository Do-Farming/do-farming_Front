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
} from './SelectCategoryScreen.styled';
import { Image } from 'react-native';

export default function SelectCategoryScreen({ navigation }: any) {
  return (
    <Container>
      <InfoTextView>
        <BoldText>Category를 선택하세요 🧚‍♂️</BoldText>
        <WorldCupSelectionView>
          <WorldCupSelection
            onPress={() => navigation.navigate('TasteWorldCup')}
          >
            <WorldCupImgView>
              <Image
                source={require('../../../../assets/worldcup/taste.png')}
                style={{ width: 50, height: 50 }}
              />
            </WorldCupImgView>
            <WorldCupTextView>
              <WorldCupSelectionText>음식</WorldCupSelectionText>
              <WorldCupSelectionSmallText>
                식욕 자극으로 도파민 충전!
              </WorldCupSelectionSmallText>
            </WorldCupTextView>
            <WorldCulSelectionDetail
              source={require('../../../../assets/worldcup/detail.png')}
              style={{ width: 18, height: 18 }}
            />
          </WorldCupSelection>
          <WorldCupSelection
            onPress={() => navigation.navigate('CardWorldCup', { type: 'CRD' })}
          >
            <WorldCupImgView>
              <Image
                source={require('../../../../assets/worldcup/card.png')}
                style={{ width: 50, height: 50 }}
              />
            </WorldCupImgView>
            <WorldCupTextView>
              <WorldCupSelectionText>여가</WorldCupSelectionText>
              <WorldCupSelectionSmallText>
                무엇을 할 때 가장 행복할까?
              </WorldCupSelectionSmallText>
            </WorldCupTextView>
            <WorldCulSelectionDetail
              source={require('../../../../assets/worldcup/detail.png')}
              style={{ width: 18, height: 18 }}
            />
          </WorldCupSelection>
        </WorldCupSelectionView>
      </InfoTextView>
    </Container>
  );
}
