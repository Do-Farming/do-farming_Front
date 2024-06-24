import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${props => props.theme.grayColor};
`;


const Title = styled.Text`
  font-size: 19px;
  font-weight: 800;
`

const NewBang = styled.TouchableOpacity`
    background-color: ${props => props.theme.DarkGrayColor};
    border-radius: 10px;
    padding: 10px;
    align-self: flex-start; 
    box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
`

const NewBangText = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: 600;
`;

const RowContainer = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  margin-bottom: 10px;
`

const BangContainer = styled.View`
  flex-direction: 'column';
  justify-content: 'center';
  align-items: 'center';
  margin-vertical: 10;
  border-radius: 10px;
  background: #FFFFFF;
  border: 1px solid #F8F8FA;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
`;

const Bang = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  padding: 18px;
  width: 100%;
`

const BangInfoContainer = styled.View`
  flex-direction: row;
`

const BangText = styled.Text`
  color: ${props => props.theme.DarkGrayColor};
  font-weight: 800;
  font-size: 16px;
  margin-right: 5px;
`

const BangNumber = styled.Text`
  color: ${props => props.theme.mainDarkColor};
  font-weight: 700;
  font-size: 15px;
`

const BangDate = styled.Text`
  color: ${props => props.theme.DarkGrayColor};
  font-size: 14px;
  font-weight: 600;
`

export default function BangSearchScreen() {
  return (
    <Container>
      <RowContainer>
        <Title>챌린지 모임모임</Title>
        <NewBang>
          <NewBangText>방 만들기</NewBangText>
        </NewBang>
      </RowContainer>

      <BangContainer>
        <Bang>
          <BangInfoContainer>
            <BangText>갓생기</BangText><BangNumber>(3/5)</BangNumber>
          </BangInfoContainer>
          <BangDate>06/14</BangDate>
        </Bang>
      </BangContainer>

      <BangContainer>
        <Bang>
          <BangInfoContainer>
            <BangText>갓생기</BangText><BangNumber>(3/5)</BangNumber>
          </BangInfoContainer>
          <BangDate>06/14</BangDate>
        </Bang>
      </BangContainer>
      
    </Container>
  );
}

