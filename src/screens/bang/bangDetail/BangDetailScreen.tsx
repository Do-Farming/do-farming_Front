import {
    BangNumber,
    BangParticipantContainer,
    BoardContainer,
    BoardContent,
    BoardDate,
    BoardTitle,
    ColumnContainer,
    Container,
    EnterButton,
    EnterText,
    ParticipantContainer,
    ParticipantName,
    RowContainer,
    StyledImage,
    Title,
    WakeUpContainer,
    WakeUpTime,
} from "./BangDetailScreen.styled";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

export default function BangDetailScreen({ navigation }: any) {
    return (
        <Container>
            <RowContainer>
                <Title>챌린지 모임모임</Title>
                <Icon name="link" size={20} color="#4A4A4A" />
            </RowContainer>
            <BoardContainer>
                <ColumnContainer>
                    <RowContainer>
                        <BoardTitle>갓생기</BoardTitle>
                        <BoardDate>24.06.14</BoardDate>
                    </RowContainer>

                    <BoardContent>
                        나 28살인디 나보다 갓생 살 자신있는넘들 덤벼라
                    </BoardContent>
                </ColumnContainer>
                <WakeUpContainer>
                    <WakeUpTime>
                        🚨 방장이 설정한 기상시간은 7시 입니다.
                    </WakeUpTime>
                </WakeUpContainer>
            </BoardContainer>
            <Title>
                현재 참여 인원 <BangNumber>(3/5)</BangNumber>
            </Title>

            <BangParticipantContainer
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <ParticipantContainer>
                    <StyledImage
                        source={require("../../../assets/1.png")}
                        width={50}
                        height={50}
                    ></StyledImage>
                    <ParticipantName>양채연님</ParticipantName>
                </ParticipantContainer>
                <ParticipantContainer>
                    <StyledImage
                        source={require("../../../assets/1.png")}
                        width={50}
                        height={50}
                    ></StyledImage>
                    <ParticipantName>양채연님</ParticipantName>
                </ParticipantContainer>
                <ParticipantContainer>
                    <StyledImage
                        source={require("../../../assets/1.png")}
                        width={50}
                        height={50}
                    ></StyledImage>
                    <ParticipantName>양채연님</ParticipantName>
                </ParticipantContainer>
                <ParticipantContainer>
                    <StyledImage
                        source={require("../../../assets/1.png")}
                        width={50}
                        height={50}
                    ></StyledImage>
                    <ParticipantName>양채연님</ParticipantName>
                </ParticipantContainer>
                <ParticipantContainer>
                    <StyledImage
                        source={require("../../../assets/1.png")}
                        width={50}
                        height={50}
                    ></StyledImage>
                    <ParticipantName>양채연님</ParticipantName>
                </ParticipantContainer>
                <ParticipantContainer>
                    <StyledImage
                        source={require("../../../assets/1.png")}
                        width={50}
                        height={50}
                    ></StyledImage>
                    <ParticipantName>양채연님</ParticipantName>
                </ParticipantContainer>
            </BangParticipantContainer>
            <EnterButton>
                <EnterText>입장하기</EnterText>
            </EnterButton>
        </Container>
    );
}
