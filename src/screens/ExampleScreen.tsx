import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from './home/HomeScreen.styled';

export default function ExampleScreen({ navigation }: any) {
  return (
    <SafeAreaView>
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
          title="하나 메인페이지로"
          onPress={() => navigation.navigate('HanaMain')}
        />
        <Button
          title="송금 페이지로"
          onPress={() => navigation.navigate('SendMoney')}
        />
        <Button
          title="이상형 월드컵 페이지로"
          onPress={() => navigation.navigate('WorldCupSelect')}
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
        />
        <Button
          title="기상 미션 페이지로"
          onPress={() => navigation.navigate('WakeUp')}
        />
        <Button
          title="도파밍 소개 페이지로"
          onPress={() => navigation.navigate('DoFarmingInfo')}
        />
        <Button
          title="거래내역 페이지로"
          onPress={() => navigation.navigate('TransactionHistory')}
        />
        <Button
          title="전체 상품 페이지로"
          onPress={() => navigation.navigate('AllProduct')}
        />
        <Button
          title="만보계 페이지로"
          onPress={() => navigation.navigate('Pedometer')}
        />
        <Button
          title="경쟁화면 페이지로"
          onPress={() => navigation.navigate('Competitive')}
        />
        <Button
          title="상품가입 페이지로"
          onPress={() => navigation.navigate('ProductSignUp')}
        />
        <Button
          title="페이스아이디 페이지로"
          onPress={() => navigation.navigate('FaceId')}
        />
      </View>
    </SafeAreaView>
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
