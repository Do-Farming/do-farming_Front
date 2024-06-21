import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from 'styled-components/native';
import theme from "../styles/theme";

const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.mainColor};
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  font-size: 16px;
  color: white;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
`;

export default function ExampleScreen() {
  return (
    <View style={styles.container}>
      <Button>
        <ButtonText>방 만들기</ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});

