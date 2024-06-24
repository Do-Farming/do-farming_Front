import { ImageSourcePropType, ScrollView } from "react-native";
import styled from "styled-components/native";
import { BangProps } from "../../../types/BangTypes";

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${(props) => props.theme.grayColor};
`;

export const RowContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 10px;
`;

export const Title = styled.Text`
    padding-left: 5px;
    font-size: 17px;
    font-weight: 800;
    margin-top: 10px;
`;

export const BoardContainer = styled.View`
    background-color: #fff;
    min-height: 210px;
    margin-top: 7px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
    padding: 20px;
    flex-direction: column;
    justify-content: space-between;
`;

export const BoardTitle = styled.Text`
    font-size: 19px;
    font-weight: 800;
`;

export const BoardDate = styled.Text`
    font-size: 13px;
    font-weight: 600;
`;

export const BoardContent = styled.Text`
    font-size: 15px;
    margin-top: 20px;
    font-weight: 500;
`;

export const ColumnContainer = styled.View`
    flex-direction: column;
`;

export const WakeUpContainer = styled.View`
    background-color: ${(props) => props.theme.grayColor};
    border-radius: 10px;
    padding: 10px;
`;

export const WakeUpTime = styled.Text`
    font-size: 14px;
    font-weight: 500;
`;

export const BangNumber = styled.Text`
    color: ${(props) => props.theme.mainDarkColor};
    font-weight: 700;
    font-size: 15px;
`;

export const BangParticipantContainer = styled(ScrollView)`
    padding: 10px;
    flex-direction: row;
    margin-top: 10px;
`;

export const ParticipantContainer = styled.View`
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin-right: 10px;
    max-height: 110px;
    box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
`;

interface StyledImageProps {
    source: ImageSourcePropType;
    width?: number;
    height?: number;
}

export const StyledImage = styled.Image<StyledImageProps>`
    width: ${({ width }) => (width ? `${width}px` : "100px")};
    height: ${({ height }) => (height ? `${height}px` : "100px")};
    border-radius: 99px;
    margin-top: 3px;
`;

export const ParticipantName = styled.Text`
    font-size: 13px;
    margin-top: 15px;
    text-align: center;
`;

export const EnterButton = styled.TouchableOpacity<BangProps>`
    background-color: ${(props) => props.theme.mainColor};
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 50px;
`;

export const EnterText = styled.Text`
    font-size: 15px;
    font-weight: 700;
    text-align: center;
`;
