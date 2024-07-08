import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: 20%;
  margin-top: 20px;
  background-color: #ffffff;
`;

export const BoldText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const InfoTextView = styled.View`
  margin: 5%;
  height: 100%;
`;

export const WorldCupSelectionView = styled.View`
  flex-grow: 1;
  padding: 15% 0;
`;

export const WorldCupSelection = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  position: relative;
  padding: 5% 0;
`;

export const WorldCupImgView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #d9d9d9;
  padding: 10px;
  width: 70px;
  height: 70px;
  margin-right: 5%;
`;

export const WorldCupTextView = styled.View`
  display: flex;
  justify-content: center;
`;

export const WorldCupSelectionText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-bottom: 5%;
`;

export const WorldCupSelectionSmallText = styled.Text`
  font-size: 15px;
  color: black;
`;

export const WorldCulSelectionDetail = styled.Image`
  position: absolute;
  right: 10px;
`;

export const CautionText = styled.Text`
  position: absolute;
  bottom: 30px;
  font-size: 15px;
  font-weight: 600;
  color: #cecece;
  text-align: center;
  width: 100%;
`;
