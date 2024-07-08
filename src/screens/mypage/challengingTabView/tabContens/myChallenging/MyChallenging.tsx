import * as React from 'react';
import theme from '../../../../../styles/theme';
import {
  Container,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemTitleBox,
  ItemStatus,
  ItemProgressBar,
  ItemProgressFigure,
  ViewRankingButton,
  ViewRankingButtonText,
} from '../TabContents.styled';
import { Group } from '../../../../../types/group/GroupTypes';

const MyChallenging: React.FC<{ myGroup: Group }> = ({ myGroup }) => {
  return (
    <Container>
      {myGroup.status === 2 && (
        <Item>
          <ItemImage />
          <ItemInfo>
            <ItemTitleBox>
              <ItemTitle>도파밍 상품</ItemTitle>
              <ViewRankingButton>
                <ViewRankingButtonText>랭킹보기</ViewRankingButtonText>
              </ViewRankingButton>
            </ItemTitleBox>
            <ItemStatus>
              {myGroup.startedAt} ~ {myGroup.endedAt}
            </ItemStatus>
            <ItemProgressFigure>50%</ItemProgressFigure>
            <ItemProgressBar
              progress={0.5}
              width={null}
              height={10}
              color={theme.mainColor}
              unfilledColor="#D0D0D0"
              borderWidth={0}
              borderRadius={5}
            />
          </ItemInfo>
        </Item>
      )}
    </Container>
  );
};

export default MyChallenging;
