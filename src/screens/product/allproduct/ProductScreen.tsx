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
import Splash from '../../../components/Splash/Splash';

export const ProductScreen = ({ navigation }: any) => {
  const [product, setProduct] = useState({
    SAVING: [],
    CHECKING: [],
    DOFARMING: [],
    DEPOSIT: [],
  });
  const [loading, setLoading] = useState(true);

  const renderProductItem = (product: ProductType) => (
    <RowContainer
      key={product.prodCode}
      onPress={() => navigation.navigate('ProductSignUp')}
    >
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
      try {
        const res = await allProduct();
        setProduct(res);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (loading) {
    return <Splash />;
  }

  return (
    <Container>
      {product &&
        Object.entries(product).map(([type, productList]) => {
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
                  <ProdCount>{productList?.length}</ProdCount>
                </ProdTypeRow>
                <MoreText>확인하기</MoreText>
              </ProdTypeContainer>
              <ProdContainer>
                {productList?.map((product) => renderProductItem(product))}
              </ProdContainer>
            </React.Fragment>
          );
        })}
    </Container>
  );
};
