import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ExploreScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Explore Screen</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
