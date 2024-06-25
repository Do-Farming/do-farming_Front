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
        title="시작 페이지로"
        onPress={() => navigation.navigate('StartScreen')}
      />
      <Button
        title="이상형 월드컵 페이지로"
        onPress={() => navigation.navigate("Worldcup")}
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
