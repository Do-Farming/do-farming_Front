import * as React from 'react';
import { Container, Item, ItemTitle, ItemType } from './MyAccountView.styled';
import { Account } from '../../../types/account/AccountTypes';

export default function MyAccountView({
  myAccountList,
}: {
  myAccountList: Account[];
}) {
  return (
    <Container>
      {myAccountList.map((account: Account) => (
        <Item key={account.id}>
          <ItemTitle>{account.name}</ItemTitle>
          <ItemType>입출금</ItemType>
        </Item>
      ))}
    </Container>
  );
}
