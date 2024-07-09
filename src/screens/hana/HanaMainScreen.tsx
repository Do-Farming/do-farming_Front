// HomeScreen.js
import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  Image,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Header,
  Row,
  Username,
  MainProduct,
  Product,
  Button,
  ButtonText,
  ProductImgView,
  PaginationContainer,
  PaginationDot,
  DescriptionTexts,
  DescriptionSmallTexts,
  RowCenter,
  HanaSubtitle,
  HanaTitle,
  HanaTextContainer,
  HanaCard,
  HanaPageNumber,
  HanaPaginationButton,
  HanaPaginationContainer,
  Product2,
  Product3,
  BalanceTexts,
  SplashContainer,
  SplashImage,
} from './HanaMainScreen.styled';
import { mainContents, saleContents } from '../../mocks/hanaMainDatas';
import { useAuth } from '../../contexts/authContext';
import { SafeAreaView } from '../home/HomeScreen.styled';

const { width: windowWidth } = Dimensions.get('window');

const Pagination2: React.FC<{ length: number; currentIndex2: number }> = ({
  currentIndex2,
}) => (
  <PaginationContainer>
    <PaginationDot isActive={true} index={currentIndex2} />
  </PaginationContainer>
);

export default function HanaMainScreen({ navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [showSplash, setShowSplash] = useState(false);
  const { isLogin } = useAuth();
  const flatListRef = useRef<FlatList>(null);
  const flatListRef2 = useRef<FlatList>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === saleContents.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          animated: true,
          index: currentIndex,
        });
      }
    }, 120);

    return () => clearTimeout(scrollTimeout);
  }, [currentIndex]);

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / windowWidth);
    setCurrentIndex(index);
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % saleContents.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + saleContents.length) % saleContents.length,
    );
  };

  const handleMomentumScrollEnd2 = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / windowWidth);
    setCurrentIndex2(index);
  };

  const handleNavigate = (screen: string) => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
      navigation.navigate('Tabs', { screen: screen });
    }, 3000);
  };

  return (
    <SafeAreaView>
      {showSplash && (
        <SplashContainer>
          <SplashImage source={require('../../assets/splash.png')} />
        </SplashContainer>
      )}
      {!showSplash && (
        <Container>
          <Header>
            <Row>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Username>로그인</Username>
              </TouchableOpacity>
            </Row>
          </Header>
          <MainProduct>
            <FlatList
              ref={flatListRef2}
              data={mainContents}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={
                isLogin
                  ? ({ item, index }) => (
                      <Product2 key={index}>
                        <DescriptionSmallTexts>
                          {item.descriptrions.text1}
                        </DescriptionSmallTexts>
                        <RowCenter>
                          <DescriptionTexts>
                            {item.descriptrions.text2}
                          </DescriptionTexts>
                          <Image
                            style={{ width: 20, height: 15 }}
                            source={item.images[1]}
                          />
                        </RowCenter>
                        <ProductImgView>
                          <Image
                            style={{ width: 125, height: 100 }}
                            source={item.images[0]}
                          />
                        </ProductImgView>
                        <Row>
                          <Button width="50%" backgroundColor="#EFF0F4">
                            <ButtonText>{item.btnText.option1}</ButtonText>
                          </Button>
                          <Button width="50%" backgroundColor="#1EA698">
                            <ButtonText color="white">
                              {item.btnText.option2}
                            </ButtonText>
                          </Button>
                        </Row>
                      </Product2>
                    )
                  : ({ item, index }) => (
                      <Product2 key={index}>
                        <DescriptionTexts>
                          {item.descriptrions.text2}
                        </DescriptionTexts>
                        <Row>
                          <DescriptionSmallTexts>
                            {item.descriptrions.text1}
                          </DescriptionSmallTexts>
                        </Row>
                        <BalanceTexts>{item.balance} 원</BalanceTexts>
                        <Row>
                          <Button
                            width="38%"
                            backgroundColor="#EFF0F4"
                            onPress={() => navigation.navigate('')}
                          >
                            <ButtonText>{item.btnText.option1}</ButtonText>
                          </Button>
                          <Button
                            width="38%"
                            backgroundColor="#1EA698"
                            onPress={() => navigation.navigate('SendMoney')}
                          >
                            <ButtonText color="white">
                              {item.btnText.option2}
                            </ButtonText>
                          </Button>
                          <Button width="18%" backgroundColor="#EFF0F4">
                            <ButtonText color="black">...</ButtonText>
                          </Button>
                        </Row>
                      </Product2>
                    )
              }
              onMomentumScrollEnd={handleMomentumScrollEnd2}
            />
            <Pagination2
              length={mainContents.length}
              currentIndex2={currentIndex2}
            />
          </MainProduct>
          <MainProduct>
            <FlatList
              ref={flatListRef}
              data={saleContents}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <Product key={index}>
                  <HanaCard>
                    <HanaTextContainer>
                      <HanaTitle>{item.descriptrions.text}</HanaTitle>
                      <HanaSubtitle>{item.descriptrions.text1}</HanaSubtitle>
                      <HanaSubtitle>{item.descriptrions.text2}</HanaSubtitle>
                      <HanaPaginationContainer>
                        <HanaPaginationButton onPress={handlePrev}>
                          <Text>{'<'}</Text>
                        </HanaPaginationButton>
                        <HanaPageNumber>{`${currentIndex + 1} / ${saleContents.length}`}</HanaPageNumber>
                        <HanaPaginationButton onPress={handleNext}>
                          <Text>{'>'}</Text>
                        </HanaPaginationButton>
                      </HanaPaginationContainer>
                    </HanaTextContainer>
                    <Image
                      source={item.images[0]}
                      style={{ width: 100, height: 100 }}
                    />
                  </HanaCard>
                </Product>
              )}
              onMomentumScrollEnd={handleMomentumScrollEnd}
            />
          </MainProduct>
          <MainProduct>
            <TouchableOpacity onPress={() => handleNavigate('DoFarmingMain')}>
              <Product3>
                <HanaCard>
                  <HanaTextContainer>
                    <HanaTitle>적립식 이율 적금</HanaTitle>
                    <HanaSubtitle>MZ를 위한 예금 상품</HanaSubtitle>
                    <HanaSubtitle>최대 6% 이율</HanaSubtitle>
                  </HanaTextContainer>
                  <Image
                    source={require('../../assets/ch.png')}
                    style={{ width: 100, height: 100 }}
                  />
                </HanaCard>
              </Product3>
            </TouchableOpacity>
          </MainProduct>
        </Container>
      )}
    </SafeAreaView>
  );
}
