import React, { useEffect, useState } from 'react';
import {
  AccountBalance,
  AccountBalanceContainer,
  AccountBalanceWon,
  AccountInfoContainer,
  AccountNumber,
  AccountTitle,
  ButtonContainer,
  ButtonText,
  CancelButton,
  Container,
  ScrollViewContainer,
  TransactionAmount,
  TransactionBalance,
  TransactionContainer,
  TransactionDate,
  TransactionDetail,
  TransactionName,
  TransactionTotalBalance,
  TransferButton,
  WithdrawAvailableMoney,
  WithdrawAvailableMoneyContainer,
} from './TransactionHistoryScreen.styled';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from '../home/HomeScreen.styled';
import { ApiResponse } from '../../types';
import { TransactionHistory } from '../../types/transactionHistory/TransactionHistoryTypes';
import axiosInstance from '../../apis/axiosInstance';
import { Account } from '../../types/account/AccountTypes';

export default function TransactionHistoryScreen({ navigation, route }: any) {
  const { accountId } = route.params;
  const [history, setHistory] = useState<TransactionHistory[]>([]);
  const [account, setAccount] = useState<Account>();

  useEffect(() => {
    const getHistory = async (accountId: number) => {
      try {
        const response = await axiosInstance.get<
          ApiResponse<TransactionHistory[]>
        >(`/api/history/account/${accountId}`);
        if (response.data.isSuccess) {
          setHistory(response.data.result);
        } else {
          console.log('계좌 내역 조회 실패');
        }
      } catch (error) {
        console.error('계좌 내역 요청 중 에러 발생:', error);
      }
    };

    getHistory(accountId);

    const getAccount = async (accountId: number) => {
      try {
        const response = await axiosInstance.get<ApiResponse<Account>>(
          `/api/v1/account/get?accountId=${accountId}`,
        );
        if (response.data.isSuccess) {
          setAccount(response.data.result);
        } else {
          console.log('계좌 정보 조회 실패');
        }
      } catch (error) {
        console.error('계좌 정보 요청 중 에러 발생:', error);
      }
    };

    getAccount(accountId);
  }, []);

  return (
    <SafeAreaView>
      <ScrollViewContainer>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
          }}
        >
          <Container>
            <AccountInfoContainer>
              <View>
                <AccountTitle>{account?.name}</AccountTitle>
                <AccountNumber>{account?.accountNumber}</AccountNumber>
              </View>
              <AccountBalanceContainer>
                <AccountBalance>{(account?.balance)?.toLocaleString()} </AccountBalance>
                <AccountBalanceWon>원</AccountBalanceWon>
              </AccountBalanceContainer>
              <WithdrawAvailableMoneyContainer>
                <WithdrawAvailableMoney>
                  출금가능금액 {(account?.balance)?.toLocaleString()} 원
                </WithdrawAvailableMoney>
              </WithdrawAvailableMoneyContainer>
              <ButtonContainer>
                <CancelButton>
                  <ButtonText isTransfer={false}>가져오기</ButtonText>
                </CancelButton>
                <TransferButton>
                  <ButtonText isTransfer={true}>이체</ButtonText>
                </TransferButton>
              </ButtonContainer>
            </AccountInfoContainer>
          </Container>
          {history.map((transaction) => (
            <TransactionContainer key={transaction.id}>
              <TransactionDate>
                {history[0].dealdate[1]}. {history[0].dealdate[2]}
              </TransactionDate>
              <TransactionDetail>
                <TransactionName>{transaction.recipient}</TransactionName>
                <TransactionBalance>
                  <TransactionAmount>
                    {transaction.amount.toLocaleString()} 원
                  </TransactionAmount>
                  <TransactionTotalBalance>
                    {transaction.remainBalance.toLocaleString()} 원
                  </TransactionTotalBalance>
                </TransactionBalance>
              </TransactionDetail>
            </TransactionContainer>
          ))}
        </ScrollView>
      </ScrollViewContainer>
    </SafeAreaView>
  );
}
