import React, { useState } from 'react';
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

const balance = 139626;

const transactions = [
  {
    id: 1,
    date: '5.29',
    name: '임태규',
    amount: 450000,
    totalBalance: 54410400,
  },
  {
    id: 2,
    date: '5.28',
    name: '홍길동',
    amount: 300000,
    totalBalance: 53950400,
  },
  {
    id: 3,
    date: '5.29',
    name: '임태규',
    amount: 450000,
    totalBalance: 54410400,
  },
  {
    id: 4,
    date: '5.28',
    name: '홍길동',
    amount: 300000,
    totalBalance: 53950400,
  },
  {
    id: 5,
    date: '5.29',
    name: '임태규',
    amount: 450000,
    totalBalance: 54410400,
  },
  {
    id: 6,
    date: '5.28',
    name: '홍길동',
    amount: 300000,
    totalBalance: 53950400,
  },
  {
    id: 7,
    date: '5.29',
    name: '임태규',
    amount: 450000,
    totalBalance: 54410400,
  },
  {
    id: 8,
    date: '5.28',
    name: '홍길동',
    amount: 300000,
    totalBalance: 53950400,
  },
  // 추가 거래 내역을 여기에 추가
];

export default function TransactionHistoryScreen({ navigation }: any) {
  return (
    <>
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
                  <AccountTitle>달달 하나통장</AccountTitle>
                  <AccountNumber>3333-19-160492</AccountNumber>
                </View>
                <AccountBalanceContainer>
                  <AccountBalance>{balance} </AccountBalance>
                  <AccountBalanceWon>원</AccountBalanceWon>
                </AccountBalanceContainer>
                <WithdrawAvailableMoneyContainer>
                  <WithdrawAvailableMoney>
                    출금가능금액 {balance} 원
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
            {transactions.map((transaction) => (
                <TransactionContainer key={transaction.id}>
                  <TransactionDate>{transaction.date}</TransactionDate>
                  <TransactionDetail>
                    <TransactionName>{transaction.name}</TransactionName>
                    <TransactionBalance>
                      <TransactionAmount>{transaction.amount.toLocaleString()} 원</TransactionAmount>
                      <TransactionTotalBalance>{transaction.totalBalance.toLocaleString()} 원</TransactionTotalBalance>
                    </TransactionBalance>
                  </TransactionDetail>
                </TransactionContainer>
              ))}
          </ScrollView>
        </ScrollViewContainer>
      </SafeAreaView>
    </>
  );
}
