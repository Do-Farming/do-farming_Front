import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MainTitle, styles } from './StartScreen.styled';
import LongButton from '../../components/LongButton';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <MainTitle>Do! farming</MainTitle>
      <LongButton text='로그인' backgroundColor='#FFB526'></LongButton>
      {/* <LongButton text='회원가입'></LongButton> */}
    </View>
  );
}
