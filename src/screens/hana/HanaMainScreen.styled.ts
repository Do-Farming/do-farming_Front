import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const GraySafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.hanaGrayColor};
`;

export const SplashContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const SplashImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f6f7f9;
`;

export const Header = styled.View`
  margin-bottom: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 3px;
`;

export const RowImage = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding: 5px 0px 1px 5px;
`;

export const RowCenter = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const TextNormal = styled.Text`
  font-size: 24px;
  font-weight: normal;
`;

export const Username = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const InfoText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DescriptionTexts = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const DescriptionSmallTexts = styled.Text`
  font-size: 15px;
  color: gray;
  align-items: center;
  text-align: center;
`;
export const DescriptionAccountTexts = styled.Text`
  font-size: 15px;
  color: gray;
`;

export const DescriptionView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BalanceTexts = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 15px 0px;
  margin-bottom: 30px;
  text-align: center;
`;

export const SmallInfoText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MainProduct = styled.View`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 18px;
`;

export const Product = styled.View`
  width: 340px;
  display: flex;
`;

export const Product2 = styled.TouchableOpacity`
  width: 340px;
  border-radius: 15px;
  background-color: white;
  padding: 20px;
  margin: 0px 5px;
  display: flex;
`;

export const Product3 = styled.View`
  width: 340px;
  border-radius: 15px;
  background-color: #fee88a;
  margin: 0px 5px;
  display: flex;
`;

export const ProductName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const InterestRateContainer = styled.View`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 4px 8px;
  border-radius: 4px;
`;

export const InterestRateText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const ProductImgView = styled.View`
  flex-grow: 0.25;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductInfo = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export const PaginationContainer = styled.View`
  margin-top: 10px;
  height: 1px;
  background-color: #e0e0e0;
  border-radius: 5px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export interface PaginationDotProps {
  index: number;
  length: number;
  isActive: boolean;
}

export const PaginationDot = styled.View<PaginationDotProps>`
  width: ${(props) => `${100 / props.length}%`};
  height: 5px;
  border-radius: 5px;
  background-color: ${(props) => (props.isActive ? '#1EA698' : '#E9E9E9')};
  position: absolute;
  left: ${(props) => `${props.index * (100 / props.length)}%`};
  transition: left 0.3s ease;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
  border-radius: 10px;
  margin-right: 10px;
`;

export const smallButton = styled.View<ButtonProps>`
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
  border-radius: 10px;
  margin-right: 10px;
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: ${({ color }) => color};
  font-size: 16.5px;
`;

export const CardListView = styled.View`
  margin: 15px 0;
`;

export const CardContainer = styled.View`
  padding: 20px 15px;
  padding-left: 10px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border: 1px solid #f8f8fa;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
  border-radius: 15px;
`;

export const CardImgView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardImg = styled.Image`
  object-fit: contain;
`;

export const CardInfo = styled.View`
  flex-grow: 1;
  flex-shrink: 1;
`;

export const CardName = styled.Text`
  font-size: 20x;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const CardBenefitList = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 5px;
`;

export const CardBenefit = styled.View`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
`;

export const CardBenefitImg = styled.Image`
  margin-right: 5px;
`;

export const CardBenefitTextView = styled.View`
  display: flex;
  aligh-items: center;
  margin-right: 5px;
`;

export const CardBenefitSmallText = styled.Text`
  font-size: 8px;
`;

export const CardBenefitText = styled.Text`
  font-size: 12px;
`;

export const HanaCardBenefitImportantText = styled.Text`
  color: #ffd262;
  font-weight: bold;
`;

export const HanaCard = styled.View`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 00);
  elevation: 3;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HanaTextContainer = styled.View`
  flex: 1;
`;

export const HanaTitle = styled.Text`
  font-size: 16px;
  color: #888;
`;

export const HanaSubtitle = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const HanaPaginationContainer = styled.View`
  background-color: #e0e0e0;
  flex-direction: row;
  height: 18px;
  align-items: center;
  margin-top: 10px;
  border-radius: 15px;
  align-self: flex-start;
`;

export const HanaPaginationButton = styled(TouchableOpacity)`
  padding: 10px;
`;

export const HanaPageNumber = styled.Text`
  font-size: 11px;
  color: #888;
  margin-horizontal: 10px;
`;

export const HanaProduct = styled.Pressable`
  width: 100%;
  height: 40px;
  border-radius: 15px;
  background-color: #1ea698;
  align-items: center;
  justify-content: center;
  padding-vertical: 5px;
`;

export const HanaProductText = styled.Text`
  font-size: 16px;
  color: white;
`;

export const ChatBotButton = styled.Pressable`
  position: absolute;
  bottom: 30px;
  right: 20px;
  z-index: 1000;
  background-color: #535353;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;
