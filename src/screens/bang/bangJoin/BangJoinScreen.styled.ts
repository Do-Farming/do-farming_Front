import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.grayColor};
`;

export const BoardContainer = styled.View`
  background-color: ${(props) => props.theme.whiteColor};
  min-height: 190px;
  margin-horizontal: 20px;
  margin-top: 5px;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
  padding: 20px;
  flex-direction: column;
  gap: 30px;
`;

export const InputContainer = styled.View`
  flex-direction: column;
  gap: 8px;
`;

export const InputTitle = styled.Text`
  font-size: 15px;
`;

export const InfoText = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.darkGrayColor};
`;

export const Header = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 5px;
`;

export const SubTitle = styled.Text`
  font-weight: bold;
  font-size: 17px;
  padding-horizontal: 20px;
  margin-top: 20px;
  padding-vertical: 10px;
`;
