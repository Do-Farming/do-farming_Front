import * as React from 'react';
import {
  Container,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemStatus,
} from '../TabContents.styled';
import { Group } from '../../../../../types/group/GroupTypes';

const WaitingChallenging: React.FC<{ myGroup: Group }> = ({
  myGroup,
}: {
  myGroup: Group;
}) => (
  <Container>
    {myGroup.status === 0 && (
      <Item>
        <ItemImage />
        <ItemInfo>
          <ItemTitle>도파밍 상품</ItemTitle>
          <ItemStatus>준비 대기중</ItemStatus>
        </ItemInfo>
      </Item>
    )}

    {myGroup.status === 1 && (
      <Item>
        <ItemImage />
        <ItemInfo>
          <ItemTitle>도파밍 상품</ItemTitle>
          <ItemStatus>시작 대기중</ItemStatus>
        </ItemInfo>
      </Item>
    )}
  </Container>
);

export default WaitingChallenging;
