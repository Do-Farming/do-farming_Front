import React from "react";
import {
    Bang,
    BangContainer,
    BangDate,
    BangInfoContainer,
    BangNumber,
    BangText,
    Container,
    NewBang,
    NewBangText,
    RowContainer,
    Title,
} from "./BangSearchScreen.styled";

export default function BangSearchScreen({ navigation }: any) {
    return (
        <Container>
            <RowContainer>
                <Title>챌린지 모임모임</Title>
                <NewBang onPress={() => navigation.navigate("BangCreate")}>
                    <NewBangText>방 만들기</NewBangText>
                </NewBang>
            </RowContainer>

            <BangContainer>
                <Bang onPress={() => navigation.navigate("BangDetail")}>
                    <BangInfoContainer>
                        <BangText>갓생기</BangText>
                        <BangNumber>(3/5)</BangNumber>
                    </BangInfoContainer>
                    <BangDate>06/14</BangDate>
                </Bang>
            </BangContainer>

            <BangContainer>
                <Bang onPress={() => navigation.navigate("BangDetail")}>
                    <BangInfoContainer>
                        <BangText>갓생기</BangText>
                        <BangNumber>(3/5)</BangNumber>
                    </BangInfoContainer>
                    <BangDate>06/14</BangDate>
                </Bang>
            </BangContainer>
        </Container>
    );
}
