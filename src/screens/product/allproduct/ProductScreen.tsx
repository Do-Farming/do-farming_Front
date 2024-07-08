import React, { useEffect, useState } from 'react';
import {
  Container,
  Divide,
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
import { allProduct } from '../../../apis/productService';
import { ProductType } from '../../../types/product/ProductTypes';
import { ObjectMapping } from '../../../constants/Product';
export const ProductScreen = () => {
  const [product, setProduct] = useState({
    SAVING: [],
    CHECKING: [],
    DOFARMING: [],
    DEPOSIT: [],
  });

  const renderProductItem = (product: ProductType) => (
    <RowContainer key={product.prodCode}>
      <Row>
        <NameText>{product.prodName}</NameText>
        <PeriodText>1년</PeriodText>
      </Row>
      <Row>
        <PromotionText>프로모션</PromotionText>
        <RateText>3.0%</RateText>
      </Row>
      <Divide />
    </RowContainer>
  );

  useEffect(() => {
    const fetchProduct = async () => {
      await allProduct().then((res) => setProduct(res));
    };
    fetchProduct();
  }, []);

  return (
    <Container>
      {Object.entries(product).map(([type, productList]) => {
        if (!Array.isArray(productList)) {
          console.error(
            `Expected an array but got ${typeof productList} for ${type}`,
          );
          return null;
        }

        return (
          <React.Fragment key={type}>
            <ProdTypeContainer>
              <ProdTypeRow>
                <ProdType>{ObjectMapping[type]}</ProdType>
                <ProdCount>{productList.length}</ProdCount>
              </ProdTypeRow>
              <MoreText>확인하기</MoreText>
            </ProdTypeContainer>
            <ProdContainer>
              {productList.map((product) => renderProductItem(product))}
            </ProdContainer>
          </React.Fragment>
        );
      })}
    </Container>
  );
};
