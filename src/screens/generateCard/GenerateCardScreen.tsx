import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from '../home/HomeScreen.styled';
import { Container } from '../worldcup/card/CardWorldCupScreen.styled';
import { Animated, Easing, Image, TouchableOpacity, View } from 'react-native';
import {
  EnterText,
  InputTitle,
} from '../bang/bangCreate/BangCreateScreen.styled';
import {
  Button,
  ButtonContainer,
  ButtonText,
  CancelButton,
  CardLottieView,
  EnterButton,
  GenerateCardContainer,
  InfoText,
  InputContainer,
  TextArea,
  TextAreaContainer,
} from './GenerateCardScreen.styled';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axiosInstance from '../../apis/axiosInstance';
import { ChipIcon, DoFarmingIcon } from '../../assets';

const styles = ['선택 없음', '동양풍', '만화책', '귀엽게'];

export default function GenerateCardScreen({ route, navigation }: any) {
  const [imgDesc, setImgDesc] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isImgDescNull, setIsImgDescNull] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [selectedType, setSelectedType] = useState('선택 없음');
  const [loadingText, setLoadingText] = useState('카드 생성 중입니다');
  const animatedValue = useRef(new Animated.Value(0)).current;

  console.log('생성중', isGenerating);
  console.log('이미지 ', isImageLoaded);
  console.log('url', imageUrl);

  const generateImage = async () => {
    setImageUrl('');

    if (!imgDesc) {
      setIsImgDescNull(true);
      return;
    } else {
      setIsImgDescNull(false);
    }

    const finalDesc =
      selectedType && selectedType !== '선택 없음'
        ? `${imgDesc} (${selectedType})`
        : imgDesc;

    setIsGenerating(true);
    setIsImageLoaded(false);

    try {
      const response = await axiosInstance.post(
        '/api/gpt/generate-image',
        { prompt: finalDesc },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const imageUrl = response.data.data[0].url;
      setImageUrl(imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const animateColor = () => {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 4000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ).start();
    };

    animateColor();

    return () => {
      animatedValue.stopAnimation();
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGenerating) {
      interval = setInterval(() => {
        setLoadingText((prev) => {
          if (prev.endsWith('...')) {
            return '카드 생성 중입니다';
          } else {
            return prev + '.';
          }
        });
      }, 800);
    }
    return () => clearInterval(interval);
  }, [isGenerating]);

  const interpolatedColor = animatedValue.interpolate({
    inputRange: [0, 0.14, 0.42, 0.56, 0.7, 1],
    outputRange: [
      '#FFB3B3', // Pastel Red
      '#FFD580', // Pastel Orange
      '#B3FFB3', // Pastel Green
      '#B3D9FF', // Pastel Blue
      '#D1B3FF', // Pastel Indigo
      '#FFB3B3',
    ],
  });

  return (
    <SafeAreaView>
      {isImageLoaded && (
        <CardLottieView
          source={require('../../assets/worldcup/confetti.json')}
          autoPlay={true}
          loop={false}
          resizeMode="cover"
        />
      )}
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        extraScrollHeight={20}
      >
        <Container>
          <InfoText>
            {isImgDescNull
              ? '디자인 설명을 입력해주세요!'
              : isImageLoaded
                ? '나만의 카드가 생성되었습니다!'
                : isGenerating
                  ? loadingText
                  : '나만의 카드 생성 🧚‍♂️'}
          </InfoText>
          {isGenerating || imageUrl ? (
            <GenerateCardContainer>
              {!isImageLoaded && (
                <DoFarmingIcon width={'100%'} height={'100%'} />
              )}
              {isImageLoaded && imageUrl && (
                <ChipIcon
                  style={{ position: 'absolute', zIndex: 1, top: 10 }}
                />
              )}
              {imageUrl && (
                <Image
                  source={{ uri: imageUrl }}
                  style={{ width: 200, height: 300, borderRadius: 10 }}
                  onLoadEnd={() => {
                    setIsImageLoaded(true);
                    setIsGenerating(false);
                  }}
                />
              )}
            </GenerateCardContainer>
          ) : (
            <Image
              source={require('../../assets/worldcup/newCard.png')}
              style={{ width: 200, height: 300, borderRadius: 10 }}
            />
          )}
          <InputContainer>
            <InputTitle>어떤 카드를 생성하고 싶으세요?</InputTitle>
            <View style={{ width: '100%', flexDirection: 'row' }}>
              {styles.map((style) => (
                <TouchableOpacity
                  key={style}
                  onPress={() => setSelectedType(style)}
                >
                  <Button isSelected={selectedType === style}>
                    <ButtonText isSelected={selectedType === style}>
                      {style}
                    </ButtonText>
                  </Button>
                </TouchableOpacity>
              ))}
            </View>
            <TextAreaContainer>
              <TextArea
                placeholder="원하시는 이미지에 대해 상세하게 적어주세요!"
                numberOfLines={10}
                multiline
                editable
                value={imgDesc}
                onChangeText={(text) => setImgDesc(text)}
                style={{ width: '100%' }}
              />
            </TextAreaContainer>
          </InputContainer>

          <ButtonContainer>
            <CancelButton
              onPress={() => navigation.navigate('CardWinnerScreen')}
            >
              <EnterText>뒤로</EnterText>
            </CancelButton>
            <Animated.View
              style={{
                width: '45%',
                borderRadius: 10,
                backgroundColor: interpolatedColor,
              }}
            >
              <EnterButton onPress={generateImage} disabled={isGenerating}>
                <EnterText>{imageUrl ? '재생성하기' : '생성하기'}</EnterText>
              </EnterButton>
            </Animated.View>
          </ButtonContainer>
        </Container>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
