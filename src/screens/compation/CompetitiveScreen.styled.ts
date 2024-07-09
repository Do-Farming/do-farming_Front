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

export const ProgressHeader2 = styled.Text`
  font-weight: bold;
  margin: 10px 0 5px 0;
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
  margin-right: 20px;
`;

export const UserName = styled.Text`
  font-size: 18px;
`;

export const AchievedGoal = styled.Text`
  font-size: 16px;
  color: #888888;
  margin-bottom: 5px;
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

export const UserInfo = styled.View`
  margin-left: 10px;
`;

export const SplashContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const SplashImage = styled.Image`
  width: 200px;
  height: 200px;
`;
