import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from 'styled-components/native';

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

const Title = styled.Text`
  font-size: 19px;
  font-weight: 800;
`

const NewBang = styled.TouchableOpacity`
    background-color: ${props => props.theme.DarkGrayColor};
    border-radius: 10px;
    padding: 10px;
    align-self: flex-start; 
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
`

const BangContainer = styled.View`
  margin-top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const BangTextContainer = styled.View`
  flex-direction: row;
  justifyContent: space-between;
  alignItems: center;
`

const BangDate = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.DarkGrayColor};
  font-weight: 600;
`

const Bang = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  margin-bottom: 15px;
`

const BangText = styled.Text`
  color: ${props => props.theme.DarkGrayColor};
  font-weight: 800;
  font-size: 16px;
`
const BangNumber = styled.Text`
  color: ${props => props.theme.mainColor};
  font-weight: 800;
  font-size: 15px;
`


export default function ExampleScreen() {
  return (
    <View style={styles.container}>
      <RowContainer>
        <Title>챌린지 모임모임</Title>
        <NewBang>
          <NewBangText>방 만들기</NewBangText>
        </NewBang>
      </RowContainer>

      <BangContainer>
        <Bang>
          <BangTextContainer>
            <BangText>갓생기<BangNumber> (3/5)</BangNumber></BangText>
            <BangDate>06/24</BangDate>
          </BangTextContainer>
        </Bang>
        <Bang>
          <BangTextContainer>
            <BangText>갓생기<BangNumber> (3/5)</BangNumber></BangText>
            <BangDate>06/24</BangDate>
          </BangTextContainer>
        </Bang>
      </BangContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    paddingHorizontal: 20,
    paddingVertical: 30
  },
});

