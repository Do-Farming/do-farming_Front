import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './HomeScreen.styled';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Home Screen</Text>
    </View>
  );
}
