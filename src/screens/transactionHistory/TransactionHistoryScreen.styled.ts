import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

export const ScrollViewContainer = styled.View`
  flex: 1;
  position: relative;
`;

export const Container = styled.View`
  max-height: ${screenHeight * 0.35}px;
  width: 100%;
  padding: 5%;
  background-color: ${(props) => props.theme.grayColor};
`;

export const AccountInfoContainer = styled.View`
  background: ${(props) => props.theme.whiteColor};
  border: 1px solid #f8f8fa;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
  border-radius: 15px;
  height: ${screenHeight * 0.3}px;
  width: 100%;
  padding: 30px;
  justify-content: space-between;
`;

export const AccountTitle = styled.Text`
  font-size: 20x;
  font-weight: 500;
  color: ${(props) => props.theme.blackColor};
`;

export const AccountNumber = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.blackColor};
  text-decoration: underline;
`;

export const AccountBalanceContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
`;

export const AccountBalance = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.blackColor};
  font-weight: bold;
`;

export const AccountBalanceWon = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.blackColor};
  font-weight: 500;
`;

export const WithdrawAvailableMoneyContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 5px 0;
`;

export const WithdrawAvailableMoney = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.darkGrayColor};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.grayColor};
  border-radius: 10px;
  padding: 13px;
  width: 48%;
  align-items: center;
`;

export const TransferButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.hanaMainColor};
  border-radius: 10px;
  padding: 13px;
  width: 48%;
  align-items: center;
`;

export const ButtonText = styled.Text<{ isTransfer: boolean }>`
  color: ${(props) =>
    props.isTransfer ? props.theme.whiteColor : props.theme.blackColor};
  font-weight: bold;
  font-size: 15px;
`;

export const TransactionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  width: 100%;
`;

export const TransactionDate = styled.Text`
  font-size: 14px;
  color: #555;
`;

export const TransactionDetail = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
`;

export const TransactionName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TransactionBalance = styled.View`
  align-items: flex-end;
`;

export const TransactionAmount = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TransactionTotalBalance = styled.Text`
  font-size: 14px;
  color: #aaa;
  margin-top: 5px;
`;
