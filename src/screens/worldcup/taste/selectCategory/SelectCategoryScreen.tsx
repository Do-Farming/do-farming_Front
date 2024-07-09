import React from 'react';
import {
  BoldText,
  Container,
  InfoTextView,
  WorldCulSelectionDetail,
  WorldCupImgView,
  WorldCupSelection,
  WorldCupSelectionSmallText,
  WorldCupSelectionText,
  WorldCupSelectionView,
  WorldCupTextView,
} from '../../select/WorldCupSelectScreen.styled';
import { Image } from 'react-native';
import { SafeAreaView } from '../../../home/HomeScreen.styled';
import { FoodIcon, TripIcon } from '../../../../assets';

export default function SelectCategoryScreen({ navigation }: any) {
  return (
    <SafeAreaView>
      <Container>
        <InfoTextView>
          <BoldText>카테고리를 선택하세요 🧚‍♂️</BoldText>
          <WorldCupSelectionView>
            <WorldCupSelection
              onPress={() =>
                navigation.navigate('TasteWorldCup', { category: '음식' })
              }
            >
              <WorldCupImgView>
                <FoodIcon width={50} height={50}/>
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
              onPress={() =>
                navigation.navigate('TasteWorldCup', { category: '여가' })
              }
            >
              <WorldCupImgView>
                <TripIcon width={50} height={50}/>
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
    </SafeAreaView>
  );
}
