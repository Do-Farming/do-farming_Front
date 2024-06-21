import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Pedometer } from "expo-sensors";
import * as Application from "expo-application";

export default function PedometerScreen() {
  // Pedometer 사용 가능 여부 상태
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  // 지난 24시간 동안의 걸음 수 상태
  const [pastStepCount, setPastStepCount] = useState(0);
  // 실시간 걸음 수 상태
  const [currentStepCount, setCurrentStepCount] = useState(0);
  // 디바이스 식별자 상태
  const [deviceId, setDeviceId] = useState<string | null>(null);

  useEffect(() => {
    // 디바이스 식별자 가져오기
    const getDeviceId = async () => {
      const id = await Application.getIosIdForVendorAsync();
      setDeviceId(id);
    };

    getDeviceId();

    // pedometer 사용 가능 여부 확인 및 걸음 수 구독 함수
    const subscribe = async () => {
      const isAvailable = await Pedometer.isAvailableAsync();
      setIsPedometerAvailable(String(isAvailable));

      if (isAvailable) {
        // 현재 날짜와 24시간 전 날짜를 설정
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 1);
        console.log(start.getDate());
        console.log(end);

        // 지난 24시간 동안의 걸음 수 가져오기
        const pastStepCountResult = await Pedometer.getStepCountAsync(
          start,
          end
        );
        if (pastStepCountResult) {
          setPastStepCount(pastStepCountResult.steps);
        }

        // 실시간 걸음 수 구독
        const subscription = Pedometer.watchStepCount((result) => {
          setCurrentStepCount(result.steps);
        });

        return subscription;
      }
    };

    // 구독 실행 및 정리 함수
    const subscriptionPromise = subscribe();
    let subscription: Pedometer.Subscription;
    subscriptionPromise.then((sub) => {
      if (sub) {
        subscription = sub;
      }
    });

    return () => {
      if (subscription && typeof subscription.remove === "function") {
        subscription.remove();
      }
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>만보계 페이지 입니다.</Text>
      <Text style={styles.text}>Sensor: {isPedometerAvailable}</Text>
      <Text style={styles.text}>24시간 걸음 수: {pastStepCount}</Text>
      <Text style={styles.text}>실시간 걸음 수: {currentStepCount}</Text>
      <Text style={styles.text}>Device ID: {deviceId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#000",
  },
});
