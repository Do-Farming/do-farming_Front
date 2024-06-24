import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ExampleScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Button
                title="챌린지 방 찾기 페이지로"
                onPress={() => navigation.navigate("challengeBang")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEEEEE",
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
});
