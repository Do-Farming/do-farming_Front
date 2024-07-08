import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f5f5f5;
  flex-direction: column;
  padding: 20px;
  flex: 1;
`;

export const ProdTypeContainer = styled.View`
  flex-direction: row;
  padding-left: 5px;
  padding-bottom: 15px;
  align-items: center;
  justify-content: space-between;
`;

export const ProdTypeRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProdType = styled.Text`
  font-size: 17px;
  font-weight: 800;
  margin-right: 6px;
`;

export const ProdCount = styled.Text`
  font-size: 17px;
  font-weight: 800;
  color: ${(props) => props.theme.hanaMainColor};
`;

export const MoreText = styled.Text`
  font-size: 12px;
`;

export const ProdContainer = styled.View`
  background-color: white;
  border-radius: 20px;
  gap: 12px;
  padding-horizontal: 20px;
  padding-vertical: 25px;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
  margin-bottom: 30px;
`;

export const RowContainer = styled.View`
  background-color: white;
  flex-direction: column;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 7px;
  align-items: center;
`;

export const NameText = styled.Text`
  font-weight: 800;
  font-size: 15px;
`;

export const PeriodText = styled.Text`
  color: #1f2937;
  font-size: 12px;
`;

export const PromotionText = styled.Text`
  color: #1f2937;
  font-size: 14px;
`;

export const RateText = styled.Text`
  color: ${(props) => props.theme.hanaMainColor};
  font-weight: 600;
  font-size: 16px;
`;

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: #d1d5db;
`;
