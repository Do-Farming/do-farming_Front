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
  DescriptionAccountTexts,
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
  HanaProduct,
  HanaProductText,
  DescriptionView,
  GraySafeAreaView,
  ChatBotButton,
} from './HanaMainScreen.styled';
import { StyledImage } from '../bang/bangDetail/BangDetailScreen.styled';
import { mainContents, saleContents } from '../../mocks/hanaMainDatas';
import { useAuth } from '../../contexts/authContext';
import { myAccount } from '../../types/BankingSystem/AccountService';
import axiosInstance from '../../apis/axiosInstance';
import Splash from '../../components/Splash/Splash';
import MsgIcon from 'react-native-vector-icons/AntDesign';

const { width: windowWidth } = Dimensions.get('window');
export const getChecking = async () => {
  const response = await axiosInstance.get('/api/v1/account/my');
  console.log(response);
  return response.data.result as myAccount[];
};
const Pagination2: React.FC<{ length: number; currentIndex2: number }> = ({
  length,
  currentIndex2,
}) => (
  <PaginationContainer>
    {Array.from({ length }).map((_, index) => (
      <PaginationDot
        key={index}
        isActive={index === currentIndex2}
        index={index}
        length={length}
      />
    ))}
  </PaginationContainer>
);

export default function HanaMainScreen({ navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [showSplash, setShowSplash] = useState(false);
  const [myAccounts, setMyAccounts] = useState<myAccount[]>([]);
  const { isLogin } = useAuth();
  const flatListRef = useRef<FlatList>(null);
  const flatListRef2 = useRef<FlatList>(null);
  const [isAccountLoading, setIsAccountLoading] = useState(true);
  const formatAmount = (amount: number) => {
    if (amount === undefined || amount === null) return '';
    return amount.toLocaleString() + ' 원';
  };

  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const data = await getChecking();
        setMyAccounts(data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      } finally {
        setIsAccountLoading(false);
      }
    };

    if (isLogin) {
      loadAccounts();
    }
  }, [isLogin]);

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

  const goToTransactionPage = () => {
    navigation.navigate('TransactionHistory');
  };

  return (
    <GraySafeAreaView>
      {showSplash && <Splash />}
      {!showSplash && (
        <Container>
          <Header>
            <Row>
              {isLogin ? (
                <Row>
                  <StyledImage
                    source={require('../../assets/hana-symbol.png')}
                    width={20}
                    height={20}
                  />
                  <Username> 환영합니다.</Username>
                </Row>
              ) : (
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Row>
                    <StyledImage
                      source={require('../../assets/hana-symbol.png')}
                      width={30}
                      height={30}
                    />
                    <Username> 로그인</Username>
                  </Row>
                </TouchableOpacity>
              )}
            </Row>
          </Header>
          <MainProduct>
            {isLogin ? (
              <FlatList
                ref={flatListRef2}
                data={myAccounts}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={goToTransactionPage}>
                    <Product2 key={index}>
                      <DescriptionView>
                        <StyledImage
                          source={require('../../assets/hana-symbol.png')}
                          width={20}
                          height={20}
                        />
                        <DescriptionAccountTexts>
                          {item.name}
                        </DescriptionAccountTexts>
                      </DescriptionView>

                      <RowCenter>
                        <DescriptionTexts>
                          {item.accountNumber}
                        </DescriptionTexts>
                      </RowCenter>
                      <BalanceTexts>{formatAmount(item.balance)}</BalanceTexts>
                      <Row>
                        <Button width="48%" backgroundColor="#EFF0F4">
                          <ButtonText
                            onPress={() => navigation.navigate('SendMoney')}
                          >
                            보내기
                          </ButtonText>
                        </Button>
                        <Button width="48%" backgroundColor="#1EA698">
                          <ButtonText color="white">가져오기</ButtonText>
                        </Button>
                      </Row>
                    </Product2>
                  </TouchableOpacity>
                )}
                onMomentumScrollEnd={handleMomentumScrollEnd2}
              />
            ) : (
              <FlatList
                ref={flatListRef2}
                data={mainContents}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <Product2 key={index}>
                    <DescriptionSmallTexts>
                      {item.descriptrions.text1}
                    </DescriptionSmallTexts>
                    <RowCenter>
                      <DescriptionTexts>
                        {item.descriptrions.text2}
                      </DescriptionTexts>
                      <Image
                        style={{ width: 20, height: 15, marginBottom: 10 }}
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
                )}
                onMomentumScrollEnd={handleMomentumScrollEnd2}
              />
            )}
            {isLogin ? (
              <Pagination2
                length={myAccounts.length}
                currentIndex2={currentIndex2}
              />
            ) : (
              <Pagination2
                length={mainContents.length}
                currentIndex2={currentIndex2}
              />
            )}
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
            <HanaProduct onPress={() => navigation.navigate('AllProduct')}>
              <HanaProductText>하나은행 상품 보러가기</HanaProductText>
            </HanaProduct>
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
                    source={require('../../assets/running.gif')}
                    style={{ width: 100, height: 100 }}
                  />
                </HanaCard>
              </Product3>
            </TouchableOpacity>
          </MainProduct>
          <ChatBotButton onPress={() => navigation.navigate('ChatBot')}>
            <MsgIcon name="message1" size={30} color="#FFFFFF" />
          </ChatBotButton>
        </Container>
      )}
    </GraySafeAreaView>
  );
}
