import * as React from 'react';
import { Container, Item, ItemTitle, ItemType } from './MyAccountView.styled';

export default function MyAccountView() {
  return (
    <Container>
      <Item>
        <ItemTitle>자유통통입출금</ItemTitle>
        <ItemType>입출금</ItemType>
      </Item>
      <Item>
        <ItemTitle>자유통통입출금</ItemTitle>
        <ItemType>입출금</ItemType>
      </Item>
    </Container>
  );
}
