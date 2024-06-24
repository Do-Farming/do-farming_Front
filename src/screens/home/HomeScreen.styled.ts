import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #FFFFFF;
`;

export const Header = styled.View`
  margin-bottom: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: baseline;
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

export const SmallInfoText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MainProduct = styled.View`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 25px;
`;

export const Product = styled.View`
  width: 350px;
  border-radius: 15px;
  height: 160px;
  background-color: #FFD262;
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
  background-color: rgba(0, 0, 0, 0.6);
  padding: 4px 8px;
  border-radius: 4px;
`;

export const InterestRateText = styled.Text`
  color: #fff;
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
  background-color: ${(props) => (props.isActive ? "#FFD262" : "#ccc")};
  margin-horizontal: 5px;
`;

export const Button = styled.View<{ isSelected: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.isSelected ? "#FFD262" : "#FFFFFF")};
  border-radius: 15px;
  margin-right: 10px;
`;

export const ButtonText = styled.Text<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
  font-weight: bold;
  font-size: 15px;
`;

export const CardList = styled.View`
  margin: 15px 0;
`;

export const CardContainer = styled.View`
  padding: 10px 15px;
  padding-left: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  background: #FFFFFF;
  border: 1px solid #F8F8FA;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
  border-radius: 15px;
`;

export const CardImg = styled.Image`
  object-fit: contain;
  height: 100px;
`;

export const CardInfo = styled.View`
  flex-grow: 1;
`;

export const CardBenefitList = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
`;

export const CardBenefit = styled.View`
  display: flex;
  flex-direction: row;
  border-right: 1px solid black;
`;

export const CardBenefitImg = styled.Image`

`;

export const CardBenefitTextView = styled.View`
  display: flex;
`;

export const CardBenefitText = styled.Text`
  
`;