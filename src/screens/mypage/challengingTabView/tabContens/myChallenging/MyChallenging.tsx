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
import { Image } from 'react-native';
import { Group } from '../../../../../types/group/GroupTypes';

const parseDate = (dateString: string): Date => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

const getProgressFigure = (startedAt: string, endedAt: string): number => {
  const startDate = parseDate(startedAt);
  const endDate = parseDate(endedAt);
  const currentDate = new Date();

  if (currentDate < startDate) {
    return 0;
  }

  if (currentDate > endDate) {
    return 100;
  }

  const totalDuration = endDate.getTime() - startDate.getTime();
  const elapsedDuration = currentDate.getTime() - startDate.getTime();

  return Math.round((elapsedDuration / totalDuration) * 100);
};

const MyChallenging: React.FC<{ myGroup: Group }> = ({ myGroup }) => {
  return (
    <Container>
      {myGroup.status === 2 && (
        <Item>
          <Image
            source={require('../../../../../assets/running.gif')}
            style={{ width: 60, height: 60 }}
          />
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
            <ItemProgressFigure>
              {getProgressFigure(myGroup.startedAt, myGroup.endedAt)}%
            </ItemProgressFigure>
            <ItemProgressBar
              progress={
                getProgressFigure(myGroup.startedAt, myGroup.endedAt) / 100
              }
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
