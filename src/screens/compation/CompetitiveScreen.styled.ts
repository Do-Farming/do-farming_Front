import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.whiteColor};
`;

export const ChartCard = styled.View`
  background-color: ${(props) => props.theme.whiteColor};
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
`;

export const ProgressHeader = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const UserList = styled.View`
  margin-top: 20px;
`;

export const UserCard = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.whiteColor};
  padding: 20px 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const RankNumber = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  color: #ff8c00;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const UserName = styled.Text`
  font-size: 18px;
`;

export const AchievedGoal = styled.Text`
  font-size: 16px;
  color: #888888;
`;

export const InterestRate = styled.Text`
  font-size: 16px;
  color: red;
  font-weight: bold;
  margin-left: auto;
`;

export const ChallengeButton = styled.Pressable`
  background-color: #fdce2e;
  border-radius: 10px;
  padding: 15px;
  margin-top: 5px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
`;

export const ChallengeText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;
