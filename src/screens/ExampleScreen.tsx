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
        onPress={() => navigation.navigate('Start')}
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
        title="하나 메인 이후 페이지로"
        onPress={() => navigation.navigate('HanaMainAfter')}
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
