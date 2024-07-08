import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.whiteColor};
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.whiteColor};
  margin-top: 20px;
`;

export const Header = styled.View`
  margin-bottom: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: baseline;
  margin-top: 8px;
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
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const SmallInfoText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MainProduct = styled.View`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 30px;
  margin-top: 5px;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
`;

export const IconView = styled.View`
  width: 20px;
  height: 20px;
`;

export const Product = styled.View`
  width: 350px;
  border-radius: 15px;
  height: 160px;
  background-color: ${(props) => props.theme.mainColor};
  padding: 20px;
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
  background-color: rgba(0, 0, 0, 0.35);
  padding: 4px 8px;
  border-radius: 8px;
`;

export const InterestRateText = styled.Text`
  color: ${(props) => props.theme.whiteColor};
  font-size: 14px;
`;

export const ProductImgView = styled.View`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const PaginationDot = styled.View<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.isActive ? '#FFD262' : '#ccc')};
  margin-horizontal: 5px;
`;

export const Button = styled.View<{ isSelected: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.isSelected ? '#FFD262' : '#FFFFFF')};
  border: 1px solid #e9e9e9;
  border-radius: 15px;
  margin-right: 10px;
`;

export const ButtonText = styled.Text<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? '#ffffff' : '#000000')};
  font-weight: bold;
  font-size: 15px;
`;

export const CardListView = styled.View`
  flex: 1;
  margin: 25px 0;
  gap: 30px;
`;

export const CardContainer = styled.View`
  padding: 20px 20px;
  padding-left: 8px;
  flex-direction: row;
  background: ${(props) => props.theme.whiteColor};
  border: 1px solid #f8f8fa;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
  border-radius: 15px;
  height: 42%;
  align-items: center;
`;

export const CardImgView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardInfo = styled.View`
  flex-grow: 1;
  flex-shrink: 1;
`;

export const CardName = styled.Text`
  font-size: 20px;
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

export const CardBenefitImportantText = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-weight: bold;
  font-size: 11.5px;
`;
