import React from 'react';
import {
  Container,
  MoreText,
  NameText,
  PeriodText,
  ProdContainer,
  ProdCount,
  ProdType,
  ProdTypeContainer,
  ProdTypeRow,
  PromotionText,
  RateText,
  Row,
  RowContainer,
} from './ProductScreen.styled';
import { Divider } from 'react-native-elements';
export const ProductScreen = () => {
  const isLast = false;
  return (
    <Container>
      <ProdTypeContainer>
        <ProdTypeRow>
          <ProdType>도파밍 상품</ProdType>
          <ProdCount>1</ProdCount>
        </ProdTypeRow>
        <MoreText>확인하기</MoreText>
      </ProdTypeContainer>
      <ProdContainer>
        <RowContainer>
          <Row>
            <NameText>Do! Farming</NameText>
            <PeriodText>3개월</PeriodText>
          </Row>
          <Row>
            <PromotionText>갓생살면서 이자도 받고!</PromotionText>
            <RateText>6.0%</RateText>
          </Row>
          {!isLast && <Divider />}
        </RowContainer>
      </ProdContainer>
      <ProdTypeContainer>
        <ProdTypeRow>
          <ProdType>예금</ProdType>
          <ProdCount>3</ProdCount>
        </ProdTypeRow>
        <MoreText>확인하기</MoreText>
      </ProdTypeContainer>
      <ProdContainer>
        <RowContainer>
          <Row>
            <NameText>이름</NameText>
            <PeriodText>제한 없음</PeriodText>
          </Row>
          <Row>
            <PromotionText>프로모션</PromotionText>
            <RateText>3.5%</RateText>
          </Row>
          {!isLast && <Divider />}
        </RowContainer>
        <RowContainer>
          <Row>
            <NameText>이름</NameText>
            <PeriodText>제한 없음</PeriodText>
          </Row>
          <Row>
            <PromotionText>프로모션</PromotionText>
            <RateText>3.5%</RateText>
          </Row>
          {!isLast && <Divider />}
        </RowContainer>
      </ProdContainer>
      <ProdTypeContainer>
        <ProdTypeRow>
          <ProdType>적금</ProdType>
          <ProdCount>5</ProdCount>
        </ProdTypeRow>
        <MoreText>확인하기</MoreText>
      </ProdTypeContainer>
      <ProdContainer>
        <RowContainer>
          <Row>
            <NameText>이름</NameText>
            <PeriodText>제한 없음</PeriodText>
          </Row>
          <Row>
            <PromotionText>프로모션</PromotionText>
            <RateText>3.5%</RateText>
          </Row>
          {!isLast && <Divider />}
        </RowContainer>
        <RowContainer>
          <Row>
            <NameText>이름</NameText>
            <PeriodText>제한 없음</PeriodText>
          </Row>
          <Row>
            <PromotionText>프로모션</PromotionText>
            <RateText>3.5%</RateText>
          </Row>
          {!isLast && <Divider />}
        </RowContainer>
      </ProdContainer>
    </Container>
  );
};
