import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
} from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function ExploreScreen() {
  const navigation = useNavigation<any>();
  const [fadeAnim] = useState(new Animated.Value(0));

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;

    if (scrollY >= 100 && scrollY < 300) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Explore Screen</Text>
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.spacer}>
          <Button
            title="만보계 페이지로"
            onPress={() => navigation.navigate('Pedometer')}
            containerStyle={styles.button}
          />
        </View>
        <View style={styles.spacer} />
        <Animated.View style={[styles.spacer, { opacity: fadeAnim }]}>
          <Button
            title="경쟁화면 페이지로"
            onPress={() => navigation.navigate('Competitive')}
            containerStyle={styles.button}
          />
        </Animated.View>
        <View style={styles.spacer} />
        <View style={styles.spacer}>
          <Button
            title="상품가입 페이지로"
            onPress={() => navigation.navigate('ProductSignUp')}
            containerStyle={styles.button}
          />
        </View>
        <View style={styles.spacer}>
          <Button
            title="페이스아이디 페이지로"
            onPress={() => navigation.navigate('FaceId')}
            containerStyle={styles.button}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginVertical: 10,
  },
  spacer: {
    height: 200, // 각 spacer의 높이 설정
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
  button: {
    marginVertical: 10,
  },
});
