import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default function ExampleScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button
        title="챌린지 방 찾기 페이지로"
        onPress={() => navigation.navigate('BangSearch')}
      />
      <Button
        title="로그인 페이지로"
        onPress={() => navigation.navigate('SignIn')}
      />
      <Button
        title="회원가입 페이지로"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="마이 페이지로"
        onPress={() => navigation.navigate('MyPage')}
      />
      <Button
        title="이상형 월드컵 페이지로"
        onPress={() => navigation.navigate('WorldCup')}
      />
      <Button
        title="카드 생성 페이지로"
        onPress={() => navigation.navigate('GenerateCard')}
      />
      <Button
        title="퀴즈 페이지로"
        onPress={() => navigation.navigate('Quiz')}
      />
      <Button
        title="월드컵 소개 페이지로"
        onPress={() => navigation.navigate('WorldCupInfo')}
      />
      <Button
        title="이미지 생성 페이지로"
        onPress={() => navigation.navigate('ImageCreation')}
      />
      <Button
        title="챗봇 페이지로"
        onPress={() => navigation.navigate('ChatBot')}
        onPress={() => navigation.navigate('WorldCupInfo')}
      />
      <Button
        title="기상 미션 페이지로"
        onPress={() => navigation.navigate('WakeUp')}
      />
      <Button
        title="도파밍 소개 페이지로"
        onPress={() => navigation.navigate('DoFarmingInfo')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
