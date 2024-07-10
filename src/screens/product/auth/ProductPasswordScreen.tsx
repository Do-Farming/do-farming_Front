import React, { useState, useEffect } from 'react';
import { Image, Animated } from 'react-native';
import {
  Container,
  Header,
  DotsContainer,
  Dot,
  KeypadContainer,
  Key,
  Num,
  GIFs,
  SignUpButton,
  SignUpButtonText,
} from './ProductPasswordScreen.styled';
import { Path, Svg } from 'react-native-svg';
import {
  JoinCheckingType,
  JoinDofarmingType,
} from '../../../types/account/AccountTypes';
import { joinDofarmingProduct } from '../../../apis/accountService';
import { bangCreate, bangJoin } from '../../../apis/bangService';
import { joinChecking } from '../../../apis/productService';

// Array shuffle
const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

interface ProductPasswordScreenProps {
  navigation: any;
  route: any;
}

const ProductPasswordScreen: React.FC<ProductPasswordScreenProps> = ({
  navigation,
  route,
}) => {
  const [password, setPassword] = useState<string[]>([]);
  const [confirmedPassword, setConfirmedPassword] = useState<string[]>([]);
  const [keypadNumbers, setKeypadNumbers] = useState<string[]>([]);
  const [isConfirming, setIsConfirming] = useState(false);
  const [message, setMessage] = useState('계좌 비밀번호를 설정해주세요.');
  const shakeAnimation = new Animated.Value(0);

  const { joinDofarming, bang, from } = route.params;

  useEffect(() => {
    setKeypadNumbers(
      shuffleArray(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']),
    );
  }, [password, confirmedPassword]);

  const handleKeyPress = (num: string) => {
    if (isConfirming) {
      if (confirmedPassword.length < 4) {
        setConfirmedPassword([...confirmedPassword, num]);
      }
    } else {
      if (password.length < 4) {
        setPassword([...password, num]);
      }
    }
  };

  const handleDeletePress = () => {
    if (isConfirming) {
      setConfirmedPassword(confirmedPassword.slice(0, -1));
    } else {
      setPassword(password.slice(0, -1));
    }
  };

  const handleConfirm = async () => {
    if (password.join('') === confirmedPassword.join('')) {
      const updatedJoinDofarming: JoinDofarmingType = {
        ...joinDofarming,
        accountPassword: password.join(''),
      };

      const updatedJoinChecking: JoinCheckingType = {
        ...joinDofarming,
        accountPassword: password.join(''),
      };
      try {
        let resMsg = '';
        if (from === 'bangCreate') {
          const res = await bangCreate(bang);
          if (res.isSuccess) {
            await joinDofarmingProduct(updatedJoinDofarming);
          } else {
            resMsg = res.message;
          }
        } else if (from == 'ProductSignUp') {
          await joinChecking(updatedJoinChecking);
        } else if (from === 'bangJoin2') {
          await joinDofarmingProduct(updatedJoinDofarming);
          await bangJoin(bang);
        }
        navigation.navigate('ProductSignIn', { resMsg: { message: resMsg } });
      } catch (error) {
        console.error('상품 가입 요청 중 오류가 발생했습니다:', error);
        setMessage('상품 가입 요청 중 오류가 발생했습니다.');
      }
    } else {
      setMessage('틀렸습니다, 계좌비밀번호를 다시 입력해주세요.');
      setConfirmedPassword([]);
      startShake();
    }
  };

  const startShake = () => {
    shakeAnimation.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const shakeStyle = {
    transform: [
      {
        translateX: shakeAnimation.interpolate({
          inputRange: [-1, 1],
          outputRange: [-15, 15],
        }),
      },
    ],
  };

  const ArrowIcon = () => (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M19 12H5M12 19l-7-7 7-7" />
    </Svg>
  );

  return (
    <Container>
      <Header>{message}</Header>
      {password.length === 0 && !isConfirming ? (
        <GIFs>
          <Image
            source={{
              uri: 'https://media.tenor.com/rAHN17V5nhQAAAAi/huh-what.gif',
            }}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </GIFs>
      ) : (
        <GIFs>
          <Image
            source={{
              uri: 'https://media.tenor.com/HN5z9bLBvKgAAAAi/cover-ears.gif',
            }}
            style={{ width: 100, height: 100 }}
          />
        </GIFs>
      )}
      <Animated.View style={shakeStyle}>
        <DotsContainer>
          {Array.from({ length: 4 }).map((_, index) => (
            <Dot
              key={index}
              filled={
                index <
                (isConfirming ? confirmedPassword.length : password.length)
              }
            />
          ))}
        </DotsContainer>
      </Animated.View>
      <KeypadContainer>
        {keypadNumbers.slice(0, 9).map((num, index) => (
          <Key key={index} onPress={() => handleKeyPress(num)}>
            <Num>{num}</Num>
          </Key>
        ))}
        <Key>
          <Num>{''}</Num>
        </Key>
        <Key onPress={() => handleKeyPress(keypadNumbers[9])}>
          <Num>{keypadNumbers[9]}</Num>
        </Key>
        <Key onPress={handleDeletePress}>
          <ArrowIcon />
        </Key>
      </KeypadContainer>
      {password.length === 4 && !isConfirming && (
        <SignUpButton
          onPress={() => {
            setIsConfirming(true);
            setMessage('계좌비밀번호를 다시 입력해주세요.');
          }}
        >
          <SignUpButtonText>다음</SignUpButtonText>
        </SignUpButton>
      )}
      {confirmedPassword.length === 4 && isConfirming && (
        <SignUpButton onPress={handleConfirm}>
          <SignUpButtonText>가입 신청하기</SignUpButtonText>
        </SignUpButton>
      )}
    </Container>
  );
};

export default ProductPasswordScreen;
