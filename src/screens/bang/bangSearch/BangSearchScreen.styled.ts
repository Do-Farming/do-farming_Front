import styled from "styled-components/native";
import { BangProps } from "../../../types/BangTypes";

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${(props) => props.theme.grayColor};
`;

export const Title = styled.Text`
    font-size: 19px;
    font-weight: 800;
`;

export const NewBang = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.DarkGrayColor};
    border-radius: 10px;
    padding: 10px;
    align-self: flex-start;
    box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
`;

export const NewBangText = styled.Text`
    font-size: 14px;
    color: white;
    font-weight: 600;
`;

export const RowContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    alignitems: center;
    margin-bottom: 10px;
`;

export const BangContainer = styled.View`
    flex-direction: "column";
    justify-content: "center";
    align-items: "center";
    margin-vertical: 10px;
    border-radius: 10px;
    background: #ffffff;
    border: 1px solid #f8f8fa;
    box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
`;

export const Bang = styled.TouchableOpacity<BangProps>`
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 10px;
    padding: 18px;
    width: 100%;
`;

export const BangInfoContainer = styled.View`
    flex-direction: row;
`;

export const BangText = styled.Text`
    color: ${(props) => props.theme.DarkGrayColor};
    font-weight: 800;
    font-size: 16px;
    margin-right: 5px;
`;

export const BangNumber = styled.Text`
    color: ${(props) => props.theme.mainDarkColor};
    font-weight: 700;
    font-size: 15px;
`;

export const BangDate = styled.Text`
    color: ${(props) => props.theme.DarkGrayColor};
    font-size: 14px;
    font-weight: 600;
`;
