import * as React from 'react';
import {
  Container,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemStatus,
} from '../TabContents.styled';

const WaitingChallenging = () => (
  <Container>
    <Item>
      <ItemImage />
      <ItemInfo>
        <ItemTitle>도파밍 상품</ItemTitle>
        <ItemStatus>대기중</ItemStatus>
      </ItemInfo>
    </Item>
  </Container>
);

export default WaitingChallenging;
